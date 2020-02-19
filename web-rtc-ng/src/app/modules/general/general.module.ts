import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorThemeComponent} from "./color-theme/color-theme.component";
import {MaterialModule} from "../material/material.module";
import { PermissionsComponent } from './permissions/permissions.component';
import { ContactComponent } from './contact/contact.component';
import {ContactSearchComponent} from "./contact-search/contact-search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactTableComponent} from "./contact-table/contact-table.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PhoneControlComponent} from "./phone-control/phone-control.component";
import {IconsSelectionComponent} from "./icons-selection/icons-selection.component";
import {PopupNotificationsComponent} from "./popup-notifications/popup-notifications.component";
import { NoAnswerPopupComponent } from './popup-notifications/no-answer-popup/no-answer-popup.component';
import { IncomingCallPopupComponent } from './popup-notifications/incoming-call-popup/incoming-call-popup.component';
import { UpdatePopupComponent } from './popup-notifications/update-popup/update-popup.component';
import { OfflineComponent } from './offline/offline.component';

@NgModule({
  declarations: [
      ColorThemeComponent,
      PermissionsComponent,
      ContactComponent,
      ContactSearchComponent,
      ContactTableComponent,
      PhoneControlComponent,
      IconsSelectionComponent,
      PopupNotificationsComponent,
      NoAnswerPopupComponent,
      IncomingCallPopupComponent,
      UpdatePopupComponent,
      OfflineComponent,
  ],
    exports: [
	ColorThemeComponent,
	PermissionsComponent,
	ContactComponent,
	ContactSearchComponent,
	ContactTableComponent,
	PhoneControlComponent,
	IconsSelectionComponent,
	PopupNotificationsComponent,
	NoAnswerPopupComponent,
	OfflineComponent,
    ],
  imports: [
    CommonModule,
      MaterialModule,
      ReactiveFormsModule,
      FlexLayoutModule,
  ]
})
export class GeneralModule { }
