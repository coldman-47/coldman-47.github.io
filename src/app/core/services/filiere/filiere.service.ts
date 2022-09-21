import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filiere } from 'src/app/core/models/filiere/filiere';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  cycles = new BehaviorSubject<any>([]);

  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getFilieres(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'filieres');
  }

  getFiliere(id: string){
    return this.http.get(this.baseUrl + 'filieres/'+id);
  }

  getNiveaux(id: string){
    return this.http.get(this.baseUrl + 'niveaux/'+id);
  }

  getCycles(){
    this.http.get(this.baseUrl + 'cycles').subscribe({
      next: (_cycles => this.cycles.next(_cycles))
    });
  }

  addFiliere(filiere: Filiere){
    return this.http.post(this.baseUrl+'filieres/add', filiere);
  }
}
