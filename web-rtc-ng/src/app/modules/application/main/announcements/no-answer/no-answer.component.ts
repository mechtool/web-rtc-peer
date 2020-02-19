import {Component, Input, OnInit} from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";
import {PopupContext} from "../../../../../Classes/Classes";
import {DatabaseService} from "../../../../../services/database.service";

@Component({
  selector: 'app-no-answer',
  templateUrl: './no-answer.component.html',
  styleUrls: ['./no-answer.component.css']
})
export class NoAnswerComponent implements OnInit {
    
    public contactName;
    @Input() public context : PopupContext;

  constructor(
      public appContext : AppContextService,
      public database : DatabaseService) { }
      
  
  onErrorContactImg(event){
        this.database.onErrorContactImg(event, this.context).then(res => {
             console.log('Запрос изображения контакта.')
	}) ;
        return true;
    }
    
    ngOnInit(): void {
	this.contactName = this.context.contact.name || this.context.contact.displayName || this.context.contact.phoneNumber || this.context.contact.email;

  }
}
