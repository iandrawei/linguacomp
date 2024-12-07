import { Component, OnInit } from '@angular/core';
import { Conhecimento } from 'src/app/core/model/conhecimentoModel';
import { ConhecimentoService } from '../conhecimento.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-conhecimento-novo',
  templateUrl: './conhecimento-novo.component.html',
  styleUrls: ['./conhecimento-novo.component.scss']
})
export class ConhecimentoNovoComponent implements OnInit {


  conhecimento = new Conhecimento();
  loading = false;

  constructor(
      private conhecimentoService: ConhecimentoService,
      private router: Router,
      private toasty: ToastyService
    ) { }

  ngOnInit() {
  }

  salvar() {
    this.loading = true;
    this.conhecimentoService.salvar(this.conhecimento)
      .subscribe(
        info => {
        console.log('conhecimento: ', this.conhecimento);
        this.router.navigateByUrl('/conhecimento');
        this.toasty.success('Cadastrado com sucesso!');
        this.loading = false;
      },
      error => {
        this.toasty.error('Não foi possível cadastrar!');
        this.loading = false;
      });
  }



}
