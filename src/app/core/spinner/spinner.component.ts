import { SpinnerService } from 'src/app/core/spinner/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  loading: boolean;
        constructor(private loaderService: SpinnerService) {
          this.loaderService.isLoading.subscribe((v) => {
            console.log(v);
            this.loading = v;
          });
        }
        ngOnInit() {
        }

}
