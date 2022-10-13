import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { EncaissementModel } from '../../models/encaissement.model';

const BASE_URL = environment.backendUrl + 'encaissements';

@Injectable({
  providedIn: 'root'
})
export class EncaissementService {
  private _encaissements = new BehaviorSubject<EncaissementModel[]>([]);

  get encaissements$() {
    return this._encaissements.asObservable();
  }

  constructor(private _httpClient: HttpClient) { }

  getEncaissement(id: string): Observable<EncaissementModel> {
    return this._httpClient.get<EncaissementModel>(`${BASE_URL}/${id}`);
  }

  getEncaissementsByMonth(month: number) {
    this._httpClient.get<EncaissementModel[]>(`${BASE_URL}/mois/${month}`).subscribe(encaissements => {
      this._encaissements.next(encaissements);
    });;
  }

  updateEncaissement(encaissement: EncaissementModel): Observable<EncaissementModel> {
    return this._httpClient.put<EncaissementModel>(`${BASE_URL}/${encaissement._id}`, encaissement);
  }

  deleteEncaissement(id: string): Observable<EncaissementModel> {
    return this._httpClient.delete<EncaissementModel>(`${BASE_URL}/${id}`);
  }
}
