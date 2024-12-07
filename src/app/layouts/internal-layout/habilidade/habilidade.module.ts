import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HabilidadeComponent } from './habilidade.component';
import { HabilidadeNovoComponent } from './habilidade-novo/habilidade-novo.component';
import { HabilidadeListagemComponent } from './habilidade-listagem/habilidade-listagem.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTableModule, MatIconModule, MatDialogModule, MatMenuModule } from '@angular/material';
import { HabilidadeService } from './habilidade.service';
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
    MatDialogModule,
    MatMenuModule,
    NgxLoadingModule
  ],
  declarations: [HabilidadeNovoComponent, HabilidadeComponent, HabilidadeListagemComponent]
})
export class HabilidadeModule { }
