import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFeatureShellComponent } from './auth-feature-shell.component';

const routes: Routes = [{ path: '', component: AuthFeatureShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthFeatureShellRoutingModule { }
