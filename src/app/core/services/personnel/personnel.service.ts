import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnel } from '../../models/personnel/personnel';
import { ListenerService } from '../listener/listener.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private baseUrl = environment.backendUrl;
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService) {
    socket.listener('personnels', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  getPersonnels(page?: number, param?: string){
    let filter;
    if (page || param) filter = `?${page ? 'page=' + (page-1) : ''}${page && param ? '&' : ''}${param ? 'search=' + param : ''}`;
    return this.http.get(this.baseUrl + `personnels/entreprise${filter ? filter : ''}`).pipe(
      map(
        (personnels: any) => personnels
      ),
      catchError(
        err => {console.error(); return err}
      )
    );
  }

  addPersonnel(personnel: Personnel){
    return this.http.post(this.baseUrl + 'personnels/add', personnel);
  }

  editPersonnel(id:string, personnel: Personnel){
    return this.http.put(this.baseUrl + 'personnels/'+id, personnel);
  }
  
  deletePersonnel(id:string){
    return this.http.delete(this.baseUrl + 'personnels/'+id);
  }
}
