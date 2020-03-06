import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";
import {ColorThemeService} from "../../../../../services/color-theme.service";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit , OnDestroy{

    public header = 'Уведомления';
    public buttons = [];
    public activeLength = 0;
    public activeList = {};
    
    constructor(
      public appContext : AppContextService,
      public colorThemeService : ColorThemeService,
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
    
    onActiveContact(prop){
        let active, ann = prop.announcements.children.item(prop.index);
        ann.classList.toggle('active') ;
        active = ann.classList.contains('active');
        active ? this.activeList[prop.index] = ann : delete this.activeList[prop.index];
        this.activeLength = Object.keys(this.activeList).length;
	ann.style.backgroundColor = active ? this.colorThemeService.getThemeColor('light') : this.getNeededColor(prop.index);
    }
    getNeededColor(index){
	return 0 === index % 2 ? this.colorThemeService.getThemeColor('even') : this.colorThemeService.getThemeColor('odd')
    }
  
  ngOnInit() {
      if(isPlatformBrowser(this.platformId)){
	  this.buttons = ['bell_check', 'bell_off'];
      }
  }
    
    onDeleteAnnouncement(){
        let ann = this.appContext.announcements.value;
        Object.keys(this.activeList).sort((a, b)=> (+a - +b)).reverse().forEach(key => ann.splice(+key, 1)) ;
        this.appContext.announcements.next(ann);
	this.activeList = {};
	this.activeLength = Object.keys(this.activeList).length;
    }
  
    onOpenAnnouncement(){
    
    }

}
