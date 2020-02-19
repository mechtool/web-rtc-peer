import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import {MaterialModule} from "../../../material/material.module";
import {IncomingCallAnnouncementComponent} from "./incoming-call-announcement/incoming-call-announcement.component";
import {NoAnswerComponent} from "./no-answer/no-answer.component";
import {UpdateAnnouncementComponent} from "./update-announcement/update-announcement.component";


@NgModule({
  declarations: [
      AnnouncementsComponent,
      AnnouncementComponent,
      IncomingCallAnnouncementComponent,
      NoAnswerComponent,
      UpdateAnnouncementComponent,
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule ,
      MaterialModule,
  ]
})
export class AnnouncementsModule { }
