import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';

import { AppMaterialModule } from '../../../app-material.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/auth/auth.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    ToastyModule,
    NgxLoadingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
  ]
})
export class LoginModule { }
