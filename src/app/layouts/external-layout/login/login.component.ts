import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  loading = false;

  constructor(
    private fb: FormBuilder,         // {3}
    private router: Router,
    private authService: AuthService, // {4}
    private toasty: ToastyService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      console.log('login');
      this.authService.login(this.form.value.userName, this.form.value.password) // {7}
        .then(response => {
          this.loading = false;
          if (response.isProfessor) {
            this.router.navigate(['/turma']);
          } else {
            this.router.navigate(['/tarefas']);
          }
        })
        .catch(erro => {
          this.loading = false;
          this.toasty.error('Usuário ou senha incorretos!');
        });
    }
    this.formSubmitAttempt = true;             // {8}
  }
}
