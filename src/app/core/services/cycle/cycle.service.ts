import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  
  cycle = new BehaviorSubject<any>(null);
  cycles = new BehaviorSubject<any>([]);
  private baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getNiveaux(id: string){
    return this.http.get(this.baseUrl + 'niveaux/'+id);
  }

  getCycles(){
    this.http.get(this.baseUrl + 'cycles').subscribe({
      next: (_cycles => this.cycles.next(_cycles))
    });
  }
}
