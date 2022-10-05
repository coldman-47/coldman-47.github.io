import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  private baseUrl = environment.backendUrl+'seances';

  constructor(private http: HttpClient) { }

  addSeance(seance: any){
    return this.http.post(this.baseUrl+'/add', seance);
  }

  getSeance(seanceId: string){
    return this.http.get(this.baseUrl+'/'+seanceId);
  }
}
