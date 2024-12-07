import { ToastyService } from 'ng2-toasty';
import { Resposta } from './../../../../core/model/respostaModel';
import { Tarefa } from './../../../../core/model/tarefaModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { JwtHelperService } from '@auth0/angular-jwt';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-tarefa-resposta',
  templateUrl: './tarefa-resposta.component.html',
  styleUrls: ['./tarefa-resposta.component.scss']
})
export class TarefaRespostaComponent implements OnInit {

  tarefaId;
  tarefa = new Tarefa();
  resposta = new Resposta();
  token = localStorage.getItem('token');
  jwt = new JwtHelperService();

  Editor = ClassicEditor;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService,
    private router: Router,
    private toasty: ToastyService,
  ) { }

  ngOnInit() {
    this.tarefaId = this.route.snapshot.paramMap.get('id');
    this.resposta.resposta = '';
    this.getTarefa();
  }

  getTarefa() {
    this.loading = true;
    this.tarefaService.getTarefa(this.tarefaId)
      .subscribe(tarefa => {
        this.loading = false;
        console.log('tarefa: ', tarefa);
        this.tarefa = tarefa;
      });
  }

  salvar() {
    this.resposta.aluno = { 'id': this.jwt.decodeToken(this.token).id, 'nome': this.jwt.decodeToken(this.token).nome };
    this.resposta.data = new Date();
    this.resposta.tarefa = this.tarefa;

    console.log(this.resposta);
    
    this.loading = true;
    this.tarefaService.salvarResposta(this.resposta)
    .subscribe(
      info => {
      this.loading = false;
      console.log('resposta: ', this.resposta);
      this.router.navigateByUrl('/tarefas');
      this.toasty.success('Resposta cadastrada com sucesso!');
    },
    error => {
      this.loading = false;
      this.toasty.error('Não foi possível cadastrar');
    });
  }

}
