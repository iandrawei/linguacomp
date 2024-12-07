import { Component, OnInit } from '@angular/core';
import { CompetenciaService } from '../../competencia/competencia.service';
import { Competencia } from 'src/app/core/model/competenciaModel';
import { Tarefa } from 'src/app/core/model/tarefaModel';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { TarefaService } from '../tarefa.service';
import { Turma } from 'src/app/core/model/turmaModel';
import { TurmaService } from '../../turma/turma.service';
import { Rubrica } from 'src/app/core/model/rubricaModel';
import { RubricaService } from '../../rubrica/rubrica.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-tarefa-novo',
  templateUrl: './tarefa-novo.component.html',
  styleUrls: ['./tarefa-novo.component.scss']
})
export class TarefaNovoComponent implements OnInit {

  token = localStorage.getItem('token');
  tarefa = new Tarefa();
  competencias = [];
  competencia = new Competencia();
  turmas = [];
  turma = new Turma();
  rubricas = [];
  rubrica = new Rubrica();
  lista = [
    {
      'value': 'false',
      'texto': 'Não'
    },
    {
      'value': 'true',
      'texto': 'Sim'
    }
  ];

  jwt = new JwtHelperService();

  constructor(
    private tarefaService: TarefaService,
    private competenciaService: CompetenciaService,
    private turmaService: TurmaService,
    private rubricaService: RubricaService,
    private router: Router,
    private toasty: ToastyService,
  ) { }

  ngOnInit() {
    this.listarTurma(this.jwt.decodeToken(this.token).id);
    this.listarCompetencia();
    this.listarRubrica();
  }

  listarCompetencia() {
    this.competenciaService.listar()
      .subscribe(comp => {
        this.competencias = comp;
        console.log('Competencias na tarefa: ', this.competencias);
      });
  }

  listarTurma(id: string) {
    this.turmaService.listar(id)
      .subscribe(turma => {
        this.turmas = turma;
        console.log('Turmas na tarefa: ', this.turmas);
      });
  }

  listarRubrica() {
    this.rubricaService.listar()
      .subscribe(rubrica => {
        this.rubricas = rubrica;
        console.log('Rubricas na tarefa: ', this.rubricas);
      });
  }

  salvar() {
    this.tarefa.data = new Date();
    const data = new Date(this.tarefa.dataLimite);
    this.tarefa.dataLimite = data;
    this.tarefa.professor = { 'id': this.jwt.decodeToken(this.token).id };
    this.tarefa.turma = new Turma();
    this.tarefa.turma.id = this.turma.id;
    this.tarefa.competencia = new Competencia();
    this.tarefa.competencia.id = this.competencia.id;
    this.tarefa.rubrica = new Rubrica();
    this.tarefa.rubrica.id = this.rubrica.id;
    this.tarefaService.salvar(this.tarefa)
      .subscribe(
        info => {
        console.log('Tarefa: ', this.tarefa);
        this.router.navigateByUrl('/tarefa');
        this.toasty.success('Tarefa cadastrada com sucesso!');
      },
      error => {
        this.toasty.error('Não foi possível cadastrar');
      })
  }

}
