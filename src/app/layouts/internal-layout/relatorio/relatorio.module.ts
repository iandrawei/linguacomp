import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import {AppRoutingModule} from 'src/app/app-routing.module';
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
import {FormsModule} from '@angular/forms';
import {RelatorioIndividualComponent} from './relatorio-individual/relatorio-individual.component';
import {RelatorioGeralComponent} from './relatorio-geral/relatorio-geral.component';
import {RelatorioComponent} from './relatorio.component';
import {RelatorioGeralDetalheComponent} from './relatorio-geral-detalhe/relatorio-geral-detalhe.component';
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
    ChartsModule,
    NgxLoadingModule
  ],
  declarations: [RelatorioGeralComponent, RelatorioComponent, RelatorioIndividualComponent, RelatorioGeralDetalheComponent]
})
export class RelatorioModule {
}
