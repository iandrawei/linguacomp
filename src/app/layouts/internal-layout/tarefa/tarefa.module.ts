import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaNovoComponent } from './tarefa-novo/tarefa-novo.component';
import { TarefaListagemComponent } from './tarefa-listagem/tarefa-listagem.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatStepperModule,
  MatSelectModule,
  MatOptionModule,
  MatMenuModule
} from '@angular/material';

import { TarefaComponent } from './tarefa.component';
import { CompetenciaService } from '../competencia/competencia.service';
import { FormsModule } from '@angular/forms';
import { TarefaAlunoComponent } from './tarefa-aluno/tarefa-aluno.component';
import { TarefaRespostaComponent } from './tarefa-resposta/tarefa-resposta.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    CKEditorModule,
    NgxLoadingModule
  ],
  declarations: [TarefaComponent, TarefaNovoComponent, TarefaListagemComponent, TarefaAlunoComponent, TarefaRespostaComponent],
  providers: [CompetenciaService]
})
export class TarefaModule { }
