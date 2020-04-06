import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppContextService} from "../../../services/app-context.service";
import {DomSanitizer} from "@angular/platform-browser";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
    host : {
      '(click)': 'onClickHost()'
    }
})
export class VideoPlayerComponent implements OnInit {

    public timeout;
    public dataLoaded = false;
    public stopActive = false;
    public activeVideoBlocks = new BehaviorSubject([]);
    constructor(
        public appContext : AppContextService,
	public changeRef : ChangeDetectorRef,
	public sanitizer : DomSanitizer,
	public router : Router,
	private route : ActivatedRoute) { }
	
    ngOnInit() {
        let that = this;
        this.activeVideoBlocks.subscribe(activeBlocks => {
            activeBlocks.forEach((data : any) => {
		    if(data.local){
			data.className.fixed = activeBlocks.length > 1;
		    }
		})  ;
	});
	
        this.route.data.subscribe((data: { messageData: {mess : any , result : Blob}[] }) => {
	    let min = Math.min(...Object.values(data.messageData.map(m =>{
	          return m.mess.startTime;
	    })));
	    
	    data.messageData.forEach(m  =>{
	         let t = setTimeout(()=>{
	             let value = that.activeVideoBlocks.value;
		     value.push({
			 startTime : m.mess.startTime,
			 visual : m.mess.visual,
			 src : that.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(m.result)),
			 uid : m.mess.uid ,
			 local : m.mess.local,
			 contact : m.mess.local ? that.appContext.activeMessage.sender : that.appContext.activeMessage.receivers.find(res => res.uid === m.mess.uid ),
			 className : {local : m.mess.local, [m.mess.uid] : true, false : true, fixed : false},
		     });
		     that.activeVideoBlocks.next(value);
	             clearTimeout(t);
		     that.appContext.appChangeRef.markForCheck();
		 }, m.mess.startTime - min)
	    })
	});
    }

    onClickOverlay($event){
        this.checkTimeout(this.timeout);
	$event.stopPropagation();
    }
    
    onClickButton(){
	this.router.navigateByUrl('/application/main/messages') ;
    }

    checkTimeout(t){
	this.timeout && clearTimeout(t);
	this.timeout = undefined;
	this.stopActive = false;
	this.changeRef.detectChanges();
    }
    
    onClickHost(){
        if(!this.stopActive){
            this.stopActive = true ;
	    this.timeout = setTimeout(()=> {
		this.checkTimeout(this.timeout);
	    }, 4000);
	}
    }
}
