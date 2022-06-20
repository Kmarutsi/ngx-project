import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFeatureShellRoutingModule } from './auth-feature-shell-routing.module';
import { AuthFeatureShellComponent } from './auth-feature-shell.component';


@NgModule({
  declarations: [
    AuthFeatureShellComponent
  ],
  imports: [
    CommonModule,
    AuthFeatureShellRoutingModule
  ]
})
export class AuthFeatureShellModule { }
