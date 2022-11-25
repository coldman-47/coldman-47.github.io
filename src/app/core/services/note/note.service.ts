import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = environment.backendUrl+'notes/';
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('notes', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  addNote(note: any){
    return this.http.post(this.baseUrl+'add', note);
  }

  editNote(note: any){
    return this.http.put(this.baseUrl+note._id, note);
  }

  getNoteApprenantByEvaluation(evaluationId: string, apprenantId: string){
    return this.http.get(this.baseUrl+`${evaluationId}/${apprenantId}`);
  }

  getNotesApprenantByMatiere(matiereId: string, typeId: string, periodeId: string){
    return this.http.get(this.baseUrl+`apprenant/${matiereId}/${typeId}/${periodeId}`);
  }
}
