import { FormsModule, FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriterioDialogComponent } from './criterio-dialog/criterio-dialog.component';
import { CriterioComponent } from './criterio.component';
import {
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CriterioService } from './criterio.service';
import { SpinnerService } from 'src/app/core/spinner/spinner.service';
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
    MatProgressSpinnerModule,
    NgxLoadingModule
  ],
  declarations: [CriterioComponent, CriterioDialogComponent],
  exports: [CriterioDialogComponent],
  providers: [CriterioService, SpinnerService]
})
export class CriterioModule { }
