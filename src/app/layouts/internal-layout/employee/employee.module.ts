import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { AppMaterialModule } from '../../../app-material.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCreateComponent
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
