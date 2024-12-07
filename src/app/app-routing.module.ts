import { TarefaRespostaComponent } from './layouts/internal-layout/tarefa/tarefa-resposta/tarefa-resposta.component';
import { TarefaAlunoComponent } from './layouts/internal-layout/tarefa/tarefa-aluno/tarefa-aluno.component';
import { AvaliarAlunoComponent } from './layouts/internal-layout/avaliacao/avaliar-aluno/avaliar-aluno.component';
import { AvaliacaoComponent } from './layouts/internal-layout/avaliacao/avaliacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './layouts/internal-layout/home/home.component';
import { ExternalLayoutComponent } from './layouts/external-layout/external-layout.component';
import { LoginComponent } from './layouts/external-layout/login/login.component';
import { InternalLayoutComponent } from './layouts/internal-layout/internal-layout.component';
import { ShipComponent } from './layouts/internal-layout/ship/ship.component';
import { ShipListComponent } from './layouts/internal-layout/ship/ship-list/ship-list.component';
import { ShipCreateComponent } from './layouts/internal-layout/ship/ship-create/ship-create.component';
import { OrderServiceComponent } from './layouts/internal-layout/order-service/order-service.component';
import { OrderServiceListComponent } from './layouts/internal-layout/order-service/order-service-list/order-service-list.component';
import { OrderServiceCreateComponent } from './layouts/internal-layout/order-service/order-service-create/order-service-create.component';
import { EmployeeListComponent } from './layouts/internal-layout/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './layouts/internal-layout/employee/employee-create/employee-create.component';
import { EmployeeComponent } from './layouts/internal-layout/employee/employee.component';
import { HabilidadeComponent } from './layouts/internal-layout/habilidade/habilidade.component';
import { HabilidadeNovoComponent } from './layouts/internal-layout/habilidade/habilidade-novo/habilidade-novo.component';
import { ConhecimentoComponent } from './layouts/internal-layout/conhecimento/conhecimento.component';
import { ConhecimentoNovoComponent } from './layouts/internal-layout/conhecimento/conhecimento-novo/conhecimento-novo.component';
// tslint:disable-next-line:max-line-length
import { ConhecimentoListagemComponent } from './layouts/internal-layout/conhecimento/conhecimento-listagem/conhecimento-listagem.component';
import { HabilidadeListagemComponent } from './layouts/internal-layout/habilidade/habilidade-listagem/habilidade-listagem.component';
import { AtitudeNovoComponent } from './layouts/internal-layout/atitude/atitude-novo/atitude-novo.component';
import { AtitudeListagemComponent } from './layouts/internal-layout/atitude/atitude-listagem/atitude-listagem.component';
import { AtitudeComponent } from './layouts/internal-layout/atitude/atitude.component';
import { CompetenciaNovoComponent } from './layouts/internal-layout/competencia/competencia-novo/competencia-novo.component';
import { CompetenciaComponent } from './layouts/internal-layout/competencia/competencia.component';
import { CompetenciaListagemComponent } from './layouts/internal-layout/competencia/competencia-listagem/competencia-listagem.component';
import { RubricaComponent } from './layouts/internal-layout/rubrica/rubrica.component';
import { RubricaListagemComponent } from './layouts/internal-layout/rubrica/rubrica-listagem/rubrica-listagem.component';
import { RubricaNovoComponent } from './layouts/internal-layout/rubrica/rubrica-novo/rubrica-novo.component';
import { TarefaComponent } from './layouts/internal-layout/tarefa/tarefa.component';
import { TarefaListagemComponent } from './layouts/internal-layout/tarefa/tarefa-listagem/tarefa-listagem.component';
import { TarefaNovoComponent } from './layouts/internal-layout/tarefa/tarefa-novo/tarefa-novo.component';
import { TurmaComponent } from './layouts/internal-layout/turma/turma.component';
import { TurmaListagemComponent } from './layouts/internal-layout/turma/turma-listagem/turma-listagem.component';
import { TurmaNovoComponent } from './layouts/internal-layout/turma/turma-novo/turma-novo.component';
import { CadastroNovoComponent } from './layouts/external-layout/cadastro/cadastro-novo/cadastro-novo.component';
import { AutoavaliacaoComponent } from './layouts/internal-layout/autoavaliacao/autoavaliacao.component';
import { AutoavaliacaoNovoComponent } from './layouts/internal-layout/autoavaliacao/autoavaliacao-novo/autoavaliacao-novo.component';
// tslint:disable-next-line:max-line-length
import { AutoavaliacaoListagemComponent } from './layouts/internal-layout/autoavaliacao/autoavaliacao-listagem/autoavaliacao-listagem.component';
import { RelatorioComponent } from './layouts/internal-layout/relatorio/relatorio.component';
import { RelatorioGeralComponent } from './layouts/internal-layout/relatorio/relatorio-geral/relatorio-geral.component';
import { RelatorioIndividualComponent } from './layouts/internal-layout/relatorio/relatorio-individual/relatorio-individual.component';
import { TurmaDetalheComponent } from './layouts/internal-layout/turma/turma-detalhe/turma-detalhe.component';
// tslint:disable-next-line:max-line-length
import { RelatorioGeralDetalheComponent } from './layouts/internal-layout/relatorio/relatorio-geral-detalhe/relatorio-geral-detalhe.component';



