import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizationComponent} from "./authorization.component";


const routes: Routes = [
    {path : '' , component : AuthorizationComponent, children : [
	    {path : 'start-authorization', loadChildren : ()=> import('../authorization/start/start.module').then(m => m.StartModule), data : {type : 'start-authorization'}},
	    {path : 'password', loadChildren : ()=> import('../authorization/password/password.module').then(m => m.PasswordModule), data : {type : 'password'}},
	    {path : 'phone', loadChildren : ()=> import('../authorization/phone/phone.module').then(m => m.PhoneModule), data : {type : 'phone'}},
	    {path : 'sms', loadChildren : ()=> import('../authorization/sms/sms.module').then(m => m.SmsModule), data : {type : 'sms'}},
	    {path : 'anonymous', loadChildren : ()=> import('../authorization/anonymous/anonymous.component').then(m => m.AnonymousComponent), data : {type : 'anonymous'}},
	    {path : "", pathMatch : 'full', redirectTo: 'start-authorization'},
	    {path : "**", pathMatch : 'full', redirectTo: 'start-authorization'},
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
