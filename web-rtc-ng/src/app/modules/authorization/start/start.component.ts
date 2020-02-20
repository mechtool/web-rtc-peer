import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent  {
    
    public isProgress = true;
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

	    let t = setTimeout(()=>{
	        clearTimeout(t);
		this.isProgress = false;
		this.appContext.appChangeRef.markForCheck();
	    }, 3000);
	}
    }
    ngOnDestroy(){
	this.subscribers.forEach(sub => sub.unsubscribe());
    }
}
