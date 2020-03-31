import {ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {notificationAppearance} from "../../../animations/animations";
import {SwPush} from "@angular/service-worker";
import {PushNotificationService} from "../../../services/push-notification.service";
import {isPlatformBrowser, Location} from "@angular/common";
import {AuthFirebaseService} from "../../../services/auth-firebase.service";
import {AppContextService} from "../../../services/app-context.service";
import {Contact} from "../../../Classes/Classes";

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css'] ,
  animations : [
        notificationAppearance
    ],
})
export class PermissionsComponent implements OnInit, OnDestroy {
    
    public subscriptions = [];
    constructor(
        public swPush : SwPush,
        public appContext : AppContextService,
        public authFirebase : AuthFirebaseService,
        public pushService : PushNotificationService,
        public location : Location,
        public changeRef : ChangeDetectorRef,
	@Inject(PLATFORM_ID) private platformId: Object) {
	
        if(isPlatformBrowser(this.platformId)) {
	    //Установка заставки
	    this.subscriptions.push(this.appContext.checkPermissions.subscribe((res) => {
		res && this.initialize();
	    }));
	}
    }
 
	ngOnDestroy(): void {
        	this.subscriptions.forEach(sub => sub.unsubscribe());
	}
    
    queryPermissions(){
       return Promise.all([
	   navigator.permissions.query({name : 'notifications'}).then(res => {
	       let perm = {name : 'notifications', state : res.state, disabled : false};
	       res.onchange = (event)=> this.onChangeStatus.bind(this, perm, event)();
	       return perm
	   }),
	   navigator.permissions.query({name : 'camera'}).then(res => {
	       let perm = {name : 'camera', state : res.state, disabled : false} ;
	       res.onchange = (event)=> this.onChangeStatus.bind(this, perm, event)();
	       return perm
	   }),
	  Promise.resolve({name : 'push', state : this.swPush.isEnabled ? 'push' : 'noPush'}) ,
       ]);
    }
    
    onClickOverlay($event){
	 $event.target.classList.contains('permissions-container') && this.appContext.notifications.some(note => /iconSelection|sub-messages/.test(note.state)) &&  (this.appContext.notifications = []);
    }
    
    onChangeStatus(perm, event){
        if(/prompt|denied/.test(event.target.state)) {
            perm.state = event.target.state;
            perm.disabled = false;
	    this.appContext.notifications.some(per => per.name === perm.name) || this.appContext.notifications.push(perm);
	}
        else this.appContext.notifications = this.appContext.notifications.filter(per => per.name !== perm.name);
	this.appContext.notifications.length || this.authFirebase.afterPermissions();
	this.appContext.appChangeRef.detectChanges();
    }
    
    
    initialize(){
        if(window.location.hostname.indexOf('localhost') < 0) {
		this.queryPermissions().then((result: any[]) => {
		    //Происходит перебор элементов и если элемент имеет блокирующий статус
		    //он получает наибольший индекс для первейшего отображения пользователю.
		    result.filter(res => /denied|noPush|prompt/.test(res.state)).forEach(res => {
			    /denied|noPush/.test(res.state) ? this.appContext.notifications.push(res) : this.appContext.notifications.unshift(res);
			}
		    );
		    this.appContext.notifications.length || this.authFirebase.afterPermissions();
		    this.changeRef.detectChanges();
		});
	    } else{
	        //снятие заставки
		this.authFirebase.afterPermissions();
	    }
    }
    
    ngOnInit() {

    }
    
    onError(err){
        console.log(err);
    }
    
    onClickDenied(){}
    
    onActivatedContact(option : {contact : Contact, add : boolean}){
	//При активации контакта, проверять ограничение на количество контактов
	if(option.add) {
	    //Добавить контакт
	    this.appContext.activeContacts[option.contact.uid] = option.contact ;
	}
	else delete this.appContext.activeContacts[option.contact.uid];
    }
    
    async onClickPermission(item){
	
        if(/camera|notifications/.test(item.name)){
	    item.disabled = true;
	    this.changeRef.markForCheck();
	}
	switch (item.name) {
	    case 'camera' :  {
		await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: true}).then(stream => {
					stream.getTracks().forEach(tr => tr.stop());
			    	}).catch(err => {
			    	    console.log('Пользователь отклонил разрешение на использование камеры и микрофона.')
		}); }
		break;
	    case 'notifications' :  {
		this.pushService.requestSubscription().then((res) =>{
		}).catch(err=> console.log('Пользователь отклонил разрешение на использование PushNotification.'));
	    }
	}
    }
}
