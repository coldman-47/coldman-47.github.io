import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enseignant } from '../../models/enseignant/enseignant';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private baseUrl = environment.backendUrl+'enseignants';
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('enseignants', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  getEnseignants(page?: number, param?: string){
    let filter;
    if (page || param) filter = `?${page ? 'page=' + (page-1) : ''}${page && param ? '&' : ''}${param ? 'search=' + param : ''}`;
    return this.http.get(this.baseUrl + (filter ? filter : '')).pipe(
      map(
        (enseignants: any) => enseignants
      ),
      catchError(
        err => {console.error(); return err}
      )
    );
  }

  addEnseignant(enseignant: Enseignant){
    return this.http.post(this.baseUrl + '/add', enseignant);
  }

  editEnseignant(id:string, enseignant: Enseignant){
    return this.http.put(this.baseUrl + '/'+id, enseignant);
  }
  
  deleteEnseignant(id:string){
    return this.http.delete(this.baseUrl + '/'+id);
  }
}
