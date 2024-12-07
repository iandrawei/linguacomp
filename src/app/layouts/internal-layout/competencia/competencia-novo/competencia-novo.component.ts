import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HabilidadeService } from './../../habilidade/habilidade.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

import { Competencia } from '../../../../core/model/competenciaModel';
import { Conhecimento } from '../../../../core/model/conhecimentoModel';
import { Habilidade } from '../../../../core/model/habilidadeModel';
import { Atitude } from '../../../../core/model/atitudeModel';
import { ConhecimentoService } from '../../conhecimento/conhecimento.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { AtitudeService } from '../../atitude/atitude.service';
import { CompetenciaService } from '../competencia.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-competencia-novo',
  templateUrl: './competencia-novo.component.html',
  styleUrls: ['./competencia-novo.component.scss']
})
export class CompetenciaNovoComponent implements OnInit {

  token = localStorage.getItem('token');
  competencia = new Competencia();
  panelOpenState = false;

  conhecimentos = new MatTableDataSource<Conhecimento>();
  habilidades = new MatTableDataSource<Habilidade>();
  atitudes = new MatTableDataSource<Atitude>();

  conhecimentosSelecionados = new Array<Conhecimento>();

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  displayedColumns: string[] = ['select', 'descricao'];
  selection = new SelectionModel<Conhecimento>(true, []);
  selection2 = new SelectionModel<Habilidade>(true, []);
  selection3 = new SelectionModel<Atitude>(true, []);

  jwt = new JwtHelperService();

  loading = false;


  constructor(
    private _formBuilder: FormBuilder,
    private conhecimentoService: ConhecimentoService,
    private habilidadeService: HabilidadeService,
    private atitudeService: AtitudeService,
    private competenciaService: CompetenciaService,
    private router: Router,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.listarConhecimentos();
    this.listarHabilidades();
    this.listarAtitudes();
  }

  listarConhecimentos() {
    this.loading = true;
    this.conhecimentoService.listar()
      .subscribe(conhecimentos => {
        console.log('conhecimentos: ', conhecimentos);
        this.conhecimentos = new MatTableDataSource<Conhecimento>(conhecimentos);
        this.loading = false;
      });
  }

  listarHabilidades() {
    this.loading = true;
    this.habilidadeService.listar()
      .subscribe(habilidades => {
        console.log('habilidades: ', habilidades);
        this.habilidades = new MatTableDataSource<Habilidade>(habilidades);
        this.loading = false;
      });
  }

  listarAtitudes() {
    this.loading = true;
    this.atitudeService.listar()
      .subscribe(atitudes => {
        console.log('atitudes: ', atitudes);
        this.atitudes = new MatTableDataSource<Atitude>(atitudes);
        this.loading = false;
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.conhecimentos.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.conhecimentos.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: Conhecimento): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.descricao + 1}`;
  }

  isAllSelected2() {
    const numSelected = this.selection2.selected.length;
    const numRows = this.habilidades.data.length;
    return numSelected === numRows;
  }

  masterToggle2() {
    this.isAllSelected2() ?
      this.selection2.clear() :
      this.habilidades.data.forEach(row => this.selection2.select(row));
  }
  checkboxLabel2(row?: Habilidade): string {
    if (!row) {
      return `${this.isAllSelected2() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${row.descricao + 1}`;
  }

  isAllSelected3() {
    const numSelected = this.selection3.selected.length;
    const numRows = this.atitudes.data.length;
    return numSelected === numRows;
  }

  masterToggle3() {
    this.isAllSelected3() ?
      this.selection3.clear() :
      this.atitudes.data.forEach(row => this.selection3.select(row));
  }
  checkboxLabel3(row?: Atitude): string {
    if (!row) {
      return `${this.isAllSelected3() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection3.isSelected(row) ? 'deselect' : 'select'} row ${row.descricao + 1}`;
  }

  salvar() {
    this.competencia.conhecimentos = this.selection.selected;
    this.competencia.habilidades = this.selection2.selected;
    this.competencia.atitudes = this.selection3.selected;
    this.competencia.professor = {'id': this.jwt.decodeToken(this.token).id};

    this.loading = true;
    this.competenciaService.salvar(this.competencia)
      .subscribe(
        info => {
        console.log('competencia: ', this.competencia);
        this.router.navigateByUrl('/competencia');
        this.toasty.success('Cadastrado com sucesso!');
        this.loading = false;
      }, error => {
        this.toasty.error('Não foi possível cadastrar!');
        this.loading = false;
      });
  }

}
