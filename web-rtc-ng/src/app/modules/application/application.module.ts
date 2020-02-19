import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import {GeneralModule} from "../general/general.module";
import {MaterialModule} from "../material/material.module";
import {PopupNotificationsComponent} from "../general/popup-notifications/popup-notifications.component";


@NgModule({
  declarations: [ApplicationComponent],
    imports: [
	CommonModule,
	ApplicationRoutingModule,
	GeneralModule,
	MaterialModule,
    ]
})
export class ApplicationModule {


}
