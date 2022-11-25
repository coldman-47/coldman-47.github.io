import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NiveauService } from 'src/app/core/services/niveaux/niveau.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root',
})
export class MatiereService {
  baseUrl = environment.backendUrl + 'matieres';
  niveau: any = this.niveauSrv.niveau.value;
  filiere: any = this.filiereSrv.filiere.value;
  serverSentEvent = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private niveauSrv: NiveauService,
    private filiereSrv: FiliereService,
    socket: ListenerService
  ) {
    socket.listener('matieres', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent),
    });
    niveauSrv.niveau.subscribe({
      next: (res) => (this.niveau = res),
    });
    filiereSrv.filiere.subscribe({
      next: (res) => (this.filiere = res),
    });
  }

  getMatieres(UeId: string) {
    return this.http.get(
      this.baseUrl + `/ue/${UeId}/${this.niveau}/${this.filiere}`
    );
  }

  getMatiere(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  getMatieresByNiveauFiliere(niveau: string, filiere: string) {
    return this.http.get(this.baseUrl + `/${niveau}/${filiere}`);
  }

  addMatiere(matiere: any) {
    return this.http.post(this.baseUrl + '/add', matiere);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
