import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {Contact} from "../../../../Classes/Classes";
import {AppContextService} from "../../../../services/app-context.service";
import {DatabaseService} from "../../../../services/database.service";
import {ColorThemeService} from "../../../../services/color-theme.service";
import {Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
    
    public contactsLength;
    public subscribers = [];
    public appUsers: Contact[];
    public search = false;
    public contactsHeader = 'Контакты';
    public activateEdit = true;
    public contactRestriction ;
    public buttons = [];
    
    constructor(
	public appContext: AppContextService,
	public database: DatabaseService,
	public colorThemeService : ColorThemeService,
	public router : Router,
	@Inject(PLATFORM_ID) public platformId: Object
    ) {

    }
    
    ngOnInit(): void {
	if(isPlatformBrowser(this.platformId)){
	    this.buttons = ['search_contact', "remove_contact"];
	    this.contactRestriction = window.localStorage.getItem('contactRestriction'); //0 - 1 ; 1 - auto
	    //Подписка на получения контактов пользователя для отслеживания длинны массива
	    this.subscribers.push(this.appContext.contacts.subscribe(cont => {
		this.contactsLength = cont.length;
	    }));
	    //Подписка на получения пользователей приложения
	    this.subscribers.push(this.appContext.appUsers.subscribe(data => {
		this.appUsers = data;
	    }));
	}
    }
    
    onActivatedContact(option : {contact : Contact, add : boolean}){
	//При активации контакта, проверять ограничение на количество контактов
	if(option.add) {
		//Добавить контакт
		this.appContext.activeContacts[option.contact.uid] = option.contact ;
	}
	else delete this.appContext.activeContacts[option.contact.uid];
	this.activateEdit = !Object.keys(this.appContext.activeContacts).length;
    }
    
    onOptionSelected(contact){
	this.database.setContacts({contactURL : '/contacts/' + this.appContext.user.value.uid , value :  {[contact.uid] : contact}}).then(resp => {
	
	}).catch(err => {})
	
    }
    
    async onDeleteContacts(){
	for(let key in this.appContext.activeContacts){
	    await this.database.setContacts({contactURL : '/contacts/' + this.appContext.user.value.uid , value : {[key] : null}}).then(()=> console.log('Выбранные контакты удалены.'));
	}
	this.appContext.activeContacts = {};
	this.activateEdit = true;
    }
    
    triggerSearch(){
	this.search = !this.search;
    }
    
    ngOnDestroy(){
	this.subscribers.forEach(sub => sub.unsubscribe());
    }

}
