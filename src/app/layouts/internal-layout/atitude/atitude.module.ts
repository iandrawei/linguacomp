import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtitudeNovoComponent } from './atitude-novo/atitude-novo.component';
import { AtitudeComponent } from './atitude.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AtitudeService } from './atitude.service';
import { AtitudeListagemComponent } from './atitude-listagem/atitude-listagem.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    NgxLoadingModule
  ],
  declarations: [AtitudeNovoComponent, AtitudeComponent, AtitudeListagemComponent],
  providers: [AtitudeService]
})
export class AtitudeModule { }
