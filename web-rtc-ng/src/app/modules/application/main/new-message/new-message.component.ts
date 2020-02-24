import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Contact, WebRtcContext} from "../../../../Classes/Classes";
import {AppContextService} from "../../../../services/app-context.service";
import {ApplicationComponent} from "../../application.component";
import {ColorThemeService} from "../../../../services/color-theme.service";
import {Router} from "@angular/router";
import {WebRtcService} from "../../../../services/web-rtc.service";

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
    public webRtcContext : any = new WebRtcContext({uid : 'Unknown'});
    //Контакты одного конкретного сообщения - контакты с которыми пользователь ведет сообщение
    public messageContacts : BehaviorSubject<Contact[]> = new BehaviorSubject([]);
    
    constructor(
	public appContext: AppContextService,
	public applicationComponent : ApplicationComponent,
	public webRtcService : WebRtcService,
	public colorThemeService : ColorThemeService,
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
	this.webRtcService.startWebRtc({uid : this.appContext.appUser.uid, receivers : this.messageContacts.value, sender : this.appContext.appUser}) ;
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