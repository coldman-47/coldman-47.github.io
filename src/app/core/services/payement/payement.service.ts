import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PayementModel } from '../../models/payement.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

const BASE_URL = environment.backendUrl + 'payements';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
  private _payementsSubject = new BehaviorSubject<PayementModel[]>([]);

  get payements$() {
    return this._payementsSubject.asObservable();
  }

  constructor(private _httpClient: HttpClient) { }

  getPayementsByMonth(month: number) {
    this._httpClient.get<PayementModel[]>(`${BASE_URL}/mois/${month}`).subscribe({
      next: (payements) => {
        this._payementsSubject.next(payements);
      }
    });
  }

  getPayementsByApprenant(idApp: string) {
    this._httpClient.get<any>(`${BASE_URL}/apprenant/${idApp}`)
      .pipe(map(data => data.payements))
      .subscribe({
      next: (payements) => {
        this._payementsSubject.next(payements);
      }
    });
  }

  getPayementById(idPayement: string) {
    return this._httpClient.get<PayementModel>(`${BASE_URL}/${idPayement}`);
  }

  createPayement(payement: PayementModel) {
    const formData = new FormData();
    formData.append('montant', `${payement.montant}`);
    formData.append('moisAregler', `${payement.moisAregler}`);
    formData.append('apprenant', payement.apprenant);
    if (payement.preuves) {
      formData.append('preuves', payement.preuves);
    }
    return this._httpClient.post<PayementModel>(`${BASE_URL}/add`, formData);
  }

  updatePayement(payment: PayementModel) {
    return this._httpClient.put<PayementModel>(`${BASE_URL}/${payment._id}`, payment);
  }

  deletePayement(idPayement: string) {
    return this._httpClient.delete<PayementModel>(`${BASE_URL}/${idPayement}`);
  }
}
