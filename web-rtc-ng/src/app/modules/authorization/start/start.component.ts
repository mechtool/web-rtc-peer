import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent  {
    
    public isProgress = false;
    public subscribers = [];
    public images = [
	{src : '/assets/app-shell/mail.svg', tip : 'Mail', link : '/authorization/password', alt : 'Email провайдер'},
	{src : '/assets/app-shell/phone.svg', tip : 'Phone', link: '/authorization/phone', alt : 'Провайдер телефона'},
    ];
    constructor(
	public changeRef : ChangeDetectorRef,
	public appContext : AppContextService,
	@Inject(PLATFORM_ID) private platformId: Object) {
	
	if(isPlatformBrowser(this.platformId)) {
	    this.subscribers.push(this.appContext.user.subscribe(user => {
		this.isProgress = !!user.uid;
	    }));
	}
    }
    ngOnDestroy(){
	this.subscribers.forEach(sub => sub.unsubscribe());
    }
}
