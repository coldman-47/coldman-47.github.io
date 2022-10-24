import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ue } from 'src/app/core/models/ue/ue';
import { NiveauService } from '../niveaux/niveau.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';

@Injectable({
  providedIn: 'root'
})
export class UeService {

  baseUrl = environment.backendUrl+'ue'

  constructor(private http: HttpClient, private niveauSrv: NiveauService, private filiereSrv: FiliereService) { }

  getUes(){
    return this.http.get(this.baseUrl+ `/${this.niveauSrv.niveau.value}/${this.filiereSrv.filiere.value}`);
  }

  getUe(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }

  getUesByClass(classId: string, ){
    return this.http.get(this.baseUrl+'/classe/'+classId);
  }

  addUe(ue: Ue){
    return this.http.post(this.baseUrl+'/add', ue);
  }

  delete(id: string){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
