import { Injectable } from '@angular/core';
import { Turma } from 'src/app/core/model/turmaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/turmas`;
   }

  listar(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/professor/${id}`);
  }

  salvar(turma: Turma): Observable<any> {
    return this.http.post(`${this.apiUrl}`, turma);
  }

  getTurma(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  atualizar(turma: Turma): Observable<any> {
    return this.http.put(`${this.apiUrl}/${turma.id}`, turma);
  }
}
