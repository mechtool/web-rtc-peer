import {ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {Contact} from "../../../Classes/Classes";
import {AppContextService} from "../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";
import {DatabaseService} from "../../../services/database.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public local;
    public contactEdit;
    public statusColor;
    @Input() public context : Contact;
    
    constructor(
        public changeRef : ChangeDetectorRef,
        public appContext : AppContextService,
	public database : DatabaseService,
	@Inject(PLATFORM_ID) public platformId: Object) {
    }
    
    ngOnInit(): void {
	if(isPlatformBrowser(this.platformId)){
	    this.local = this.context.uid === this.appContext.appUser.uid;
	    this.contactEdit = JSON.parse(window.localStorage.getItem('contactEdit'));
	}
    }
    
    onEditIcon(event){
	//Изменение иконки контакта только для контактов на странице контактов при условии, что настройка
	//редактирования контактов - истина, и на странице настрое - изменение иконки локального контакта
	if(event.target.closest('.container-setting') || (event.target.closest('.inner-contact-table') && this.contactEdit)){
		this.appContext.notifications.push({state : 'iconSelection', context : this.context, className : 'iconSelection'});
	}
    }
    
    async onError(event){
	//Если контакт пользователя сам поменял изображение, то ссылка на него меняется.
	//Вылетает ошибка загрузкти ресурса, поэтому перегружаем ресурс из объекта User
	let user = await this.database.getRef('/users/' + this.context.uid).once('value').then(userSnap => {
	    return userSnap.val();
	});
	if (user){
	    event.target.src = user.photoURL;
	    await this.database.setContacts({contactURL : '/contacts/' + this.appContext.user.value.uid +'/'+ this.context.uid, value : {photoURL : user.photoURL }}) ;
	}
	return true;
    }

}
