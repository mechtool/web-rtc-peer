import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {MaterialModule} from "../../../material/material.module";
import { SettingItemComponent } from './components/setting-item/setting-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorThemeService} from "../../../../services/color-theme.service";
import {GeneralModule} from "../../../general/general.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
      SettingsComponent,
      SettingItemComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
      HttpClientModule,
      MaterialModule,
      GeneralModule,
      ReactiveFormsModule,
      FormsModule,
  ],
    providers : [
        ColorThemeService,
    ]
})
export class SettingsModule { }
