
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalLayoutComponent } from './internal-layout.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { HomeModule } from './home/home.module';
import { ShipModule } from './ship/ship.module';
import { OrderServiceModule } from './order-service/order-service.module';
import { EmployeeModule } from './employee/employee.module';
import { HabilidadeModule } from './habilidade/habilidade.module';
import { ConhecimentoModule } from './conhecimento/conhecimento.module';
import { AtitudeModule } from './atitude/atitude.module';
import { CompetenciaModule } from './competencia/competencia.module';
import { TurmaModule } from './turma/turma.module';
import { RubricaModule } from './rubrica/rubrica.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { CriterioModule } from './criterio/criterio.module';
import { CustomHttpInterceptor } from 'src/app/core/spinner/http-interceptor';
import { MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { AutoavaliacaoModule } from './autoavaliacao/autoavaliacao.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { AlunoModule } from './aluno/aluno.module';


@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    MatIconModule,
    AppRoutingModule,
    HomeModule,
    ShipModule,
    OrderServiceModule,
    EmployeeModule,
    HabilidadeModule,
    ConhecimentoModule,
    AtitudeModule,
    CompetenciaModule,
    TurmaModule,
    RubricaModule,
    TarefaModule,
    CriterioModule,
    MatProgressSpinnerModule,
    AutoavaliacaoModule,
    MatSidenavModule,
    MatListModule,
    AvaliacaoModule,
    RelatorioModule,
    AlunoModule
  ],
  declarations: [
    InternalLayoutComponent,
  ]
})
export class InternalLayoutModule { }
