import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Redevance } from '../../models/redevance/redevance.model';

const BASE_URL = environment.backendUrl + 'redevances';

@Injectable({
  providedIn: 'root',
})
export class RedevanceService {
  private _redevancesSubject = new BehaviorSubject<Redevance[]>([]);

  constructor(private _hhtpClient: HttpClient) { }

  get redevances$() {
    return this._redevancesSubject.asObservable();
  }

  getRedevances( ) {
    this._hhtpClient.get<Redevance[]>(`${BASE_URL}`).subscribe({
      next: (redevances) => {
        console.log(redevances);
        this._redevancesSubject.next(redevances);
      }
    });
  }

  getRedevancePonctuel(idApprenant: string): Observable<number> {
    return this._hhtpClient.get<number>(`${BASE_URL}/apprenant/${idApprenant}`);
  }

  getRedevance(idRedevance: Redevance) {
    return this._hhtpClient.get<Redevance>(`${BASE_URL}/${idRedevance}`);
  }

  createRedevance(redevance: Redevance) {
    return this._hhtpClient.post<Redevance>(`${BASE_URL}/add`, redevance);
  }

  updateRedevance(id: string, redevance: Redevance) {
    return this._hhtpClient.put<Redevance>(`${BASE_URL}/${id}`, redevance);
  }

  deleteRedevance(idRedevance: string) {
    return this._hhtpClient.delete<Redevance>(`${BASE_URL}/${idRedevance}`);
  }

}
