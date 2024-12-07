import { Component, OnInit } from '@angular/core';
import { AtitudeService } from '../atitude.service';
import { Atitude } from 'src/app/core/model/atitudeModel';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-atitude-listagem',
  templateUrl: './atitude-listagem.component.html',
  styleUrls: ['./atitude-listagem.component.scss']
})
export class AtitudeListagemComponent implements OnInit {

  atitudes = [];
  dataSource = [];
  displayedColumns: string[] = ['descricao', 'acoes'];
  loading = false;

  constructor(
    private atitudeService: AtitudeService,
    private toasty: ToastyService
    ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.loading = true;
    this.atitudeService.listar()
      .subscribe(atitudes => {
        this.loading = false;
        console.log('atitudes: ', atitudes);
        this.dataSource = atitudes;
      });
  }

  editar(atitude: Atitude) {
    this.loading = true;
    this.atitudeService.editar(atitude)
      .subscribe(() => {
        this.loading = false;
        this.listar();
        this.toasty.success('Tarefa cadastrada com sucesso!');
      });

  }

  excluir(id: number) {
    this.loading = true;
    this.atitudeService.excluir(id)
      .subscribe(() => {
        this.loading = false;
        this.listar();
        this.toasty.success('Tarefa cadastrada com sucesso!');
      });
  }
}
