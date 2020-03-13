import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRtcRoutingModule } from './web-rtc-routing.module';
import { WebRtcComponent } from './web-rtc.component';
import {MaterialModule} from "../../material/material.module";
import { VideoChannelComponent } from './video-channel/video-channel.component';
import { WebRtcContextComponent } from './web-rtc-context/web-rtc-context.component';
import {GeneralModule} from "../../general/general.module";


@NgModule({
  declarations: [
      WebRtcComponent,
      VideoChannelComponent,
      WebRtcContextComponent,
  ],
  imports: [
    CommonModule,
    WebRtcRoutingModule,
      MaterialModule,
      GeneralModule,
  ]
})
export class WebRtcModule { }
