import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipComponent } from './ship.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { AppMaterialModule } from '../../../app-material.module';
import { ShipCreateComponent, DialogContentExampleDialog } from './ship-create/ship-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  entryComponents : [DialogContentExampleDialog],
  declarations: [
    ShipComponent,
    ShipListComponent,
    ShipCreateComponent,
    DialogContentExampleDialog
  ]
})
export class ShipModule { }
