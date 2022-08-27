import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Classe } from '../../models/classe/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  baseUrl = environment.backendUrl+'classes'

  constructor(private http: HttpClient) { }

  getClassesByGrade(niveau: string){
    return this.http.get(this.baseUrl+`/niveau/${niveau}`);
  }

  createClasse(classe: Classe){
    return this.http.post(this.baseUrl+'/add', classe);
  }
}
