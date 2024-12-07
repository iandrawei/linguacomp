import { SpinnerService } from 'src/app/core/spinner/spinner.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { providers } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [SpinnerComponent],
  providers : [SpinnerService]
})
export class SpinnerModule { }
