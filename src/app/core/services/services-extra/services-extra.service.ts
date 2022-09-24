import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceExtraModel } from '../../models/service/service.model';
import { ListenerService } from '../listener/listener.service';

const BASE_URL = environment.backendUrl + 'services';

@Injectable({
  providedIn: 'root'
})
export class ServicesExtraService {
  private _servicesExtraSubject = new BehaviorSubject<ServiceExtraModel[]>([]);
  serverSentEvent = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient, private _socketService: ListenerService) {
    this._socketService.listener('services', ['add', 'put', 'delete']);
    this._socketService.data.subscribe({
      next: (ssEvent: any) => this.serverSentEvent.next(ssEvent)
    });
  }

  get servicesExtra$(): Observable<ServiceExtraModel[]> {
    return this._servicesExtraSubject.asObservable();
  }

  getAllServicesExtra(): void {
    this._httpClient.get<ServiceExtraModel[]>(`${BASE_URL}/etablissement`).subscribe(
      servicesExtra => this._servicesExtraSubject.next(servicesExtra)
    );
  }

  getServiceExtraById(id: number): Observable<ServiceExtraModel> {
    return this._httpClient.get<ServiceExtraModel>(`${BASE_URL}/${id}`);
  }

  addServiceExtra(serviceExtra: ServiceExtraModel): Observable<ServiceExtraModel> {
    return this._httpClient.post<ServiceExtraModel>(`${BASE_URL}/add`, serviceExtra);
  }

  updateServiceExtra(serviceExtra: ServiceExtraModel): Observable<ServiceExtraModel> {
    return this._httpClient.put<ServiceExtraModel>(`${BASE_URL}/${serviceExtra._id}`, serviceExtra);
  }

  deleteServiceExtra(id: number): Observable<any> {
    return this._httpClient.delete(`${BASE_URL}/${id}`);
  }
}
