import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  baseUrl = environment.backendUrl+'apprenants'

  constructor(private http: HttpClient) { }

  getApprenant(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }

  addApprenant(apprenant: Apprenant){
    return this.http.post(this.baseUrl+'/add', apprenant);
  }

  getTuteur(id: string){
    return this.http.get(environment.backendUrl+'tuteurs/'+id);
  }
}
