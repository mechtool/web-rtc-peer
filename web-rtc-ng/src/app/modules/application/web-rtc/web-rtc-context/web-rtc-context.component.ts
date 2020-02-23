import {Component, Input, OnInit} from '@angular/core';
import {WebRtcContext} from "../../../../Classes/Classes";

@Component({
  selector: 'app-web-rtc-context',
  templateUrl: './web-rtc-context.component.html',
  styleUrls: ['./web-rtc-context.component.css']
})
export class WebRtcContextComponent implements OnInit {

    public localToolbar = false;
    @Input() public context : WebRtcContext;
    
    constructor() { }

  ngOnInit() {
  }

  handleView(type){
       this.context.videoCollection.find(view => view.local).className.closed = this.localToolbar = type;
  }
  
  
}
