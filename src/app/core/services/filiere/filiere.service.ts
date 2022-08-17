import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getFilieres(id: string){
    return this.http.get(this.baseUrl + 'filieres/'+id);
  }

  getNiveaux(id: string){
    return this.http.get(this.baseUrl + 'niveaux/'+id);
  }

  getCycles(){
    return this.http.get(this.baseUrl + 'cycles');
  }
}
