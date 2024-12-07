import { Injectable } from '@angular/core';
import { Criterio } from 'src/app/core/model/criterioModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriterioService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/criterios`;
   }

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  salvar(criterio: Criterio): Observable<any> {
    return this.http.post(`${this.apiUrl}`, criterio);
  }
}
