import { Criterio } from 'src/app/core/model/criterioModel';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Resposta } from 'src/app/core/model/respostaModel';
import { Usuario } from 'src/app/core/model/usuarioModel';
import { Tarefa } from 'src/app/core/model/tarefaModel';
import { RespostaService } from 'src/app/core/service/resposta.service';
import { Aluno } from 'src/app/core/model/alunoModel';
import { Rubrica } from 'src/app/core/model/rubricaModel';
import { ActivatedRoute, Router } from '@angular/router';

import { Niveldesempenho } from 'src/app/core/model/niveldesempenhoModel';
import { Avaliacao } from 'src/app/core/model/avaliacaoModel';
import { ToastyService } from 'ng2-toasty';

import * as $ from 'jquery';
import { AvaliacaoService } from '../../avaliacao/avaliacao.service';
import { Autoavaliacao } from 'src/app/core/model/autoavaliacaoModel';
import {JwtHelperService} from '@auth0/angular-jwt';


@Component({
  selector: 'app-autoavaliacao-novo',
  templateUrl: './autoavaliacao-novo.component.html',
  styleUrls: ['./autoavaliacao-novo.component.scss']
})
export class AutoavaliacaoNovoComponent implements OnInit {

  token = localStorage.getItem('token');
  jwt = new JwtHelperService();
  tarefaId;
  step = 0;
  respostas = [];
  niveisSelecionados: any[] = [];
  resposta = new Resposta();
  displayedColumns: string[] = [];
  columnsToDisplay: string[];
  dataSource = [];
  panelOpenState = false;

  isLinear = false;
  rubricaForm: FormGroup;
  itens: FormArray;

  anterior = 0;
  proximo = 0;
  indexMaximo = 0;
  index = 0;
  loading = false;

  constructor(
    private respostaService: RespostaService,
    private avaliacaoService: AvaliacaoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.tarefaId = this.route.snapshot.paramMap.get('id');
    this.listar();

    this.resposta.aluno = new Aluno();
    this.resposta.tarefa = new Tarefa();
    this.resposta.tarefa.rubrica = new Rubrica();
    this.resposta.resposta = '';
  }

  listar() {
    this.loading = true;
    this.respostaService.getRespostaDoAluno(this.tarefaId, this.jwt.decodeToken(this.token).id)
      .subscribe(respostas => {
        console.log('teste: ', respostas);
        this.respostas = respostas;
        this.dataSource = respostas;
        this.indexMaximo = this.respostas.length;

        if (this.respostas.length) {
          this.anterior = this.respostas[0];
          this.index = 0;
          this.resposta = respostas[0];
        }

        console.log(this.resposta);
        this.getTituloColuna();
        this.loading = false;
      });
  }

  getTituloColuna() {
    this.resposta.tarefa.rubrica.criterios[0].nivelDesempenhos.forEach(element => {

      console.log('titulos: ', element.titulo);
      this.displayedColumns.push(element.titulo);
    });
  }

  salvarProsseguir() {
    this.loading = true;
    this.getRadioSelecionados();

    this.salvarAvaliacao();
    this.loading = false;
  }

  salvarAvaliacao() {
    let avaliacao = new Autoavaliacao();
    avaliacao.resposta = new Resposta();
    avaliacao.rubrica = new Rubrica();

    avaliacao.rubrica = this.resposta.tarefa.rubrica;
    avaliacao.resposta.id = this.resposta.id;
    avaliacao.comentario = this.resposta.comentario;
    avaliacao.nivelDesempenhos = this.niveisSelecionados;

    this.avaliacaoService.salvarAutoAvaliacao(avaliacao)
      .subscribe(avaliacao => {
        this.toasty.success('Salvo com sucesso!');
        this.router.navigateByUrl('/tarefa');
      },
      error => {
        this.toasty.error('Não foi possível salvar!');
      });
  }


  getRadioSelecionados() {
    let resultArray: any[] = [];


    $('input[type=radio]:checked').each(function () {
      let nivel = new Niveldesempenho();
      nivel.id = parseInt($(this).val());
      console.log('nivel: ', nivel);
      resultArray.push(nivel);
    });

    this.niveisSelecionados = resultArray;
  }

}
