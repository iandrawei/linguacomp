import {Criterio} from 'src/app/core/model/criterioModel';
import {FormGroup, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Resposta} from 'src/app/core/model/respostaModel';
import {Usuario} from 'src/app/core/model/usuarioModel';
import {Tarefa} from 'src/app/core/model/tarefaModel';
import {RespostaService} from 'src/app/core/service/resposta.service';
import {Aluno} from 'src/app/core/model/alunoModel';
import {Rubrica} from 'src/app/core/model/rubricaModel';
import {ActivatedRoute, Router} from '@angular/router';

import * as $ from 'jquery';
import {AvaliacaoService} from '../avaliacao.service';
import {Niveldesempenho} from 'src/app/core/model/niveldesempenhoModel';
import {Avaliacao} from 'src/app/core/model/avaliacaoModel';
import {ToastyService} from 'ng2-toasty';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-avaliar-aluno',
  templateUrl: './avaliar-aluno.component.html',
  styleUrls: ['./avaliar-aluno.component.scss']
})
export class AvaliarAlunoComponent implements OnInit {

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

  Editor = ClassicEditor;
  loading = false;

  constructor(
    private respostaService: RespostaService,
    private avaliacaoService: AvaliacaoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService
  ) {
  }

  ngOnInit() {
    this.tarefaId = this.route.snapshot.paramMap.get('id');
    this.listar();

    this.resposta.aluno = new Aluno();
    this.resposta.tarefa = new Tarefa();
    this.resposta.tarefa.rubrica = new Rubrica();
    // this.resposta.tarefa.rubrica.criterios
    this.resposta.resposta = '';
  }

  listar() {
    this.loading = true;
    this.respostaService.listar(this.tarefaId)
      .subscribe(respostas => {
        this.loading = false;
        console.log('Respostas: ', respostas);
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
      });
  }

  getTituloColuna() {
    this.resposta.tarefa.rubrica.criterios[0].nivelDesempenhos.forEach(element => {

      console.log('titulos: ', element.titulo);
      this.displayedColumns.push(element.titulo);
    });
  }

  salvarProsseguir() {
    if (this.index < (this.indexMaximo - 1)) {
      console.log('resposta atual: ', this.resposta);

      this.getRadioSelecionados();

      this.salvarAvaliacao(true);

      // tslint:disable-next-line:triple-equals
    } else if (this.index == (this.indexMaximo - 1)) {
      console.log('index igual: ', this.index, ' == ', this.indexMaximo - 1);
      console.log('resposta atual: ', this.resposta);
      this.getRadioSelecionados();
      this.salvarAvaliacao(false);
    } else {
      console.log('index: ', this.index);
      console.log('proximo maior que o index maximo');
    }
  }

  salvarAvaliacao(isProximo: boolean) {
    const avaliacao = new Avaliacao();
    avaliacao.resposta = new Resposta();
    avaliacao.rubrica = new Rubrica();

    avaliacao.rubrica = this.resposta.tarefa.rubrica;
    avaliacao.resposta.id = this.resposta.id;
    avaliacao.comentario = this.resposta.comentario;
    avaliacao.nivelDesempenhos = this.niveisSelecionados;

    console.log('Avalicao: ', avaliacao);

    this.loading = false;
    this.avaliacaoService.salvar(avaliacao)
      .subscribe(
        avaliacao => {
        this.toasty.success('Salvo com sucesso!');
        if (isProximo) {
          this.proximaResposta();
        } else {
          this.router.navigateByUrl('/tarefa');
        }
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.toasty.error('Não foi possível salvar!');
      });
  }

  proximaResposta() {
    this.index = this.index + 1;
    this.resposta = this.respostas[this.index];
  }


  getRadioSelecionados() {
    this.loading = true;
    const resultArray: any[] = [];

    console.log('entrou no methodo getRadioSelecionados');
    $('input[type=radio]:checked').each(function () {
      let nivel = new Niveldesempenho();
      nivel.id = parseInt($(this).val());
      console.log('nivel: ', nivel);
      resultArray.push(nivel);
    });

    this.niveisSelecionados = resultArray;
    this.loading = false;
  }

}
