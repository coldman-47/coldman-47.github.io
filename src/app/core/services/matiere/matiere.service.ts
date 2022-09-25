import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  baseUrl = environment.backendUrl+'matieres';

  constructor(private http: HttpClient) { }

  getMatieres(UeId: string){
    return this.http.get(this.baseUrl+'/ue/'+UeId);
  }

  getMatiere(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }

  addMatiere(matiere: any){
    return this.http.post(this.baseUrl+'/add', matiere);
  }
}