const routes: Routes = [
  {
    path: '',
    component: InternalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login', pathMatch: 'full'
      },
      {
        path: 'ship',
        component: ShipComponent,
        children: [
          {
            path: '',
            component: ShipListComponent
          },
          {
            path: 'create',
            component: ShipCreateComponent
          }
        ]
      },
      {
        path: 'order-of-service',
        component: OrderServiceComponent,
        children: [
          {
            path: '',
            component: OrderServiceListComponent
          },
          {
            path: 'create',
            component: OrderServiceCreateComponent
          }
        ]
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        children: [
          {
            path: '',
            component: EmployeeListComponent
          },
          {
            path: 'create',
            component: EmployeeCreateComponent
          }
        ]
      },
      {
        path: 'habilidade',
        component: HabilidadeComponent,
        children: [
          {
            path: '',
            component: HabilidadeListagemComponent
          },
          {
            path: 'create',
            component: HabilidadeNovoComponent
          }
        ]
      },
      {
        path: 'atitude',
        component: AtitudeComponent,
        children: [
          {
            path: '',
            component: AtitudeListagemComponent
          },
          {
            path: 'create',
            component: AtitudeNovoComponent
          }
        ]
      },
      {
        path: 'competencia',
        component: CompetenciaComponent,
        children: [
          {
            path: '',
            component: CompetenciaListagemComponent
          },
          {
            path: 'create',
            component: CompetenciaNovoComponent
          }
        ]
      },
      {
        path: 'rubrica',
        component: RubricaComponent,
        children: [
          {
            path: '',
            component: RubricaListagemComponent
          },
          {
            path: 'create',
            component: RubricaNovoComponent
          }
        ]
      },
      {
        path: 'conhecimento',
        component: ConhecimentoComponent,
        children: [
          {
            path: '',
            component: ConhecimentoListagemComponent
          },
          {
            path: 'create',
            component: ConhecimentoNovoComponent
          }
        ]
      },
      {
        path: 'tarefa',
        component: TarefaComponent,
        children: [
          {
            path: '',
            component: TarefaListagemComponent
          },
          {
            path: 'create',
            component: TarefaNovoComponent
          }
        ]
      },
      {
        path: 'tarefas',
        component: TarefaComponent,
        children: [
          {
            path: '',
            component: TarefaAlunoComponent
          },
          {
            path: 'responder/:id',
            component: TarefaRespostaComponent
          }
        ]
      },
      {
        path: 'turma',
        component: TurmaComponent,
        children: [
          {
            path: '',
            component: TurmaListagemComponent
          },
          {
            path: 'create',
            component: TurmaNovoComponent
          },
          {
            path: 'detail/:id',
            component: TurmaDetalheComponent
          }
        ]
      },
      {
        path: 'autoavaliacao',
        component: AutoavaliacaoComponent,
        children: [
          {
            path: '',
            component: AutoavaliacaoListagemComponent
          },
          {
            path: 'create/:id',
            component: AutoavaliacaoNovoComponent
          }
        ]
      },
      {
        path: 'avaliacao/:id',
        component: AvaliacaoComponent,
        children: [
          {
            path: '',
            component: AvaliarAlunoComponent
          }
        ]
      },
      {
        path: 'relatorio',
        component: RelatorioComponent,
        children: [
          {
            path: '',
            component: RelatorioGeralComponent
          },
          {
            path: 'turma/:id',
            component: RelatorioGeralDetalheComponent
          },
          {
            path: 'individual/:id',
            component: RelatorioIndividualComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: ExternalLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: CadastroNovoComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
