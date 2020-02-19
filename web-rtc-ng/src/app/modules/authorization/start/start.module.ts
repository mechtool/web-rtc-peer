import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent} from "./start.component";
import {MaterialModule} from "../../material/material.module";


@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
      MaterialModule,
  ]
})
export class StartModule { }
