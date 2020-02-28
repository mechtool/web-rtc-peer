import {Component, EventEmitter, Input,  Output} from '@angular/core';
import {ColorThemeService} from "../../../services/color-theme.service";
import {BehaviorSubject} from "rxjs";
import {Contact} from "../../../Classes/Classes";
import {AppContextService} from "../../../services/app-context.service";

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent {
    
    public contactRestriction ;
    @Input() public context :  BehaviorSubject<Contact[]> ;
    @Output() public activatedContact : EventEmitter<any> = new EventEmitter<any>();
  constructor(
      public appContext : AppContextService,
      public colorThemeService : ColorThemeService) {
  }
    
    getNeededColor(index){
	return 0 === index % 2 ? this.colorThemeService.getThemeColor('even') : this.colorThemeService.getThemeColor('odd')
    }
    
    onClickTableRow($event, index, contact){
      let target = $event.currentTarget;
      this.contactRestriction = window.localStorage.getItem('contactRestriction'); //0 - 1 ; 1 - auto
      target.classList.toggle('active');
      let active =  target.classList.contains('active');
      if(active){
	  //Если условия соблюдены
	  if((this.contactRestriction == '0' && Object.keys(this.appContext.activeContacts).length < 1) || this.contactRestriction == '1'){
	  }else{
	      document.querySelectorAll('div.table-contact').forEach((cont :HTMLElement, inx) => {
	          cont.style.backgroundColor = this.getNeededColor(inx);
	      });
	      this.appContext.activeContacts = {};
	      //Выдать уведомление о невозможности добавления контакта
/*	      console.log('Невозможно добавить контакт. Превышает ограничение добавления контактов.')  ;
	      return false;*/
	  }
      }
	target.style.backgroundColor = active ? this.colorThemeService.getThemeColor('highlight') : this.getNeededColor(index);
	this.activatedContact.emit({contact : contact, add : active}) ;
    }

}
