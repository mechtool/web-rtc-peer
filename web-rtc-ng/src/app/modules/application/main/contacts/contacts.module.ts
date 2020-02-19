import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import {MaterialModule} from "../../../material/material.module";
import {GeneralModule} from "../../../general/general.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
      MaterialModule,
      GeneralModule,
  ]
})
export class ContactsModule { }
