import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';
import {MaterialModule} from "../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PhoneComponent],
  imports: [
    CommonModule,
    PhoneRoutingModule,
      MaterialModule,
      ReactiveFormsModule,
  ]
})
export class PhoneModule { }
