import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  apiUrl: string;


  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/alunos`;    
   }

  listar(email: string): Observable<any> {
    const params = new HttpParams();

    if(email){
      params.set("email", email);
    }
    
    return this.http.get(`${this.apiUrl}`, { params: params });
  }
}
