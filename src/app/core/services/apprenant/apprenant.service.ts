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

  addApprenant(apprenant: Apprenant){
    return this.http.post(this.baseUrl+'/add', apprenant);
  }
}
