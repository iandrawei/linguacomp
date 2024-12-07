import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';



import {
  MdcFabModule,
  MdcMenuModule,
  MdcElevationModule,
  MdcCardModule,
  MdcIconModule,
  MdcListModule,
  MdcTextFieldModule,
  MdcFormFieldModule,
  MdcSelectModule
} from '@angular-mdc/web';

@NgModule({
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MdcElevationModule,
    MdcCardModule,
    MdcIconModule,
    MdcListModule,
    MdcTextFieldModule,
    MdcFormFieldModule,
    MatSelectModule,
    MdcSelectModule,
    MatStepperModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule
  ],
  declarations: []
})
export class AppMaterialModule { }
