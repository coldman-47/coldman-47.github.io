import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { EncaissementModel } from '../../models/encaissement.model';

const BASE_URL = environment.backendUrl + 'encaissements';

@Injectable({
  providedIn: 'root'
})
export class EncaissementService {
  private _encaissements = new BehaviorSubject<EncaissementModel[]>([]);
  private _total = new BehaviorSubject<number>(0);

  get encaissements$() {
    return this._encaissements.asObservable();
  }

  get total$() {
    return this._total.asObservable();
  }

  constructor(private _httpClient: HttpClient) { }

  getEncaissement(id: string): Observable<EncaissementModel> {
    return this._httpClient.get<EncaissementModel>(`${BASE_URL}/${id}`);
  }

  getEncaissementsByMonth(month: number) {
    this._httpClient.get<any>(`${BASE_URL}/mois/${month}`)
      .subscribe(data => {
        this._encaissements.next(data.encaissements);
        this._total.next(data.total)
    });;
  }

  updateEncaissement(encaissement: EncaissementModel): Observable<EncaissementModel> {
    return this._httpClient.put<EncaissementModel>(`${BASE_URL}/${encaissement._id}`, encaissement);
  }

  deleteEncaissement(id: string): Observable<EncaissementModel> {
    return this._httpClient.delete<EncaissementModel>(`${BASE_URL}/${id}`);
  }
}
