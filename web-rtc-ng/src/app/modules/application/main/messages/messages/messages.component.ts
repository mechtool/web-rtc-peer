import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppContextService} from "../../../../../services/app-context.service";
import {isPlatformBrowser} from "@angular/common";
import {ColorThemeService} from "../../../../../services/color-theme.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    public buttons = [];
    constructor(
        public colorThemeService : ColorThemeService,
        public appContext : AppContextService,
		@Inject(PLATFORM_ID) public platformId: Object
    ) { }

  ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
	  this.buttons = [{icon : 'play', disabled : true}, {icon : "base_clear", disabled : true}];
      }
  }
    getNeededColor(index){
	return 0 === index % 2 ? this.colorThemeService.getThemeColor('even') : this.colorThemeService.getThemeColor('odd')
    }
  
    openMessage(){
    
    }
    onDeleteMessage(){
        
    }
}
