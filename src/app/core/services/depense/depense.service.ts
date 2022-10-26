import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DepenseModel } from '../../models/depense.model';
import { BehaviorSubject, map, Observable } from 'rxjs';

const BASE_URL = environment.backendUrl + 'depenses';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  private _depenses = new BehaviorSubject<DepenseModel[]>([]);
  private _total = new BehaviorSubject<number>(0);

  get depenses$() {
    return this._depenses.asObservable();
  }

  get total$() {
    return this._total.asObservable();
  }

  constructor(private _httpClient: HttpClient) { }

  getDepense(id: string): Observable<DepenseModel> {
    return this._httpClient.get<DepenseModel>(`${BASE_URL}/${id}`);
  }

  getDepensesByMonth(month: number) {
    this._httpClient.get<any>(`${BASE_URL}/mois/${month}`)
      .subscribe(data => {
        this._depenses.next(data.depenses);
        this._total.next(data.total)
    });;
  }

  addDepense(depense: DepenseModel): Observable<DepenseModel> {
    const formData = new FormData();
    formData.append('label', depense.label);
    formData.append('montant', `${depense.montant}`);
    if (depense.preuves) {
      formData.append('preuves', depense.preuves);
    }
    return this._httpClient.post<DepenseModel>(`${BASE_URL}/add`, formData);
  }

  updateDepense(depense: DepenseModel): Observable<DepenseModel> {
    return this._httpClient.put<DepenseModel>(`${BASE_URL}/${depense._id}`, depense);
  }

  deleteDepense(id: string): Observable<DepenseModel> {
    return this._httpClient.delete<DepenseModel>(`${BASE_URL}/${id}`);
  }
}
