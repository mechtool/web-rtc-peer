import {Injectable, NgZone, OnDestroy} from '@angular/core';
import {DatabaseService} from "./database.service";
import {AppContextService} from "./app-context.service";
import {Offer, PopupContext, WebRtcContext} from "../Classes/Classes";
import {Router} from "@angular/router";
import {PushNotificationService} from "./push-notification.service";
import {BehaviorSubject} from "rxjs";
import {StatusColorsService} from "./status-colors.service";
import {SmsService} from "./sms.service";
const uuid = require('uuid/v1');

@Injectable({
  providedIn: 'root'
})
export class WebRtcService implements OnDestroy{
    
    public collections = [{ first : '/web-rtc/offers/explicit/'}];
  constructor(
      public router : Router,
      public appContext : AppContextService,
      public database : DatabaseService,
      public statusColor : StatusColorsService,
      private ngZone : NgZone,
      public pushNotificationService : PushNotificationService,
      public sms : SmsService,) {
  }
    ngOnDestroy(): void {
	this.collections.forEach(element => {
	    if(this.database){
		let ref = this.database.getRef(element.first);
		ref && ref.off();
	    }
	})
    }
    
    initialize(){
        this.collections.forEach(element => {
	    this.database.getRef(element.first + this.appContext.appUser.uid).orderByChild("action").equalTo('offered').on('child_added', this.setPopup.bind(this));
	})
  }
  
  async startWebRtc(descriptor){
      //todo Удалить имеющийся вызов перед инициализацией нового
      //Создается новый контекст WebRtc
      let webRtcContext = new WebRtcContext({
	  wid  : descriptor.wid,
	  uid : descriptor.uid,
	  desc : descriptor,
	  sender : descriptor.sender,
	  receivers : new BehaviorSubject(descriptor.receivers),
      });
      this.appContext.webRtcContexts.addContext(webRtcContext);
      this.appContext.contextId = webRtcContext.wid;
      //Запускаем компонент web-rtc
       this.router.navigateByUrl('/application/web-rtc');
  }
  
  
  setPopup(d){
      let desc = d.val();
      if(desc) {
          this.appContext.setPopups({
	      type : true,
	      popup : new PopupContext({
		  type : 1,
		  text : 'Входящий вызов.',
		  active : true,
		  contact : desc.sender,
		  desc : desc,
		  listener : this.startWebRtc.bind(this, desc),
		  extra : {timeout : true},
	      })}) ;
          this.appContext.appChangeRef.detectChanges();
      }
  }
    //Остановка видеоконтекстов
    stopVideoChannel(videoContext){
	let webRtcContext = this.appContext.webRtcContexts.getContext(videoContext.wid),
	    conUid = videoContext.contact.value.uid;
	if(webRtcContext){
	    conUid = (conUid === this.appContext.appUser.uid || webRtcContext.videoCollection.length == 2) ? undefined : conUid;
	    //Отправка сообщений всем пирам о прекращении соединения локальным контекстом
	    conUid || this.sendDataMessages(videoContext.wid, this.appContext.appUser.uid, {type : 'status', statusColor : this.statusColor.statusColors.webrtc.perConnectionStates['closed'], statusText : 'closed'}) ;
	    for(let i = webRtcContext.videoCollection.length - 1 ; i >= 0 ; i--){
	       let vc = webRtcContext.videoCollection[i],
		   exactly = vc.contact.value.uid === conUid;
	       if(!conUid || exactly){
		   let webRtcConnectionContext = webRtcContext.webRtcConnections[vc.contact.value.uid];
		   vc.stream.value && vc.stream.value.getTracks().forEach(track => track.stop());
		   webRtcConnectionContext.pcConnection && webRtcConnectionContext.pcConnection.destroy();
		   webRtcContext.videoCollection.splice(i, 1);
		   //Очистить все таймауты (На тот случай, если пользователь запустил соединение
		   // и тут же его отменил, что бы после отмены соединения не проверялось предложение на
		   // предмет состояния вызова)
		   WebRtcService.clearContextTimeouts(webRtcConnectionContext);
	       }
	       //Идентификатор контакта определен - прервать цикл на удалении только одного соединения
	      if(exactly) break;
	    }
	    //Идентификатор контакта неопределен - закрыть все соединения
	    if(!conUid){
		//Очистить коллекцию контекстов
		this.appContext.webRtcContexts.deleteAllContexts();
		//Очистить локальные настройки
		this.appContext.localVideoAudio = {type : 'settings', video : 1, audio : 1};
		//Переход на другую страницу
		this.ngZone.run(() => {
		    this.router.navigateByUrl('/application/main/new-message');
		});
	    
	    }
	}
    }
    
