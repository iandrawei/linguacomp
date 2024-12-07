import { Injectable } from '@angular/core';
import { Atitude } from 'src/app/core/model/atitudeModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtitudeService {

  apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}/atitudes`;
  }

  listar(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  salvar(atitude: Atitude): Observable<any> {
    return this.http.post(`${this.apiUrl}`, atitude);
  }

  editar(atitude: Atitude): Observable<any>{
    return this.http.put(`${this.apiUrl}/${atitude.id}`,atitude);
  }

  excluir(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);

  }
}
