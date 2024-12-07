import { Injectable } from '@angular/core';
import { Rubrica } from 'src/app/core/model/rubricaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/rubricas`;
   }

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  salvar(rubrica: Rubrica): Observable<any> {
    return this.http.post(`${this.apiUrl}`, rubrica);
  }
}
