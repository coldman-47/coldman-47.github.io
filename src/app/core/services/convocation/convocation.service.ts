import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConvocationService {

  private baseUrl = environment.backendUrl+'convocations/';

  constructor(private http: HttpClient) { }

  getConvocations(apprenantId: string){
    return this.http.get(this.baseUrl+apprenantId);
  }

  createConvocation(convocation: any){
    return this.http.post(this.baseUrl+'add', convocation); 
  }
}
