import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';


@Component({
  selector: 'app-tarefa-listagem',
  templateUrl: './tarefa-listagem.component.html',
  styleUrls: ['./tarefa-listagem.component.scss']
})
export class TarefaListagemComponent implements OnInit {

  tarefas = [];
  dataSource = [];
  displayedColumns: string[] = ['descricao', 'tipo', 'datalimite', 'autoavaliacao', 'acoes'];
  loading = false;

  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.loading = true;
    this.tarefaService.listar()
      .subscribe(tarefas => {
        this.loading = false;
        console.log('tarefas: ', tarefas);
        this.dataSource = tarefas;
      });
  }

}
