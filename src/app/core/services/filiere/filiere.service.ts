import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private baseUrl = environment.backendUrl+'filieres';
  filiere = new BehaviorSubject<string>('');
  filieres = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }
  
  getFilieres(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'filieres');
  }
  
  getFilieresByNiveau(id: string){
    return this.http.get(this.baseUrl + '/niveau/'+id);
  }
  
  getFiliere(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }

  addFiliere(filiere: Filiere){
    return this.http.post(this.baseUrl+'/add', filiere);
  }
}
