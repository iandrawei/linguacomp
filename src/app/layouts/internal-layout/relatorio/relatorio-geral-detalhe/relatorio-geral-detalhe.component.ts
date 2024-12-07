import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../../turma/turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from 'src/app/core/model/turmaModel';
import {RelatorioService} from '../relatorio.service';

@Component({
  selector: 'app-relatorio-geral-detalhe',
  templateUrl: './relatorio-geral-detalhe.component.html',
  styleUrls: ['./relatorio-geral-detalhe.component.scss']
})
export class RelatorioGeralDetalheComponent implements OnInit {

  turmaId;
  turma = new Turma();
  dataSource = [];
  displayedColumns = ['nome', 'notas'];
  loading = false;

  constructor(
    private turmaService: TurmaService,
    private relatorioService: RelatorioService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.turmaId = this.route.snapshot.paramMap.get('id');
    this.getTurma();
  }

  getTurma() {
    this.loading = true;
    this.relatorioService.getTurmaRelatorio(this.turmaId)
      .subscribe(turma => {
        console.log('relatorio: ', turma);
        this.turma = turma;
        this.dataSource = turma;
        this.loading = false;
      });
  }

  irParaRelatorio(id: number) {
    console.log('teste');
    this.loading = true;
    this.router.navigateByUrl(`relatorio/individual/${id}`);
    this.loading = false;
  }
}
