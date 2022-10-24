import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cours } from 'src/app/core/models/cours/cours';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  baseUrl = environment.backendUrl+'cours';

  constructor(private http: HttpClient) { }

  getCours(classeId: string){
    return this.http.get(this.baseUrl+`/classe/${classeId}`);
  }

  addCours(cours: Cours){
    return this.http.post(this.baseUrl+'/add', cours);
  }

  volumeHoraireRestant(matiereId: string, enseignantId: string){
    return this.http.get(this.baseUrl+`/matiere/${matiereId}/enseignant/${enseignantId}/done`);
  }
}
