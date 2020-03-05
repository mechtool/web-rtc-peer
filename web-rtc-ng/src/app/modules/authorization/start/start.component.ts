import {AfterViewInit, ChangeDetectorRef, Component, Inject,  PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {AuthFirebaseService} from "../../../services/auth-firebase.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements AfterViewInit{
    
    public hasParam = false;
    public isProgress = true;
    public subscribers = [];
    public images = [
	{src : '/assets/app-shell/mail.svg', tip : 'Mail', link : '/authorization/password', alt : 'Email провайдер'},
	{src : '/assets/app-shell/phone.svg', tip : 'Phone', link: '/authorization/phone', alt : 'Провайдер телефона'},
    ];
    constructor(
	public changeRef : ChangeDetectorRef,
	public appContext : AppContextService,
	public authFirebase : AuthFirebaseService,
	public activatedRote : ActivatedRoute,
	@Inject(PLATFORM_ID) private platformId: Object) {
	
	if(isPlatformBrowser(this.platformId)) {

	    let t = setTimeout(()=>{
	        clearTimeout(t);
		this.isProgress = false;
		this.appContext.appChangeRef.markForCheck();
	    }, 3000);
	}
    }
    ngAfterViewInit(): void {
        this.activatedRote.queryParams.subscribe(params => {
	    this.hasParam = 'uid' in params;
	    //Приложение открыл пользователь, получивший SMS
	    if(this.hasParam){
	        //Установка идентификатора, полученного из сообщения в качестве
		//идентификатора Sms ()потом, он будет установлен в качестве идентификатора бользователя
	       this.appContext.smsUid = params['uid'];
	       //Запуск анонимного входа в приложение. После удачного входа сработает еще раз событие
		//сервиса this.firebaseService.auth.onAuthStateChanged и управление перейдет туда
	       this.authFirebase.signInAnonymously();
	    }
	});
    }
    
    ngOnDestroy(){
	this.subscribers.forEach(sub => sub.unsubscribe());
    }
}
