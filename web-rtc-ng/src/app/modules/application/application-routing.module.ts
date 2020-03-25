import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationComponent} from "./application.component";


const routes: Routes = [
    {path : '', component : ApplicationComponent, children : [
	    {path : 'main', loadChildren :  () => import('./main/main.module').then(m => m.MainModule), data : {type : 'main'}},
	    {path : 'web-rtc', loadChildren :  () => import('./web-rtc/web-rtc.module').then(m => m.WebRtcModule), data : {type : 'web-rtc'}},
	    {path : 'video-player', loadChildren :  () => import('./video-player/video-player.module').then(m => m.VideoPlayerModule), data : {type : 'video-player'}},
	    {path : '', pathMatch :'full', redirectTo : 'main'} ,
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
