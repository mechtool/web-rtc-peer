import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ColorThemeService} from "../../../services/color-theme.service";
import {BehaviorSubject} from "rxjs";
import {Contact} from "../../../Classes/Classes";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
    
    @Input() public context :  BehaviorSubject<Contact[]> ;
    @Output() public activatedContact : EventEmitter<any> = new EventEmitter<any>();
  constructor(public colorThemeService : ColorThemeService) {

  }

  ngOnInit() {
  }
    
    getNeededColor(index){
	return 0 === index % 2 ? this.colorThemeService.getThemeColor('even') : this.colorThemeService.getThemeColor('odd')
    }
    
    onClickTableRow($event, index, contact){
      let target = $event.currentTarget;
      target.classList.toggle('active');
      let active =  target.classList.contains('active');
      target.style.backgroundColor = active ? this.colorThemeService.getThemeColor('highlight') : this.getNeededColor(index);
      this.activatedContact.emit({contact : contact, add : active}) ;
  }

}
