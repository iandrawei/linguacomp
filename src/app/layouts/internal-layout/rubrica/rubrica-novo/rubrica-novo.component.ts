import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Rubrica } from 'src/app/core/model/rubricaModel';
import { Criterio } from 'src/app/core/model/criterioModel';
import { CriterioDialogComponent } from '../../criterio/criterio-dialog/criterio-dialog.component';
import { CriterioService } from '../../criterio/criterio.service';
import { Niveldesempenho } from 'src/app/core/model/niveldesempenhoModel';
import { SpinnerService } from 'src/app/core/spinner/spinner.service';
import { RubricaService } from '../rubrica.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-rubrica-novo',
  templateUrl: './rubrica-novo.component.html',
  styleUrls: ['./rubrica-novo.component.scss']
})
export class RubricaNovoComponent implements OnInit {

  panelOpenState = false;
  showSpinner: boolean;
  token = localStorage.getItem('token');
  criterioForm: FormGroup;

  rubrica = new Rubrica();
  criterio = new Criterio();
  nivelDesempenhos: Array<Niveldesempenho>;
  quantidadeDeNiveis: number;

  criterios = new MatTableDataSource<Criterio>();

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  displayedColumns: string[] = ['select', 'descricao'];
  selection = new SelectionModel<Criterio>(true, []);

  jwt = new JwtHelperService();

  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private criterioService: CriterioService,
    private rubricaService: RubricaService,
    private dialog: MatDialog,
    private spinnerService: SpinnerService,
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

    this.listarCriterios();

  }

  listarCriterios() {
    this.loading = true;
    this.criterioService.listar()
      .subscribe(criterios => {
        console.log('criterios: ', criterios);
        this.criterios = new MatTableDataSource<Criterio>(criterios);
        this.loading = false;
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.criterios.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.criterios.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: Criterio): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.descricao + 1}`;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CriterioDialogComponent, {
      data: {
        criterio: this.criterio,
        nivelDesempenhos: this.nivelDesempenhos,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listarCriterios();
    });
  }

  salvarRubrica() {
    this.rubrica.criterios = this.selection.selected;
    this.rubrica.professor = {'id': this.jwt.decodeToken(this.token).id};
    this.loading = true;
    this.rubricaService.salvar(this.rubrica)
     .subscribe(
       info => {
      this.router.navigateByUrl('/rubrica');
      this.toasty.success('Cadastrado com sucesso!');
      this.loading = false;
    },
    error => {
      this.toasty.error('Não foi possível cadastrar!');
      this.loading = false;
    })
  }

}
