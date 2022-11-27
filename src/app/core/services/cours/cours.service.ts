import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cours } from 'src/app/core/models/cours/cours';
import { BehaviorSubject, map } from 'rxjs';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  baseUrl = environment.backendUrl + 'cours';
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('cours', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent),
    });
  }

  getCours(classeId: string) {
    return this.http.get(this.baseUrl + `/classe/${classeId}`);
  }

  addCours(cours: Cours) {
    return this.http.post(this.baseUrl + '/add', cours);
  }

  volumeHoraireRestant(matiereId: string, enseignantId: string) {
    return this.http.get(
      this.baseUrl + `/matiere/${matiereId}/enseignant/${enseignantId}/done`
    );
  }

  coursEnseignant(id: string) {
    return this.http.get(this.baseUrl + '/enseignant/' + id);
  }
}
