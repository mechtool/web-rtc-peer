import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "../../../Classes/Classes";
import {AppContextService} from "../../../services/app-context.service";
import {Router} from "@angular/router";
import {ColorThemeService} from "../../../services/color-theme.service";


@Component({
  selector: 'app-sub-messages',
  templateUrl: './sub-messages.component.html',
  styleUrls: ['./sub-messages.component.css']
})
export class SubMessagesComponent  {

    public disableButton = true;
    @Input() public context : {contacts : Contact []};
    @Output() public activatedContact : EventEmitter<any> = new EventEmitter<any>();
  constructor(
      private appContext : AppContextService,
      private router : Router,
      private colorThemeService : ColorThemeService,
      ) { }
    
      onChoose(){
	  this.appContext.notifications = [];
	  this.router.navigateByUrl('/application/main/new-message');
      }
      
      onClickContact(prop){
        prop.activatedContact = this.activatedContact;
	this.colorThemeService.onActiveRow(prop) ;
	this.disableButton = !Object.values(this.appContext.activeContacts).length ;
    }
    
}
