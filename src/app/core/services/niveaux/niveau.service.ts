import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  niveau = new BehaviorSubject<string>('');

  private baseUrl = environment.backendUrl+'niveau';

  constructor(private http: HttpClient) { }

  delete(id: string){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
