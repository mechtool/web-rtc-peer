import {Component, Input, OnInit} from '@angular/core';
import {WebRtcContext} from "../../../../Classes/Classes";

@Component({
  selector: 'app-web-rtc-context',
  templateUrl: './web-rtc-context.component.html',
  styleUrls: ['./web-rtc-context.component.css']
})
export class WebRtcContextComponent implements OnInit {

    @Input() public context : WebRtcContext;
    
    constructor() { }

  ngOnInit() {
  }

  
  
}
