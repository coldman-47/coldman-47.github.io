import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  private baseUrl = environment.backendUrl+'seances';
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('seances', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => {
        this.serverSentEvent.next(ssEvent);
        console.log(ssEvent);
        
      }
    });
  }

  addSeance(seance: any){
    return this.http.post(this.baseUrl+'/add', seance);
  }

  getSeance(seanceId: string){
    return this.http.get(this.baseUrl+'/'+seanceId);
  }
}
