import { Component, OnInit } from '@angular/core';
import { AtitudeService } from '../atitude.service';
import { Atitude } from 'src/app/core/model/atitudeModel';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { error } from 'util';

@Component({
  selector: 'app-atitude-novo',
  templateUrl: './atitude-novo.component.html',
  styleUrls: ['./atitude-novo.component.scss']
})
export class AtitudeNovoComponent implements OnInit {

  atitude = new Atitude();
  loading = false;

  constructor(
    private atitudeService: AtitudeService,
    private router: Router,
    private toasty: ToastyService
  ) { }

  ngOnInit() { }

  salvar() {
    this.loading = true;
    this.atitudeService.salvar(this.atitude)
      .subscribe(
        info => {
        this.loading = false;
        console.log('Atitude: ', info);
        this.router.navigateByUrl('/atitude');
        this.toasty.success('Atitude cadastrada com sucesso!');
      }, 
      error =>{
        this.loading = false;
        this.toasty.error('Não foi possível cadastrar a atitude!');
      });
  }

}
