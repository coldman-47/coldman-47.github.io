import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private baseUrl = environment.backendUrl+'infos';

  constructor(private http: HttpClient) { }

  getInfos(){
    return this.http.get(this.baseUrl);
  }

  addInfo(info: any){
    return this.http.post(this.baseUrl+'/add', info);
  }
}
