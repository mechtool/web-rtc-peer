import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";
import {ColorThemeService} from "../../../../../services/color-theme.service";
import {BehaviorSubject} from "rxjs";
import {DatabaseService} from "../../../../../services/database.service";
import {Message} from "../../../../../Classes/Classes";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {
    
    public overlaySpinner = false;
    public activeMessages = new BehaviorSubject([]);
    public messageTabs = [
	{label : 'Исходящие', className : 'outer', collection : this.appContext.outgoingMessages} ,
	{label : 'Принятые', className : 'accepted', collection : this.appContext.incomingAcceptedMessages} ,
	{label : 'Пропущенные', className : 'skipped', collection : this.appContext.incomingMissingMessages} ,
    ];
    
    
    constructor(
        public colorThemeService : ColorThemeService,
        public database : DatabaseService,
        public appContext : AppContextService,
		@Inject(PLATFORM_ID) public platformId: Object
    ) { }


    onClickMessage(prop){
	let active,
	    value = this.activeMessages.value,
	    target = prop.event.currentTarget;
	target.classList.toggle('active');
	target.style.backgroundColor = (active = target.classList.contains('active')) ? this.colorThemeService.getThemeColor('highlight')
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
    
    
    onDeleteMessage(index){
        this.activeMessages.value.forEach((mess : Message) => {
	    //Удаление из коллекции outbox
	    this.database.database.ref(mess.path).set(null);
	});
        //Отчистка активных сообщений
	this.activeMessages.next([]) ;
    }
}
