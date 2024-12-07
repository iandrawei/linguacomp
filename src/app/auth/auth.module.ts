import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { MoneyHttpInterceptor } from './meu-http-interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthService, MoneyHttpInterceptor]
})
export class AuthModule { }
