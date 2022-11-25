import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  niveau = new BehaviorSubject<string>('');

  private baseUrl = environment.backendUrl+'niveau';
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('niveaux', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  delete(id: string){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
