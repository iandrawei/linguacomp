import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Avaliacao } from '../model/avaliacaoModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/respostas`;
   }

  listar(id: number): Observable<any> {
    // let params = new HttpParams();
    // params.set('id', id.toString());
    return this.http.get(`${this.apiUrl}/tarefa/${id}`);
  }

  getRespostaDoAluno(id: number, aluno: number): Observable<any> {
    // let params = new HttpParams();
    // params.set('id', id.toString());
    return this.http.get(`${this.apiUrl}/tarefa/${id}/aluno/${aluno}`);
  }
}
