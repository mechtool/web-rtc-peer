import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MaterialModule} from "./modules/material/material.module";
import {GeneralModule} from "./modules/general/general.module";
import {HttpClientModule} from "@angular/common/http";
import {AppContextService} from "./services/app-context.service";
import {AuthFirebaseService} from "./services/auth-firebase.service";
import {ColorThemeService} from "./services/color-theme.service";
import {DatabaseService} from "./services/database.service";
import {FirebaseService} from "./services/firebase.service";
import {PushNotificationService} from "./services/push-notification.service";
import {SettingDefaultService} from "./services/setting-default.service";
import {StatusColorsService} from "./services/status-colors.service";
import {SwUpdateService} from "./services/sw-update.service";
import {AppResolverService} from "./services/app-resolver.service";
import {WebRtcService} from "./services/web-rtc.service";
import {GlobalErrorHandler} from "./services/error-handler.service";
import {DatePipe} from "@angular/common";
import {SmsService} from "./services/sms.service";
import {StreamRecorderService} from "./services/stream-recorder.service";
import {VideoPlayerResolverService} from "./services/video-player-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
	BrowserModule.withServerTransition({appId: 'serverApp'}),
	AppRoutingModule,
	HttpClientModule,
	BrowserAnimationsModule,
	ServiceWorkerModule.register('service-worker.js', { enabled: true, registrationStrategy : 'registerImmediately' , scope : './' }),
	MaterialModule,
	GeneralModule,
    ],
    /*{enabled: environment.production}*/
  providers: [
      AppContextService,
      AuthFirebaseService,
      ColorThemeService,
      DatabaseService,
      FirebaseService,
      PushNotificationService,
      SettingDefaultService,
      StatusColorsService,
      SwUpdateService,
      AppResolverService,
      WebRtcService,
      DatePipe,
      SmsService,
      StreamRecorderService,
      VideoPlayerResolverService,
    
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

