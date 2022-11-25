import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private baseUrl = environment.backendUrl+'infos';

  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('infos', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  getInfos(){
    return this.http.get(this.baseUrl);
  }

  addInfo(info: any){
    return this.http.post(this.baseUrl+'/add', info);
  }
}
