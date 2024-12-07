import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroNovoComponent } from './cadastro-novo/cadastro-novo.component';
import {
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatRadioModule,
  MatButtonModule
} from '@angular/material';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    NgxLoadingModule
  ],
  declarations: [CadastroNovoComponent]
})
export class CadastroModule { }
