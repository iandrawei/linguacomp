import { Component, OnInit } from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {RelatorioService} from '../relatorio.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-relatorio-individual',
  templateUrl: './relatorio-individual.component.html',
  styleUrls: ['./relatorio-individual.component.scss']
})
export class RelatorioIndividualComponent implements OnInit {

  idResposta;
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public doughnutColors = [
    {
      backgroundColor: [
        'rgba(110, 114, 20, 1)',
        'rgba(118, 183, 172, 1)',
        'rgba(0, 148, 97, 1)',
        'rgba(129, 78, 40, 1)',
        'rgba(129, 199, 111, 1)',
        'rgba(203, 16, 16, 1)',
        'rgba(203, 166, 16, 1)'
      ]
    }
  ];

  loading = false;

  constructor(
    private relatorioService: RelatorioService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.idResposta = this.route.snapshot.paramMap.get('id');
    this.getCriterio();
  }

  getCriterio() {
    this.loading = true;
    this.relatorioService.getCriterioRelatorio(this.idResposta)
      .subscribe(criterios => {
        console.log('relatorio: ', criterios);
        for (let i = 0; i < criterios.length; i++) {
          console.log(criterios[i][1]);
          this.doughnutChartLabels.push(criterios[i][1]);
          this.doughnutChartData.push(criterios[i][0]);
          this.loading = false;
        }
      });
  }

}
