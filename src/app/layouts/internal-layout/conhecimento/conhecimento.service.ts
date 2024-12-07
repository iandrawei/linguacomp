import { Injectable } from '@angular/core';

import { Conhecimento } from 'src/app/core/model/conhecimentoModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConhecimentoService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/conhecimentos`;
   }

  listar(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  salvar(conhecimento: Conhecimento): Observable<any>{
    return this.http.post(`${this.apiUrl}`, conhecimento);
  }

  editar(conhecimento: Conhecimento): Observable<any>{
    return this.http.put(`${this.apiUrl}/${conhecimento.id}`,conhecimento);
  }

  excluir(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
