import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliarAlunoComponent } from './avaliar-aluno/avaliar-aluno.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {
  MatExpansionModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule, MatTableModule,
  MatStepperModule,
  MatMenuModule,
  MatCheckboxModule,
  MatChipsModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatListModule,
  MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    CKEditorModule,
    NgxLoadingModule
  ],
  declarations: [AvaliacaoComponent, AvaliarAlunoComponent],
  providers: [RespostaService]
})
export class AvaliacaoModule { }
