import { Aluno } from 'src/app/core/model/alunoModel';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from 'src/app/core/model/turmaModel';
import { MatDialog } from '@angular/material';
import { AlunoDialogComponent } from '../../aluno/aluno-dialog/aluno-dialog.component';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-turma-detalhe',
  templateUrl: './turma-detalhe.component.html',
  styleUrls: ['./turma-detalhe.component.scss']
})
export class TurmaDetalheComponent implements OnInit {

  turmaId;
  turma = new Turma();
  dataSource = [];
  displayedColumns = ['nome', 'email', 'acoes'];
  loading = false;

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private toasty: ToastyService,
  ) { }

  ngOnInit() {
    this.turmaId = this.route.snapshot.paramMap.get('id');
    this.getTurma();
  }

  getTurma() {
    this.loading = true;
    this.turmaService.getTurma(this.turmaId)
      .subscribe(turma => {
        this.loading = false;
        console.log('turma: ', turma);
        this.turma = turma;
        this.dataSource = turma.alunos;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoDialogComponent, {
      width: '700px',
      // data: {
      //   criterio: this.criterio,
      //   nivelDesempenhos: this.nivelDesempenhos,
      // }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      result.forEach(element => {
        this.turma.alunos.push(element);
      });
      console.log('alunos: ', this.turma);
      this.atualiza();
    });
  }

  removeItem(aluno: Aluno) {
    console.log('item: ', aluno);
    console.log('alunos: ', this.turma.alunos);
    this.turma.alunos.splice(this.turma.alunos.indexOf(aluno), 1);
    this.atualiza();
  }

  atualiza() {
    this.loading = true;
    this.turmaService.atualizar(this.turma)
      .subscribe(info => {
        this.loading = false;
        console.log('Turma: ', this.turma);
        this.toasty.success('Turma atualizada');
        this.getTurma();
      });
  }

}
