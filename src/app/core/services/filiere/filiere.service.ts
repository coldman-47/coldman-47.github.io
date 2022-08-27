import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  cycles = new BehaviorSubject<any>([]);

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

  getCycles(){
    this.http.get(this.baseUrl + 'cycles').subscribe({
      next: (_cycles => this.cycles.next(_cycles))
    });
  }
}
