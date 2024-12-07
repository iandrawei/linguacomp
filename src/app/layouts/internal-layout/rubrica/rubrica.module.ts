import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
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
  MatDialogModule,
  MatProgressSpinnerModule,
  MatExpansionModule
} from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RubricaComponent } from './rubrica.component';
import { RubricaNovoComponent } from './rubrica-novo/rubrica-novo.component';
import { RubricaListagemComponent } from './rubrica-listagem/rubrica-listagem.component';
import { CriterioService } from '../criterio/criterio.service';
import { CriterioDialogComponent } from '../criterio/criterio-dialog/criterio-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    MatTableModule,
    MatStepperModule,
    MatMenuModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    NgxLoadingModule
  ],
  declarations: [RubricaComponent, RubricaNovoComponent, RubricaListagemComponent],
  entryComponents: [CriterioDialogComponent]
  // providers : [CriterioService]
})
export class RubricaModule { }
