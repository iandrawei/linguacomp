import { Injectable } from '@angular/core';
import { Habilidade } from 'src/app/core/model/habilidadeModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/habilidades`;
   }

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  salvar(habilidade: Habilidade): Observable<any> {
    return this.http.post(`${this.apiUrl}`, habilidade);
  }

  editar(habilidade: Habilidade): Observable<any> {
    return this.http.put(`${this.apiUrl}/${habilidade.id}`,habilidade);
  }

  excluir(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
