import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  baseUrl = environment.backendUrl+'apprenants';
  serverSentEvent = new BehaviorSubject(null);
  apprenants = new BehaviorSubject([]);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('apprenants', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  getApprenants(classeId: string){
    return this.http.get(this.baseUrl+'/classe/'+classeId);
  }

  getApprenant(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }

  addApprenant(apprenant: Apprenant){
    return this.http.post(this.baseUrl+'/add', apprenant);
  }

  getTuteur(id: string){
    return this.http.get(environment.backendUrl+'tuteurs/'+id);
  }

  delete(id: string){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
