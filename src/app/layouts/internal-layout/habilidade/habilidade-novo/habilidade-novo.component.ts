import { Component, OnInit } from '@angular/core';

import { Habilidade } from 'src/app/core/model/habilidadeModel';
import { HabilidadeService } from '../habilidade.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-habilidade-novo',
  templateUrl: './habilidade-novo.component.html',
  styleUrls: ['./habilidade-novo.component.scss']
})
export class HabilidadeNovoComponent implements OnInit {

  habilidade = new Habilidade();
  loading = false;

  constructor(
    private habilidadeService: HabilidadeService,
    private router: Router,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
  }

  salvar() {
    this.loading = true;
    this.habilidadeService.salvar(this.habilidade)
      .subscribe(
        info => {
        console.log('Habilidade: ', this.habilidade);
        this.router.navigateByUrl('/habilidade');
        this.toasty.success('Habilidade cadastrada com sucesso!');
        this.loading = false;
      },error => {
        this.toasty.error('Não foi possível cadastrar');
        this.loading = false;
      });
  }

}
