import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Classe } from '../../models/classe/classe';
import { BehaviorSubject } from 'rxjs';
import { ListenerService } from '../listener/listener.service';
import { FiliereService } from '../filiere/filiere.service';
import { NiveauService } from '../niveaux/niveau.service';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  baseUrl = environment.backendUrl+'classes';
  serverSentEvent = new BehaviorSubject(null);

  constructor(private http: HttpClient, socket: ListenerService, private niveauSrv: NiveauService) {
    socket.listener('classes', ['add', 'put']);
    socket.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  getClassesByGrade(filiere: string){
    return this.http.get(this.baseUrl+`/niveau/${this.niveauSrv.niveau.value}/filiere/${filiere}`);
  }

  getClassesByFiliere(filiere: string){
    return this.http.get(this.baseUrl+'/filiere/'+filiere);
  }

  createClasse(classe: Classe){
    return this.http.post(this.baseUrl+'/add', classe);
  }
}
