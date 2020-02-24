import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ColorThemeService} from "../../../services/color-theme.service";
import {BehaviorSubject} from "rxjs";
import {Contact} from "../../../Classes/Classes";
import {MatButton} from "@angular/material/button";
import {AppContextService} from "../../../services/app-context.service";

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
    
    public contactRestriction ;
    @Input() public context :  BehaviorSubject<Contact[]> ;
    @Output() public activatedContact : EventEmitter<any> = new EventEmitter<any>();
  constructor(
      public appContext : AppContextService,
      public colorThemeService : ColorThemeService) {

  }

  ngOnInit() {
      this.contactRestriction = window.localStorage.getItem('contactRestriction'); //0 - 1 ; 1 - auto
  }
    
    getNeededColor(index){
	return 0 === index % 2 ? this.colorThemeService.getThemeColor('even') : this.colorThemeService.getThemeColor('odd')
    }
    
    onClickTableRow($event, index, contact){
      let target = $event.currentTarget;
      target.classList.toggle('active');
      let active =  target.classList.contains('active');
      if(active){
	  //Если условия соблюдены
	  if((this.contactRestriction == '0' && Object.keys(this.appContext.activeContacts).length < 1) || this.contactRestriction == '1'){
	  }else{
	      //Выдать уведомление о невозможности добавления контакта
	      console.log('Невозможно добавить контакт. Превышает ограничение добавления контактов.')  ;
	      return false;
	  }
      }
	target.style.backgroundColor = active ? this.colorThemeService.getThemeColor('highlight') : this.getNeededColor(index);
	this.activatedContact.emit({contact : contact, add : active}) ;
    }

}
