import { TarefaService } from './../tarefa.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-tarefa-aluno',
  templateUrl: './tarefa-aluno.component.html',
  styleUrls: ['./tarefa-aluno.component.scss']
})
export class TarefaAlunoComponent implements OnInit {

  tarefas = [];
  dataSource = [];
  displayedColumns: string[] = ['descricao', 'tipo', 'datalimite', 'status', 'acoes'];
  token = localStorage.getItem('token');
  jwt = new JwtHelperService();


  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit() {
    this.listar(this.jwt.decodeToken(this.token).id);
  }
  listar(id: number) {
    this.tarefaService.getTarefaDoAluno(id)
      .subscribe(tarefas => {
        console.log('tarefas: ', tarefas);
        this.dataSource = tarefas;
      });
  }

}
