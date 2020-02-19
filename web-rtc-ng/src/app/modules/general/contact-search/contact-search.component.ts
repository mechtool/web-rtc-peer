import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../../Classes/Classes";
import {FormControl, Validators} from "@angular/forms";
import {AppContextService} from "../../../services/app-context.service";
import {BehaviorSubject,  Observable, of} from "rxjs";
import { map} from "rxjs/operators";

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})
export class ContactSearchComponent implements OnInit {
    //Элемент формы, выбирающий контакты из списка контактов пользователя приложения,
    //полученного при старте системы appContext.
    @Output() public selectedOption : EventEmitter<Contact> = new EventEmitter<Contact>();
    @Input() public collection : BehaviorSubject<Contact[]>; //коллекция в котрую помещаются выбранные элементы
    @Input() public baseCollection : BehaviorSubject<Contact[]>; //коллекция из которой элементы отбираются в аутокомплит
    public autocompleteCollection : Observable<Contact[]>;
    public contactControl = new FormControl('', [Validators.required]);
    
    constructor(
        public appContext : AppContextService,
	public changeRef : ChangeDetectorRef) {}

  ngOnInit() {
  }
    optionSelected(selected){
/*	this.collection.value.push(selected);
	this.collection.next(this.collection.value) ;*/
	this.selectedOption.emit(selected);
	//Отчистка коллекции autocomplete от выбранного элемента
	this.autocompleteCollection = this.autocompleteCollection.pipe(map((conts: Contact[]) => {
	      return conts.filter(cont => {
	          return cont.uid !== selected.uid;
	      });
	}));
	this.contactControl.setValue('');
	this.changeRef.detectChanges();
    }
  
  onKeyup() {
      let that = this,
      contactControl = that.contactControl.value.trim();
      //Коллекция фильтрации - входящее свойство для унификации.
      //Выбираем по номеру телефона, имени, почте
      //Фильтруем текущего пользователя, пользователей уже находящихся в списке контактов текущего пользователя
      if(contactControl){
	  this.autocompleteCollection = this.baseCollection.pipe(map(conts => {
	      return conts.filter((cont)=>{
	          
		  return (this.appContext.user.value.uid !== cont.uid && !this.collection.value.some(c => {
		      return  c.uid === cont.uid;
		  }) && filterContact(cont))
	      });
	  }));
      }
      
      function filterContact(cont) {
	  let phone = cont.phoneNumber,
	      name = cont.name || cont.displayName,
	      email = cont.email;
	      //Если пользователь выбран
	      return (phone.lastIndexOf(contactControl) == 1 || name.indexOf(contactControl) == 0 || email.indexOf(contactControl) == 0)
	
      }
  }

}
