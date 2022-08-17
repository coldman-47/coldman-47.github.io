import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etablissement } from '../../models/etablissement/etablissement';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  private baseUrl = environment.backendUrl;
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('notes', ['add', 'put']);
    // socket.data.subscribe({
    //   next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    // });
  }

  getEtablissements(page?: number, param?: string){
    let filter;
    if (page || param) filter = `?${page ? 'page=' + page : ''}${page && param ? '&' : ''}${param ? 'search=' + param : ''}`;
    return this.http.get(this.baseUrl + `etablissements${filter ? filter : ''}`).pipe(
      map(
        (etablissements: any) => etablissements
      ),
      catchError(
        err => {console.error(); return err}
      )
    );
  }

  addEtablissement(etablissement: Etablissement){
    return this.http.post(this.baseUrl + 'etablissements/add', etablissement);
  }

  editEtablissement(etablissement: Etablissement){
    return this.http.put(this.baseUrl + 'etablissements/'+etablissement._id, etablissement);
  }
}
