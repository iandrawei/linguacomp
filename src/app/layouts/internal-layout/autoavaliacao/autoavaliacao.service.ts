import { Injectable } from '@angular/core';
import { Autoavaliacao } from 'src/app/core/model/autoavaliacaoModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoAvaliacaoService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/autoavaliacoes`;
   }

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  salvar(autoavaliacao: Autoavaliacao): Observable<any> {
    return this.http.post(`${this.apiUrl}`, autoavaliacao);
  }

  editar(autoavaliacao: Autoavaliacao): Observable<any>{
    return this.http.put(`${this.apiUrl}/${autoavaliacao.id}`,autoavaliacao);
  }

  excluir(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);

  }
}
