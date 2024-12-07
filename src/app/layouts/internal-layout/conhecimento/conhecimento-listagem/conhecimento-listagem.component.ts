import { Component, OnInit } from '@angular/core';
import { ConhecimentoService } from '../conhecimento.service';
import { Conhecimento } from 'src/app/core/model/conhecimentoModel';

@Component({
  selector: 'app-conhecimento-listagem',
  templateUrl: './conhecimento-listagem.component.html',
  styleUrls: ['./conhecimento-listagem.component.scss']
})
export class ConhecimentoListagemComponent implements OnInit {

  conhecimentos = [];
  dataSource = [];
  displayedColumns = ['descricao', 'acoes'];
  loading = false;

  constructor(private conhecimentoService: ConhecimentoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.loading = true;
    this.conhecimentoService.listar()
      .subscribe(conhecimentos => {
        console.log('conhecimentos: ', conhecimentos);
        this.dataSource = conhecimentos;
        this.loading = false;
      });
  }

  editar(conhecimento: Conhecimento) {
    this.loading = true;
    this.conhecimentoService.editar(conhecimento)
    .subscribe(() => {
      this.loading = false;
      this.listar();
    });
   }

   excluir(id:number){
     this.loading = true;
     this.conhecimentoService.excluir(id)
     .subscribe(() => {
       this.loading = false;
      this.listar();
     });
   }

}
