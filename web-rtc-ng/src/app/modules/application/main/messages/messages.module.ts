import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages/messages.component';
import {MaterialModule} from "../../../material/material.module";
import { MessageComponent } from './message/message.component';
import {GeneralModule} from "../../../general/general.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [MessagesComponent, MessageComponent],
  imports: [
    CommonModule,
      RouterModule,
    MessagesRoutingModule,
      MaterialModule ,
      GeneralModule,
  ]
})
export class MessagesModule { }
