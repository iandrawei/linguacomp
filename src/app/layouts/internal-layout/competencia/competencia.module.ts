import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatStepperModule,
  MatMenuModule,
  MatCheckboxModule,
  MatChipsModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatListModule,
  MatRadioModule,
  MatExpansionModule
} from '@angular/material';

import { CompetenciaComponent } from './competencia.component';
import { CompetenciaNovoComponent } from './competencia-novo/competencia-novo.component';
import { CompetenciaListagemComponent } from './competencia-listagem/competencia-listagem.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

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
  declarations: [CompetenciaComponent, CompetenciaNovoComponent, CompetenciaListagemComponent]
})
export class CompetenciaModule { }
