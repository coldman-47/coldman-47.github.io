import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private baseUrl = environment.backendUrl+'evaluations';

  constructor(private http: HttpClient) { }

  addEvaluation(evaluation: any){
    return this.http.post(this.baseUrl+'/add', evaluation);
  }
}
