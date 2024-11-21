import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deputado } from './module/deputados';

@Injectable({
  providedIn: 'root'
})
export class DeputadoServiceService {

  private API = "https://dadosabertos.camara.leg.br/api/v2/deputados"
  
  constructor(private http: HttpClient) {
    
   }

   buscarDeputadoPorNome(nome: string): Observable<any>{
    return this.http.get<any>(`${this.API}?nome=${nome}&ordem=ASC&ordenarPor=nome`)
   }

}
