import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private baseUrl = environment.backendUrl+'permissions';

  constructor(private http: HttpClient) { }

  getPermissions(){
    return this.http.get(this.baseUrl);
  }
}
