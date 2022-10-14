import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NiveauService } from 'src/app/core/services/niveaux/niveau.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  baseUrl = environment.backendUrl+'matieres';
  niveau: any = this.niveauSrv.niveau.value;
  filiere: any = this.filiereSrv.filiere.value;

  constructor(private http: HttpClient, private niveauSrv: NiveauService, private filiereSrv: FiliereService) {
    niveauSrv.niveau.subscribe({
      next: res => this.niveau = res
    });
    filiereSrv.filiere.subscribe({
      next: res => this.filiere = res
    });
  }

  getMatieres(UeId: string){
    return this.http.get(this.baseUrl+`/ue/${UeId}/${this.niveau}/${this.filiere}`);
  }

  getMatiere(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }

  getMatieresByNiveauFiliere(niveau: string, filiere: string){
    return this.http.get(this.baseUrl+`/${niveau}/${filiere}`)
  }

  addMatiere(matiere: any){
    return this.http.post(this.baseUrl+'/add', matiere);
  }
}