    //Установка уведомления на страницу Announcement.component
    setAnnouncement(popup){
	//Коллекция элементов на странице уведомлений
	this.appContext.announcements.next([popup].concat(this.appContext.announcements.value)) ;
	this.appContext.appChangeRef.markForCheck();
    }
     //Проверка статуса соединения
    checkConnectionState(options){
	//Завершение соединения, если контакт разъединился
	if(/failed|closed/.test(options.state)){
	    //Выдать уведомление о закрытии контактом соединения
	    this.setAnnouncement(new PopupContext({
		    uid : uuid(),
		    type : 2,
		    date : Date.now(),
		    active : true,
		    listener : ()=>{},
		    contact : options.contact,
		    text :  'Контакт прервал соединение.',
	    })) ;
	    //Закрыть текущее соединение
	    this.stopVideoChannel(options.videoContext);
	}
    }
    
    checkVideoContexts(videoContext) {
	//Проверяет видеоконтексты. Если активных больше одного, тогда локальному контексту
	//присваевается класс fixed (фиксированный), регулирующий поведение в интерфейсе :
	// элемент становиться абсолютным, уменьшенным в размере, принимает положение внизу слева
	let webRtcContext = this.appContext.webRtcContexts.getContext(videoContext.wid),
	    local =  webRtcContext.videoCollection.filter(video => video.contact.value.uid === this.appContext.appUser.uid)[0];
	if (local) {
	    //Установка элементу локальному контексту фиксированный класс для принятия абсолютной позиции
	    //и снятие иконки вызывающей пульсации
	    local.className.fixed = webRtcContext.videoCollection.filter(video => video.className.active).length > 1;
	    //Снятие пульсации
	    local.className.pulse = false;
	    //todo Можно останавливать звуковой файл вызова.
	}
    }
  
    onError(error){
	console.log(error);
    }
    
    static clearContextTimeouts(webRtcConnectionContext){
	if(webRtcConnectionContext.timeout){
	    window.clearTimeout(webRtcConnectionContext.timeout);
	    webRtcConnectionContext.timeout = undefined;
	}
    }
    
    sendDataMessages(wid, uid, message){
	let webRtcContext = this.appContext.webRtcContexts.getContext(wid);
	webRtcContext && webRtcContext.videoCollection.forEach(videoContext =>{
	    if(videoContext.contact.value.uid !== uid){
		if(!!videoContext.dataChannel.channel && videoContext.dataChannel.channel.readyState === 'open'){
		    videoContext.dataChannel.channel.send(JSON.stringify(message));
		}
	    }
	})
    }
    
