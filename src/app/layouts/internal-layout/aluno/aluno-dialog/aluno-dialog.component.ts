import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AlunoService } from '../aluno.service';
import { Aluno } from 'src/app/core/model/alunoModel';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-aluno-dialog',
  templateUrl: './aluno-dialog.component.html',
  styleUrls: ['./aluno-dialog.component.scss']
})
export class AlunoDialogComponent implements OnInit {

  displayedColumns: string[] = ['select', 'nome', 'email'];
  dataSource = new MatTableDataSource<Aluno>();
  selection = new SelectionModel<Aluno>(true, []);

  alunoForm: FormGroup;

  email: string;
  loading = false;

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    //this.listar();
  }

  listar() {
    console.log('email: ', this.email);
    this.loading = true;
    this.alunoService.listar(this.email)
      .subscribe(alunos => {
        this.loading = false;
        console.log('alunos: ', alunos);
        this.dataSource = new MatTableDataSource<Aluno>(alunos);
      });
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


  checkboxLabel(row?: Aluno): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  salvar() {
    console.log('length: ', this.selection.selected.length);
    this.selection.selected.forEach(aluno => {
      console.log('selecionado: ', aluno);
    });
  }

}
