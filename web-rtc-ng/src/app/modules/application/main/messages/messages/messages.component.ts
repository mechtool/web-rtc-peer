import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";
import {ColorThemeService} from "../../../../../services/color-theme.service";
import {BehaviorSubject} from "rxjs";
import {DatabaseService} from "../../../../../services/database.service";
import { Offer} from "../../../../../Classes/Classes";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    public buttons = [];
    public activeMessages = new BehaviorSubject([]);
    
    constructor(
        public colorThemeService : ColorThemeService,
        public database : DatabaseService,
        public appContext : AppContextService,
		@Inject(PLATFORM_ID) public platformId: Object
    ) { }

  ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
	  this.buttons = [{icon : 'video', disabled : false},{icon : 'replay', disabled : false}, {icon : "base_clear", disabled : false}];
	  this.activeMessages.subscribe(messages =>{
	     this.buttons.forEach((button, inx )=> {
	          button.disabled = inx < 2 ? messages.length !== 1 : !messages.length ;
	     })
	  })
      }
  }
    onClickMessage(prop){
	let active,
	    value = this.activeMessages.value,
	    target = prop.event.currentTarget;
	target.classList.toggle('active');
	target.style.backgroundColor = (active = target.classList.contains('active')) ?
	    this.colorThemeService.getThemeColor('highlight')
	: this.getNeededColor(prop.index);
	if(active) value.push(prop.message);
	else{
	    value = value.filter(mess => {
	        return mess.messId !== prop.message.messId
	    }) ;
	}
	
	this.activeMessages.next(value);
    }
    
    focusChange(){
	    document.querySelectorAll('app-message').forEach((mess: Element & HTMLElement, inx) => {
		mess.classList.remove('active') ;
		mess.style.backgroundColor = this.getNeededColor(inx);
	    })  ;

        this.activeMessages.next([]);
    }
    
    getNeededColor(index){
	return 0 === index % 2 ? this.colorThemeService.getThemeColor('even') : this.colorThemeService.getThemeColor('odd')
    }
    
    contactCall(){
    
    }
    
    openMessage(){
    
    }
    onDeleteMessage(index){
        this.activeMessages.value.forEach((mess : Offer) => {
	    mess.sourceUrl && this.database.storage.ref(mess.sourceUrl).delete();
	    //Удаление из коллекции outbox
	    this.database.database.ref('/messages/outgoing/' + this.appContext.appUser.uid + '/'+ mess.wid).set(null);
	});
        //Отчистка активных сообщений
	this.activeMessages.next([]) ;
    }
}
