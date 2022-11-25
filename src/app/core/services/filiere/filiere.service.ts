import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { environment } from 'src/environments/environment';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private baseUrl = environment.backendUrl+'filieres';
  filiere = new BehaviorSubject<string>('');
  filieres = new BehaviorSubject<any[]>([]);

  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('filieres', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  getFilieres(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl);
  }

  getFilieresByNiveau(id: string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + '/niveau/'+id);
  }

  getFiliere(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }

  addFiliere(filiere: Filiere){
    return this.http.post(this.baseUrl+'/add', filiere);
  }

  delete(id: string){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
