import { PeriodicElement } from './../../ship/ship-list/ship-list.component';
import { Component, OnInit } from '@angular/core';
import { RubricaService } from '../rubrica.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Rubrica } from 'src/app/core/model/rubricaModel';

@Component({
  selector: 'app-rubrica-listagem',
  templateUrl: './rubrica-listagem.component.html',
  styleUrls: ['./rubrica-listagem.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class RubricaListagemComponent implements OnInit {

  rubricas: any;
  dataSource = [];
  displayedColumns: string[] = ['descricao'];
  displayedRubricaColumns: string[] = [];
  expandedElement: Rubrica | null;

  loading = false;

  constructor(private rubricaService: RubricaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.loading = true;
    this.rubricaService.listar()
      .subscribe(rubricas => {
        console.log('rubricas: ', rubricas);
        this.dataSource = rubricas;
        this.rubricas = rubricas;
        this.loading = false;
        this.getTituloColuna();
      });
  }

  getTituloColuna() {
    this.rubricas[0].criterios[0].nivelDesempenhos.forEach(element => {

      console.log('titulos: ', element.titulo);
      this.displayedRubricaColumns.push(element.titulo);
    });
  }

}
