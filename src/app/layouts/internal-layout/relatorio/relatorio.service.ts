import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/relatorios`;

  }

  listarCriterios(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/rubrica/${id}`);
  }

  getTurmaRelatorio(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/avaliacao/${id}`);
  }

  getCriterioRelatorio(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/criterios/${id}`);
  }
}
