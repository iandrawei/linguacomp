import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/model/usuarioModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastyService } from 'ng2-toasty';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-novo',
  templateUrl: './cadastro-novo.component.html',
  styleUrls: ['./cadastro-novo.component.scss']
})
export class CadastroNovoComponent implements OnInit {

  usuario = new Usuario();
  isAluno: boolean;
  firstFormGroup: FormGroup;
  form: FormGroup;
  private formSubmitAttempt: boolean;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toasty: ToastyService,
    private cadastroService: CadastroService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );

  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.usuario.nome = this.form.value.nome;
      this.usuario.email = this.form.value.email;
      this.usuario.password = this.form.value.password;
      this.usuario.isAluno = this.isAluno;

      this.cadastroService.salvar(this.usuario)
        .then(() => {
          this.loading = false;
          this.router.navigate(['/login']);
          this.toasty.success('Usuário cadastrado!');
        })
        .catch(erro => {
          this.loading = false;
          this.toasty.error('Não foi possível cadatrar o usuário');
        });
    }
    this.formSubmitAttempt = true;
  }
}
