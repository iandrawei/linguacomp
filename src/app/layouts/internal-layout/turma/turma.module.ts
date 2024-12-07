import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaNovoComponent } from './turma-novo/turma-novo.component';
import { TurmaListagemComponent } from './turma-listagem/turma-listagem.component';
import { TurmaComponent } from './turma.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TurmaDetalheComponent } from './turma-detalhe/turma-detalhe.component';
import { AlunoDialogComponent } from '../aluno/aluno-dialog/aluno-dialog.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    NgxLoadingModule
  ],
  declarations: [TurmaComponent, TurmaNovoComponent, TurmaListagemComponent, TurmaDetalheComponent],
  entryComponents: [AlunoDialogComponent]
})
export class TurmaModule { }
