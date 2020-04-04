import {Component,  Input, OnInit} from '@angular/core';
import {Message, PopupContext} from "../../../../../Classes/Classes";
import {DatabaseService} from "../../../../../services/database.service";
import {AppContextService} from "../../../../../services/app-context.service";
import {Router} from "@angular/router";
import {MessagesComponent} from "../messages/messages.component";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  
    public activeContacts = [];
    public buttons = [];
    public svgIcon;
    public downloaded = false;
    public contactNames = [];
    @Input() public context : Message ;
 
  constructor(
      public appContext : AppContextService,
      public database : DatabaseService,
      public messagesComp : MessagesComponent,
      private router : Router,
  ) { }
  
  async onErrorContactImg(event){
	//Если контакт пользователя сам поменял изображение, то ссылка на него меняется.
	//Вылетает ошибка загрузкти ресурса, поэтому перегружаем ресурс из объекта User
	await this.database.onErrorContactImg(event, this.context);
	return true;
    }
  
    callContact(){
        let res = this.context.type === 'incoming' ? [this.context.sender] : this.context.receivers  ;
        if(res.length > 1){
            this.appContext.notifications = [{state : 'sub-messages', className : 'sub-messages', context : { contacts : res}}]
	}else{
            let cont = res[0];
	    this.appContext.activeContacts[cont.uid] = cont;
	    this.router.navigateByUrl('/application/main/new-message');
	}
    }
    
    openMessage(){
        this.appContext.activeMessage = this.context;
        this.messagesComp.overlaySpinner = true;
	this.router.navigateByUrl('/application/video-player');
    }
  
    ngOnInit() {
      this.activeContacts = (this.context.type === 'outgoing'? this.context.receivers : [this.context.sender]);
      this.contactNames = this.activeContacts.map((cont)=> cont.name || cont.displayName || cont.phoneNumber || cont.email) ;
      this.svgIcon = this.context.sender.uid === this.appContext.appUser.uid ? 'outgoing' : (Object.values(this.context.actions).some(act => Object.values(act)[0] === 'accepted') )? 'accepted' : 'missing';
      this.downloaded = this.context.metadata && Object.values(this.context.metadata).some((meta : any)=> meta.downLoadedUrl);
      }

}
