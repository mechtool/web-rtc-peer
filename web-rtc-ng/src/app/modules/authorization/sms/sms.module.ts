import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import {MaterialModule} from "../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [SmsComponent],
  imports: [
    CommonModule,
    SmsRoutingModule,
      MaterialModule,
      ReactiveFormsModule
  ]
})
export class SmsModule { }
