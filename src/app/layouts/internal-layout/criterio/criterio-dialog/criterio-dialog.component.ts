import { SpinnerService } from 'src/app/core/spinner/spinner.service';
import { Criterio } from './../../../../core/model/criterioModel';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CriterioService } from '../criterio.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-criterio-dialog',
  templateUrl: './criterio-dialog.component.html',
  styleUrls: ['./criterio-dialog.component.scss']
})
export class CriterioDialogComponent implements OnInit {

  quantidadeDeNiveis: number;
  criterioForm: FormGroup;
  itens: FormArray;
  criterio = new Criterio();
  showSpinner: boolean;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CriterioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Criterio,
    private criterioService: CriterioService,
    private spinnerService: SpinnerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.criterioForm = this.formBuilder.group({
      descricao: null,
      itens: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      descricao: null,
      valor: null,
    });
  }

  addItens() {
    const niveis = this.criterioForm.controls.itens as FormArray;
    niveis.push(this.formBuilder.group({
      descricao: null,
      valor: null
    }));
  }

  // get formData() { return <FormArray>this.criterioForm.get('Data'); }


  salvar() {
    this.loading = true;
    const arrayControl = this.criterioForm.get('itens') as FormArray;
    this.criterio.nivelDesempenhos = arrayControl.value;
    console.log('array: ', this.criterio);
    this.criterioService.salvar(this.criterio)
    .subscribe(
      criterioSalvo => {
      console.log('criterioSalvo: ', criterioSalvo);
      this.dialogRef.close();
      this.toasty.success('Criterio cadastrado');
      this.loading = false;
    },
    error => {
      this.toasty.error('Não foi possível cadastrar criterio!');
      this.loading = false;
    });
  }

}
