import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home-layout',
  templateUrl: './internal-layout.component.html',
  styleUrls: ['./internal-layout.component.scss']
})
export class InternalLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  jwt = new JwtHelperService();
  token = localStorage.getItem('token');
  isProfessor = false;
  nomeUsuario = '';
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


  constructor() { }

  ngOnInit() {
    this.isProfessor = this.jwt.decodeToken(this.token).isProfessor;
    this.nomeUsuario = this.jwt.decodeToken(this.token).nome;
  }

}
