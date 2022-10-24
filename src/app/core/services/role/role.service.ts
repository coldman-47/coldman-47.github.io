import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl = environment.backendUrl+'roles';

  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get(this.baseUrl);
  }

  updateRole(role: any){
    return this.http.put(this.baseUrl+'/'+role._id, role);
  }
}
