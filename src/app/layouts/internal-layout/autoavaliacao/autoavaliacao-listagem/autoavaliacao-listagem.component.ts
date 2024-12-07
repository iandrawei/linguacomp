import { Component, OnInit } from '@angular/core';
import { AutoAvaliacaoService } from '../autoavaliacao.service';
import { Autoavaliacao } from 'src/app/core/model/autoavaliacaoModel';

@Component({
  selector: 'app-autoavaliacao-listagem',
  templateUrl: './autoavaliacao-listagem.component.html',
  styleUrls: ['./autoavaliacao-listagem.component.scss']
})
export class AutoavaliacaoListagemComponent implements OnInit {

  autoavaliacoes = [];
  dataSource = [];
  displayedColumns: string[] = ['comentario','rubrica', 'tarefa', 'acoes'];
  loading = false;

  constructor(private autoavaliacaoService: AutoAvaliacaoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.loading = true;
    this.autoavaliacaoService.listar()
    .subscribe(autoavaliacoes => {
      this.loading = false;
        console.log('autoavaliacoes: ',autoavaliacoes);
        this.dataSource = autoavaliacoes

    });
  }

  editar(autoavaliacao:Autoavaliacao){
    this.loading = true;
    this.autoavaliacaoService.editar(autoavaliacao)
    .subscribe(() => {
      this.loading = false;
      this.listar();
    });

  }

  excluir(id:number){
    this.loading = true;
    this.autoavaliacaoService.excluir(id)
    .subscribe(() => {
     this.loading = false;
     this.listar();
    })
  }

}
