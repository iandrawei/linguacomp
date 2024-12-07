import { Injectable } from '@angular/core';
import { Avaliacao } from 'src/app/core/model/avaliacaoModel';
import { Autoavaliacao } from 'src/app/core/model/autoavaliacaoModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

 
  apiUrl: string;


  constructor(private http: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}`

  }

  salvar(avaliacao: Avaliacao): Observable<any> {
    return this.http.post(`${this.apiUrl}/avaliacoes`, avaliacao);
  }

  salvarAutoAvaliacao(autoAvaliacao: Autoavaliacao): Observable<any> {
    return this.http.post(`${this.apiUrl}/autoavaliacoes`, autoAvaliacao);
  }
}