    sendOffer(webRtcConnectionContext){
	let that = this,
	    offer = webRtcConnectionContext.descriptor;
	//Если нужно дублировать вызов отправкой оповещения - запускаем оповещение ,
	//иначе, проверяем находиться ли пользователь в сети, и если нет, то запускаем оповещение
	if(JSON.parse(window.localStorage.getItem('duplicateCall'))) return send(false);
	else{
	    return this.database.getUserOnline(offer.contact.uid).then(onlineSnap =>{
		return send.bind(this, onlineSnap.val())();
	    })
	}
	
	async function send(online){
	    //Если контакт не находиться в сети - отправляем ему push уведомление
	    if(!online){
	        let contact = offer.contact;
	        switch (window.localStorage.getItem('callModel')) {
		    case '0' : { //режим отправки sms
		        // Если контакт присутствует в списке контактов пользователя
			that.appContext.contacts.value.some(cont => cont.uid === contact.uid) ? that.pushNotificationService.sendNotification(offer) : that.sms.sendSms(offer);
		    	}
			break;
		    case '1' : {
			that.pushNotificationService.sendNotification(offer);
		    }
		} //'0' -sms '1'-push
	    }
	    //Отправка самого дескриптора
	    await that.database.sendDescriptor(offer).then(res => {
		console.log('Предложение отправлено контакту '+ offer.contact.uid);
	    }).catch(that.onError);

	    //Установка таймаута ответа контакта:
		//Для каждого явного предложения устанавливается таймаут, по прошествии которого проверяется
		//состояние предложения по свойству action. Если оно denied/offered,
		// тогда пользователю отображается уведомление на страницу уведомлений
		//о том, что контакт прервал/проигнорировал вызов.
		// НО ТОЛЬКО ОДИН POPUP ОТОБРАЖАЕТСЯ ПОЛЬЗОВАТЕЛЮ И  ТОЛЬКО ДЛЯ ПОСЛЕДНЕГО
		//ПРЕДЛОЖЕНИЯ, ЕСЛИ ВСЕ КОНТАКТЫ В ВЫЗОВЕ НЕ ПРИНЯЛИ СВОИХ ПРЕДЛОЖЕНИЙ
		//Если свойство - offered, его значение меняется на ignored
		webRtcConnectionContext.timeout = window.setTimeout(()=> {
		    if(webRtcConnectionContext.timeout){
			//Подписка на изменение свойства предложения action
			let ref = `web-rtc/${offer.type}/${offer.contact.uid}/${offer.messId}/action`;
			//Подписка на изменение статуса свойства action (пользователь ответил, или отклонил вызов)
			that.database.getRef(ref).once('value').then( actionSnap => {
			    let action = actionSnap.val(), text = '';
			    if(/ignored|offered/.test(action)) {
				text = 'Вызов пропущен контактом!';
				//Изменить значение свойства action на ignored в базе
				that.database.setDescriptorOptions({descriptor : offer, data : {action : 'ignored', active : false}});
				//Изменить значение свойства action в дескрипторе
				offer.action = 'ignored';
				text = 'Вызов пропущен контактом.' ;
				//Пользователь  не принял предложение - записываем это в область входящих сообщений
				that.database.changeMessage('/messages/'+ offer.contact.uid +'/'+ offer.wid + '/actions' , {[offer.contact.uid] :offer.action}) ;
				//Пользователь  не принял предложение - записываем это в область исходящих сообщений
				that.database.changeMessage('/messages/'+ offer.sender.uid +'/'+ offer.wid + '/actions' , {[offer.contact.uid] : offer.action}) ;
			    }
			    else if(/denied/.test(action)) {
				text = 'Вызов прерван контактом.';
				offer.action = 'denied';
			    }else if(/accepted/.test(action)) {
			        //Вызов принят
				text = 'Вызов принят контактом.' ;
				offer.action = 'accepted';
			    }
			    
			    //Установка уведомление для страницы уведомлений
			    that.setAnnouncement(new PopupContext({
				desc : offer,
				text : text,
				type : 2,
				active : true,
				contact : that.appContext.searchMessageContacts([offer.contact])[0]
			    }));
			    //Обновление интерфейса
			    that.appContext.appChangeRef.markForCheck();
			    //Отчистка таймаута
			    WebRtcService.clearContextTimeouts(webRtcConnectionContext) ;
			    //Проверка предложений на предмет ответов контактов
			    checkOffers();
			});
		    }
		} , that.appContext.dialogDelay[parseInt(window.localStorage.getItem('callTime'))]
	    )
	}
	
	function checkOffers() {
	    //Проверка на существование принятых предложений контактами
	    //Если таких предложений нет, и текущее предложение является последним в списке отправленных
	    //тогда направляем пользователю всплывающее оповещение о том, что ни один из контактов не принял предложение.
	    let webRtcContext : WebRtcContext = that.appContext.webRtcContexts.getContext(offer.wid);
	    if(webRtcContext){
		if(Object.values(webRtcContext.webRtcConnections).every(connection => {
		    return !connection.descriptor || /ignored|denied/.test((connection.descriptor as Offer).action) ;
		})){
		    //Отправить оповещение пользователю о том, что ни один из контактов не
		    //отвелил. Вызов оказался не принятым.
		    that.appContext.setPopups({ type : true, popup : new PopupContext({
			    type : 2,
			    active : true,
			    text : 'Контакты не ответили.',
			    contact : {photoURL : '/assets/app-shell/error_outline-24px.svg', imgColor : 'transparent', name : 'Вызов завершен.'},
			    listener : ()=>{
				//Запуск функции завершения вызова видеосообщения
				that.stopVideoChannel(webRtcContext.videoCollection[0]);
			    },
			    extra : {timeout : true, icon : 'attention'}
			})});
		    //Снятие индикации вызова соединения
		    webRtcContext.videoCollection.filter(video => video.local)[0].className.pulse = false;
		    //Обновление интерфейса
		    that.appContext.appChangeRef.markForCheck();
		}
	    }
	}
    }
}
