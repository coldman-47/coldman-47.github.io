import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BourseModel } from '../../models/bourse/bourse.model';

const BASE_URL = environment.backendUrl + 'bourses';

@Injectable({
  providedIn: 'root'
})
export class BourseService {
  private _boursesSubject = new BehaviorSubject<BourseModel[]>([]);

  constructor(private _httpClient: HttpClient) { }

  get bourses$(): Observable<BourseModel[]> {
    return this._boursesSubject.asObservable();
  }

  getBourses(): void {
    this._httpClient.get<BourseModel[]>(BASE_URL)
      .subscribe(bourses => this._boursesSubject.next(bourses));
  }

  getBourse(id: number): Observable<BourseModel> {
    return this._httpClient.get<BourseModel>(`${BASE_URL}/${id}`);
  }

  addBourse(bourse: BourseModel): Observable<BourseModel> {
    return this._httpClient.post<BourseModel>(`${BASE_URL}/add`, bourse);
  }

  updateBourse(bourse: BourseModel): Observable<BourseModel> {
    return this._httpClient.put<BourseModel>(`${BASE_URL}/${bourse._id}`, bourse);
  }

  deleteBourse(id: number): Observable<BourseModel> {
    return this._httpClient.delete<BourseModel>(`${BASE_URL}/${id}`);
  }
}
