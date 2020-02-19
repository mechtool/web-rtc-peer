import {Component,  Input, OnInit} from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";
import {IncomingPopupContext} from "../../../../../Classes/Classes";
import {DatabaseService} from "../../../../../services/database.service";

@Component({
  selector: 'app-incoming-call-announcement',
  templateUrl: './incoming-call-announcement.component.html',
  styleUrls: ['./incoming-call-announcement.component.css']
})
export class IncomingCallAnnouncementComponent implements OnInit {
    
    public contactName;
    @Input() public context : IncomingPopupContext;

  constructor(
      public appContext : AppContextService,
      public database : DatabaseService,
  ) {}
  
    async onErrorContactImg(event){
	//Если контакт пользователя сам поменял изображение, то ссылка на него меняется.
	//Вылетает ошибка загрузкти ресурса, поэтому перегружаем ресурс из объекта User
	await this.database.onErrorContactImg(event, this.context);
	return true;
    }
  
  ngOnInit() {
      this.contactName = this.context.contact.name || this.context.contact.displayName || this.context.contact.phoneNumber || this.context.contact.email;
  }
}
