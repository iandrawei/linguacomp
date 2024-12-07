import { Component, OnInit } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-login-layout',
  templateUrl: './external-layout.component.html' ,
  styleUrls: ['./external-layout.component.scss']
})
export class ExternalLayoutComponent implements OnInit {

  constructor(private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {
  }

}
