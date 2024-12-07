import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-turma-listagem',
  templateUrl: './turma-listagem.component.html',
  styleUrls: ['./turma-listagem.component.scss']
})
export class TurmaListagemComponent implements OnInit {

  turmas = [];
  dataSource = [];
  displayedColumns = ['nome', 'acoes'];
  token = localStorage.getItem('token');
  jwt = new JwtHelperService();
  loading = false;

  constructor(
    private turmaService: TurmaService,
  ) { }

  ngOnInit() {
    this.listar(this.jwt.decodeToken(this.token).id);
  }

  listar(id: string) {
    console.log('chamando');
    this.loading = true;
    this.turmaService.listar(id)
      .subscribe(turmas => {
        console.log('turmas: ', turmas);
        this.dataSource = turmas;
        this.loading = false;
      });
  }

}
