import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getFilieres(){
    return this.http.get(this.baseUrl + 'filieres');
  }

  getFiliere(id: string){
    return this.http.get(this.baseUrl + 'filieres/'+id);
  }

  getNiveaux(id: string){
    return this.http.get(this.baseUrl + 'niveaux/'+id);
  }

  addFiliere(filiere: Filiere){
    return this.http.post(this.baseUrl+'filieres/add', filiere);
  }
}
