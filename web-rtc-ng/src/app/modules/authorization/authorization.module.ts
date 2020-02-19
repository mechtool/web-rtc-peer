import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { AnonymousComponent } from './anonymous/anonymous.component';

@NgModule({
  declarations: [
      AuthorizationComponent,
      AnonymousComponent
  ],
  imports: [
    CommonModule,
      AuthorizationRoutingModule ,
  ],
})
export class AuthorizationModule {}
