import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { ExternalLayoutComponent } from './external-layout.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CadastroNovoComponent } from './cadastro/cadastro-novo/cadastro-novo.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    LoginModule,
    CadastroModule
  ],
  declarations: [
    ExternalLayoutComponent,
  ]
})
export class ExternalLayoutModule { }
