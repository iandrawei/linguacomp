import {Injectable} from '@angular/core';
import {Usuario} from 'src/app/core/model/usuarioModel';
import {Http} from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = `${environment.apiUrl}/usuarios`;
  }

  salvar(usuario: Usuario): Promise<any> {
    return this.http.post(`${this.apiUrl}`, usuario)
      .toPromise()
      .then(response => response.json());

  }
}
