import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/core/model/turmaModel';
import { TurmaService } from '../turma.service';
import { Router } from '@angular/router';
import { ToastyComponent, ToastyService } from 'ng2-toasty';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-turma-novo',
  templateUrl: './turma-novo.component.html',
  styleUrls: ['./turma-novo.component.scss']
})
export class TurmaNovoComponent implements OnInit {

  turma = new Turma();
  jwt = new JwtHelperService();
  loading = false;

  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private toasty: ToastyService,
  ) { }

  ngOnInit() {
  }

  salvar() {
    const token = localStorage.getItem('token');
    this.turma.professor = { 'id': this.jwt.decodeToken(token).id };
    this.loading = true;
    this.turmaService.salvar(this.turma)
      .subscribe(
        info => {
          console.log('Turma: ', this.turma);
          this.loading = false;
          this.router.navigateByUrl('/turma');
          this.toasty.success('Turma cadastrada com sucesso');
        },
        error => {
          this.loading = false;
          this.toasty.error('Não foi possível cadastrar');
        });
  }

}
