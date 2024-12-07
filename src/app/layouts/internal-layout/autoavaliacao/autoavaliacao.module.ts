import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoavaliacaoComponent } from './autoavaliacao.component';
import { AutoavaliacaoNovoComponent } from './autoavaliacao-novo/autoavaliacao-novo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoavaliacaoListagemComponent } from './autoavaliacao-listagem/autoavaliacao-listagem.component';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatRadioModule,
  MatStepperModule,
  MatCheckboxModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatListModule,
  MatExpansionModule
} from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RespostaService } from 'src/app/core/service/resposta.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatStepperModule,
    MatMenuModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatListModule,
    MatRadioModule,
    MatExpansionModule,
    NgxLoadingModule
  ],
  declarations: [AutoavaliacaoComponent, AutoavaliacaoNovoComponent, AutoavaliacaoListagemComponent],
  providers: [RespostaService]
})
export class AutoavaliacaoModule { }
