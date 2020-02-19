import {Component, ElementRef, Input,  ViewChild} from '@angular/core';
import {AppContextService} from "../../../services/app-context.service";
import {DatabaseService} from "../../../services/database.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-icons-selection',
  templateUrl: './icons-selection.component.html',
  styleUrls: ['./icons-selection.component.css']
})
export class IconsSelectionComponent  {

    public iconBackColor;
    @ViewChild('imgFile', {read: ElementRef, static : true}) public imgFile : ElementRef;
    public icons = [{icon : '/assets/app-shell/account.png', active : false}, {icon : '/assets/app-shell/user.svg', active : false}, {icon : '/assets/app-shell/file-download-outline.svg', active : false}];
    public colorBlocks = [{color : 'rgba(0,0,223,0.57)', active : true}, {color : 'rgba(192,44,0,0.63)', active : false}, {color : 'rgba(206,158,0,0.66)', active : false}, {color :'rgba(149,1,99,0.54)', active : false}, {color : 'rgba(77,206,88,0.94)', active : false}];

    @Input() public context : any;
  
    constructor(
      public appContext : AppContextService,
      public database : DatabaseService,
      public sanitizer : DomSanitizer,
      ) {
      this.iconBackColor = this.colorBlocks[0].color;
  }
  
  
    onImgClick(inx){
        if(inx === 2) {
            this.imgFile.nativeElement.click();
            return;
	}
        let local =  this.context.uid === this.appContext.appUser.uid;
	this.database.setContacts(
	    {   contactURL : (local ? '/users/' + this.context.uid : '/contacts/' + this.appContext.appUser.uid +'/'+ this.context.uid),
		value : {photoURL : this.icons[inx].icon , imgColor : this.iconBackColor}}).then(res=> {
	    console.log('Файл иконки пользователя успешно записан на сервер.') ;
	    local && this.checkUser();
	    this.closeNotification();
	}).catch(err => console.log('Ошибка при записи ссылки иконки контакта на сервер' + err)) ;
    }
    
  closeNotification(){
      this.appContext.notifications = [];
      this.appContext.appChangeRef.detectChanges();
  }
    onClickColorTheme(inx){
	    this.iconBackColor = this.colorBlocks[inx].color;
  }
    
    async fileInputChange(event){
	//Отправить файл на сервер и сохранить в firestore, вернув ссыку, которую нужно сохранить
	//в firedatabase для текущего пользователя.
	let current = this.appContext.user.value.uid === this.context.uid,
	    file = event.currentTarget.files[0],
	    storageUrl = current ? '/users/' + this.appContext.user.value.uid +'/files/contactIcon' : '/users/' + this.appContext.user.value.uid + '/contacts/' + this.context.uid +'/contactIcon',
	    contactUrl =  current ? '/users/' + this.appContext.user.value.uid : '/contacts/' + this.appContext.user.value.uid +'/'+ this.context.uid ;
	await this.database.saveContactIcon({file : file , storageUrl : storageUrl, contactURL : contactUrl}).then(resp => {
	    this.database.setContacts(resp).then(()=>{
		console.log('Ссылка иконки пользователя успешно записана на сервер.') ;
		this.closeNotification();
	    })

	}).catch(err => console.log('Ошибка при записи ссылки иконки контакта на сервер' + err)) ;
	//Если изменение изображение произошло у текущего пользователя, нужно его обновить;
	current && this.checkUser();
    }
    
    checkUser(){
	this.database.checkUser().then(user => {
	    //Обновление пользователя для вступления в силу изменений
	    this.appContext.user.next(user);
	}) ;
    }

}
