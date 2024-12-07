import { Component, OnInit } from '@angular/core';
import { CompetenciaService } from '../competencia.service';
import { Competencia } from 'src/app/core/model/competenciaModel';

@Component({
  selector: 'app-competencia-listagem',
  templateUrl: './competencia-listagem.component.html',
  styleUrls: ['./competencia-listagem.component.scss']
})
export class CompetenciaListagemComponent implements OnInit {

  competencias = [];
  dataSource = [];
  displayedColumns = ['nome', 'descricao', 'conhecimento', 'habilidade', 'atitude', 'acoes'];
  loading = false;

  constructor(private competenciaService: CompetenciaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.loading = true;
    this.competenciaService.listar()
      .subscribe(competencias => {
        console.log('Competências: ', competencias);
        this.dataSource = competencias;
        this.loading = false;
      });
  }


}
