import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatMenuModule
} from '@angular/material';

import { ConhecimentoListagemComponent } from './conhecimento-listagem/conhecimento-listagem.component';
import { ConhecimentoComponent } from './conhecimento.component';
import { ConhecimentoNovoComponent } from './conhecimento-novo/conhecimento-novo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConhecimentoService } from './conhecimento.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    NgxLoadingModule
  ],
  declarations: [ConhecimentoComponent,
    ConhecimentoNovoComponent,
    ConhecimentoListagemComponent
  ],
  providers: [ConhecimentoService]
})
export class ConhecimentoModule { }
