import { Resposta } from './../../../core/model/respostaModel';
import { Injectable } from '@angular/core';
import { Tarefa } from 'src/app/core/model/tarefaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  apiUrl: string;
  apiResposta: string;


  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/tarefas`;
    this.apiResposta = `${environment.apiUrl}/respostas`;
   }

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getTarefa(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getTarefaDoAluno(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/aluno/${id}`);
  }

  salvar(tarefa: Tarefa): Observable<any> {
    return this.http.post(`${this.apiUrl}`, tarefa);
  }

  salvarResposta(resposta: Resposta): Observable<any> {
    return this.http.post(`${this.apiResposta}`, resposta);
  }
}
