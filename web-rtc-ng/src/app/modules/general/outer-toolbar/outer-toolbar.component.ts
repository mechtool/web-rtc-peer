import {Component,  OnInit} from '@angular/core';
import {AppContextService} from "../../../services/app-context.service";
import {WebRtcContextComponent} from "../../application/web-rtc/web-rtc-context/web-rtc-context.component";

@Component({
  selector: 'app-outer-toolbar',
  templateUrl: './outer-toolbar.component.html',
  styleUrls: ['./outer-toolbar.component.css']
})
export class OuterToolbarComponent implements OnInit {

    public localBadge = '';
    public subscriptions = [];
  constructor(public appContext : AppContextService,
	      public webRtcContext : WebRtcContextComponent) { }

  ngOnInit() {
      
      //Подписка на получение уведомлений и отображение их количества в бейждике
     this.subscriptions.push(this.appContext.announcements.subscribe(announcements => {
	  let length = announcements.filter(ann => ann.active).length;
	  this.localBadge = length == 0 ? '' : length + '' ;
      })) ;
  }
    onOpenView(){
        this.webRtcContext.handleView(false);
    }
  
}
