import { Injectable } from '@angular/core';
import { Competencia } from 'src/app/core/model/competenciaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/competencias`;
   }

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  salvar(competencia: Competencia): Observable<any> {
    return this.http.post(`${this.apiUrl}`, competencia);
  }
}
