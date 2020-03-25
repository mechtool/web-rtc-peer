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
    
    @Input() public context :  BehaviorSubject<Contact[]> ;
    @Output() public activatedContact : EventEmitter<any> = new EventEmitter<any>();
  constructor(
      public colorThemeService : ColorThemeService) {
  }
    
    getNeededColor(index){
	return 0 === index % 2 ? this.colorThemeService.getThemeColor('even') : this.colorThemeService.getThemeColor('odd')
    }
    
    onClickTableRow($event, index, contact){
      this.colorThemeService.onActiveRow({event : $event, index :index, contact :contact, activatedContact : this.activatedContact}) ;
    }

}
