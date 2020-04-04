import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import {VideoPlayerComponent} from "./video-player.component";
import {MaterialModule} from "../../material/material.module";
import { VideoBlockComponent} from "./video-block/video-block.component";
import {GeneralModule} from "../../general/general.module";


@NgModule({
  declarations: [
      VideoPlayerComponent,
      VideoBlockComponent
  ],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
      MaterialModule,
      GeneralModule
  ]
})
export class VideoPlayerModule { }
