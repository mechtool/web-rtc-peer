import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {WebRtcContext} from "../../../../Classes/Classes";

@Component({
  selector: 'app-web-rtc-context',
  templateUrl: './web-rtc-context.component.html',
  styleUrls: ['./web-rtc-context.component.css']
})
export class WebRtcContextComponent implements OnInit {

    public localToolbar = false;
    @Input() public context : WebRtcContext;
    
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {

  }

  handleView(type){
       this.context.videoCollection.find(view => view.local).className.closed = this.localToolbar = type;
  }
  
  
}
