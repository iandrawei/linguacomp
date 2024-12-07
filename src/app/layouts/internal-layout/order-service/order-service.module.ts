import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../app-material.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { OrderServiceComponent } from './order-service.component';
import { OrderServiceListComponent } from './order-service-list/order-service-list.component';
import { OrderServiceCreateComponent } from './order-service-create/order-service-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    OrderServiceComponent,
    OrderServiceListComponent,
    OrderServiceCreateComponent,
  ]
})
export class OrderServiceModule { }
