import { Component, OnInit } from '@angular/core';
import { HabilidadeService } from '../habilidade.service';
import { Habilidade } from 'src/app/core/model/habilidadeModel';

@Component({
  selector: 'app-habilidade-listagem',
  templateUrl: './habilidade-listagem.component.html',
  styleUrls: ['./habilidade-listagem.component.scss']
})
export class HabilidadeListagemComponent implements OnInit {

  habilidades = [];
  dataSource = [];
  displayedColumns = ['descricao', 'acoes'];
  loading = false;

  constructor(private habilidadeService: HabilidadeService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.loading = true;
    this.habilidadeService.listar()
      .subscribe(habilidades => {
        console.log('habilidades: ', habilidades);
        this.dataSource = habilidades;
        this.loading = false;
      });
  }

  editar(habilidade: Habilidade){
    this.loading = true;
    this.habilidadeService.editar(habilidade)
    .subscribe(() => {
      this.loading = false;
      this.listar();
    });
   }

  excluir(id:number) {
    this.loading = true;
    this.habilidadeService.excluir(id)
    .subscribe(() => {
      this.loading = false;
      this.listar();
    });
   }

}
