import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsRoutingModule } from './sms-routing.module';
import {SmsComponent} from "./sms.component";
import {MaterialModule} from "../../../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [SmsComponent],
    imports: [
	CommonModule,
	SmsRoutingModule,
	MaterialModule,
	ReactiveFormsModule,
	FormsModule,
    ]
})
export class SmsModule { }
