import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Contact, Message, Offer, PopupContext, WebRtcContext} from "../../../../Classes/Classes";
import {AppContextService} from "../../../../services/app-context.service";
import {ApplicationComponent} from "../../application.component";
import {ColorThemeService} from "../../../../services/color-theme.service";
import {Router} from "@angular/router";
import {WebRtcService} from "../../../../services/web-rtc.service";
import {DatabaseService} from "../../../../services/database.service";
import has = Reflect.has;
let uuid = require('uuid/v1');

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
    
    public callModel;
    public search = false;
    public buttons = [];
    public activateEdit = true;
    public newMessageHeader = 'Новое сообщение';
    public subscribers = [];
    public contactRestriction ;
    public webRtcContext : any = new WebRtcContext({uid : 'Unknown'});
    //Контакты одного конкретного сообщения - контакты с которыми пользователь ведет сообщение
    public messageContacts : BehaviorSubject<Contact[]> = new BehaviorSubject([]);
    
    constructor(
	public appContext: AppContextService,
	public applicationComponent : ApplicationComponent,
	public webRtcService : WebRtcService,
	public colorThemeService : ColorThemeService,
	public database : DatabaseService,
	public router : Router,
    ) {}
    
    ngOnInit(){
	if(this.appContext.user.value) {
	    this.callModel = window.localStorage.getItem('callModel');
	    this.messageContacts.next(Object.values(this.appContext.activeContacts));
	    this.appContext.activeContacts = {};
	    this.buttons = ['search_contact', 'remove_contact', ]
	}
    }
    
    ngOnDestroy(){
	//Отчистка подписок
	this.subscribers.forEach(sub => sub.unsubscribe());
	//Отчистка активизированных контактов
	this.appContext.activeContacts = {};
    }
    
    
    onOptionSelect(contact){
	let contacts = this.messageContacts.value;
	this.contactRestriction = window.localStorage.getItem('contactRestriction'); //0 - 1 ; 1 - auto
	//Если условия соблюдены
	if((this.contactRestriction == '0' && Object.keys(contacts).length < 1) || this.contactRestriction == '1'){
	}else{
	    //Выдать уведомление о невозможности добавления контакта
	    console.log('Невозможно добавить контакт. Превышает ограничение добавления контактов.')  ;
	    return false;
	}
	contacts.push(contact);
	this.messageContacts.next(contacts);
    }
    
    onActivatedContact(option : {contact : Contact, add : boolean}){
	if(option.add) this.appContext.activeContacts[option.contact.uid] = option.contact ;
	else delete this.appContext.activeContacts[option.contact.uid];
	this.activateEdit = !Object.keys(this.appContext.activeContacts).length;
    }
    
    triggerSearch(){
	this.search = !this.search;
    }
    
    onStartCall(){
	//todo Проверить длинну коллекции контекстов и при необходимости удалить имеющийся
	let wid = uuid();
	this.webRtcService.startWebRtc(
	    {
		uid : this.appContext.appUser.uid,
		receivers : this.messageContacts.value,
		wid : wid,
		sender : this.appContext.appUser,
		messageUrl : '/messages/'+ this.appContext.appUser.uid +'/'+ wid
	    }).then(res => {
	let outgoing = {
	    type : 'outgoing',
	    path : '/messages/'+ this.appContext.appUser.uid +'/'+ wid,
	    sender :  this.appContext.appUser ,
	    date : Date.now(),
	    wid : wid,
	    receivers : this.messageContacts.value,
	    actions : (()=> {
	        let res = {};
		this.messageContacts.value.forEach(cont => {
		    res[cont.uid] = 'offered';
		});
		return res;
	    })(),
	    messId : uuid(),
	    metadata : window.localStorage.getItem('callSave') === '1' ? {[this.appContext.appUser.uid] : {visual : {[Date.now()] : this.appContext.localVideoAudio}}} : {}},
		receivers = outgoing.receivers;
	[outgoing].concat(receivers.map((cont) => {
		return {
		    type : 'incoming',
		    path : '/messages/'+ cont.uid +'/'+ outgoing.wid,
		    sender :  outgoing.sender ,
		    messId : uuid(),
		    receivers : receivers,
		    date : outgoing.date,
		    wid : outgoing.wid,
		    contact : cont,
		    actions :{[cont.uid] : 'offered'},
		    metadata : {} }})).forEach(m =>
	    this.database.sendMessage(m)) ;
	    //Сообщение отправлено, нужно установить тайаут для проверки ответов удаленных пиров
	    //Установка таймаута ответа контакта:
	    //Для каждого явного предложения устанавливается таймаут, по прошествии которого проверяется
	    //состояние предложения по свойству action. Если оно denied/offered,
	    // тогда пользователю отображается уведомление на страницу уведомлений
	    //о том, что контакт прервал/проигнорировал вызов.
	    // НО ТОЛЬКО ОДИН POPUP ОТОБРАЖАЕТСЯ ПОЛЬЗОВАТЕЛЮ И  ТОЛЬКО ДЛЯ ПОСЛЕДНЕГО
	    //ПРЕДЛОЖЕНИЯ, ЕСЛИ ВСЕ КОНТАКТЫ В ВЫЗОВЕ НЕ ПРИНЯЛИ СВОИХ ПРЕДЛОЖЕНИЙ
	    //Если свойство - offered, его значение меняется на ignored
	    this.appContext.webRtcContexts.getContext(wid).extra.timeout = setTimeout(()=>{
		    let hasAccepted = false,
			webRtcContext = this.appContext.webRtcContexts.getContext(wid);
		    if(webRtcContext.extra.timeout){
			for(let key in webRtcContext.extra.actions){
			    let text, action = webRtcContext.extra.actions[key],
				offer = webRtcContext.webRtcConnections[key].descriptor as Offer;
			    if(/ignored|offered/.test(action)) {
				text = 'Вызов пропущен контактом!';
				//Изменить значение свойства action на ignored в базе
				this.database.setDescriptorOptions({descriptor : offer, data : {action : 'ignored', active : false}});
				//Изменить значение свойства action в дескрипторе
				offer.action = 'ignored';
				text = 'Вызов пропущен контактом.' ;
				//Пользователь  не принял предложение - записываем это в область входящих сообщений
				this.database.changeMessage('/messages/'+ offer.contact.uid +'/'+ offer.wid + '/actions' , {[offer.contact.uid] :offer.action}) ;
				//Пользователь  не принял предложение - записываем это в область исходящих сообщений
				this.database.changeMessage('/messages/'+ offer.sender.uid +'/'+ offer.wid + '/actions' , {[offer.contact.uid] : offer.action}) ;
			    }
			    else if(/interrupted/.test(action)){
				text = 'Вызов прерван инициатором.';
				hasAccepted = true;
				offer.action = 'interrupted';
			    }
			    else if(/denied/.test(action)) {
				text = 'Вызов прерван контактом.';
				offer.action = 'denied';
			    }else if(/accepted/.test(action)) {
				//Вызов принят
				hasAccepted = true;
				text = 'Вызов принят контактом.' ;
				offer.action = 'accepted';
			    }
			    
			    //Установка уведомление для страницы уведомлений
			    this.webRtcService.setAnnouncement(new PopupContext({
				desc : offer,
				text : text,
				type : 2,
				active : true,
				contact : this.appContext.searchMessageContacts([offer.contact])[0]
			    }));
			    //Обновление интерфейса
			    this.appContext.appChangeRef.markForCheck();
			}
			//Отчистка таймаута
			clearTimeout(webRtcContext.extra.timeout);
			webRtcContext.extra.timeout = undefined;
			
			if(!hasAccepted) {
			    //Отправить оповещение пользователю о том, что ни один из контактов не
			    //отвелил. Вызов оказался не принятым.
			    this.appContext.setPopups({
				add: true, popup: new PopupContext({
				    type: 2,
				    active: true,
				    text: 'Контакты не ответили.',
				    contact: {photoURL: '/assets/app-shell/error_outline-24px.svg', imgColor: 'transparent', name: 'Вызов завершен.'},
				    listener: () => {
					//Запуск функции завершения вызова видеосообщения
					this.webRtcService.stopVideoChannel(webRtcContext.videoCollection[0]);
				    },
				    extra: {timeout: true, icon: 'attention'}
				})
			    }) ;
			    //Снятие индикации вызова соединения
			    webRtcContext.videoCollection.filter(video => video.local)[0].className.pulse = false;
			    //Обновление интерфейса
			    this.appContext.appChangeRef.markForCheck();
			}
		    }
		
	    }, this.appContext.dialogDelay[parseInt(window.localStorage.getItem('callTime'))]);
    	})
    }
    
    onDeleteItems(){
	for(let key in this.appContext.activeContacts){
	    let filter = this.messageContacts.value.filter(cont => cont.uid !== key);
	    this.messageContacts.next(filter);
	}
	this.appContext.activeContacts = {};
	this.activateEdit = true;
    }

}
