import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../relatorio.service';
import { TurmaService } from '../../turma/turma.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-relatorio-geral',
  templateUrl: './relatorio-geral.component.html',
  styleUrls: ['./relatorio-geral.component.scss']
})
export class RelatorioGeralComponent implements OnInit {

  dados = [];
  dataSource = [];
  displayedColumns = ['nome', 'acoes'];
  token = localStorage.getItem('token');

  jwt = new JwtHelperService();

  loading = false;

  constructor(
    private relatorioService: RelatorioService,
    private turmaService: TurmaService
    ) { }

    ngOnInit() {
      this.listar(this.jwt.decodeToken(this.token).id);
    }

    listar(id: string) {
      this.loading = true;
      this.turmaService.listar(id)
        .subscribe(turmas => {
          console.log('turmas: ', turmas);
          this.dataSource = turmas;
          this.loading = false;
        });
    }

}
