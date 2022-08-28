import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UeService {

  baseUrl = environment.backendUrl+'ue'

  constructor(private http: HttpClient) { }

  getUe(id: string){
    return this.http.get(this.baseUrl+'/'+id);
  }
}
