import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoDialogComponent } from './aluno-dialog/aluno-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';
import { AlunoService } from './aluno.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    NgxLoadingModule
  ],
  declarations: [AlunoDialogComponent],
  providers : [AlunoService]
})
export class AlunoModule { }
