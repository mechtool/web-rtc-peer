import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMessageRoutingModule } from './new-message-routing.module';
import { NewMessageComponent } from './new-message.component';
import {MaterialModule} from "../../../material/material.module";
import {GeneralModule} from "../../../general/general.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [NewMessageComponent],
  imports: [
    CommonModule,
    NewMessageRoutingModule,
      MaterialModule,
      GeneralModule,
  ]
})
export class NewMessageModule { }
