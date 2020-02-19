import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit , OnDestroy{

    public header = 'Уведомления';
    public buttons = [];
    
    constructor(
      public appContext : AppContextService,
      @Inject(PLATFORM_ID) public platformId: Object,
  ) {}

  ngOnDestroy(){
      this.appContext.announcements.next(this.appContext.announcements.value.map(ann => {
	  if(/0|1|2/.test(ann.type + '')){
	      ann.active = false;
	  }
	  return ann;
      }));
  }
  
  ngOnInit() {
      if(isPlatformBrowser(this.platformId)){
	  this.buttons = ['bell_check', 'bell_off'];
      }
  }
    
    onOpenAnnouncement(){
    
    }

}
