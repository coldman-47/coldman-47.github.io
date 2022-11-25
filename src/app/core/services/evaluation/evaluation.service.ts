import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private baseUrl = environment.backendUrl+'evaluations';
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('evaluations', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  addEvaluation(evaluation: any){
    return this.http.post(this.baseUrl+'/add', evaluation);
  }

  getTypes(){
    return this.http.get(environment.backendUrl+'types');
  }

  getEvaluations(classeId: string){
    return this.http.get(this.baseUrl+`/classe/${classeId}`);
  }
}
