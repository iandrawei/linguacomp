import { SpinnerService } from './core/spinner/spinner.service';
import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linguacomp';

  constructor(private toastyConfig: ToastyConfig, private spinnerService: SpinnerService) {
    this.toastyConfig.theme = 'material';
  }
}
