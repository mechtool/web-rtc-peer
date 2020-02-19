import {Component, Input, OnInit} from '@angular/core';
import {IncomingPopupContext} from "../../../../Classes/Classes";
import {AppContextService} from "../../../../services/app-context.service";
import {DatabaseService} from "../../../../services/database.service";
import {PopupNotificationsComponent} from "../popup-notifications.component";

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.css']
})
export class UpdatePopupComponent implements OnInit {
    
    public contactName;
    @Input() public context : IncomingPopupContext;
    buttons = [
	{tip : 'Установить', icon : 'check_circle', color : '#00902e', listener : ()=> {
		this.popupComponent.onCancel(this.context);
	    }},
	{tip : 'Отклонить', icon : 'highlight_off', color : '#c02500', listener : ($event)=> {
	    	this.context.listener = undefined;
		this.popupComponent.onCancel(this.context);
	    }}
    ];
    constructor(
	public appContext : AppContextService,
	public database : DatabaseService,
	public popupComponent : PopupNotificationsComponent,
    ) {}
    
    ngOnInit() {
	this.contactName = this.context.contact.name || this.context.contact.displayName || this.context.contact.phoneNumber || this.context.contact.email;
	//Установка таймера
	this.popupComponent.onInit(this.context);
  }
}
