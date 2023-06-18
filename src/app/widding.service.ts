import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from './API/config';
@Injectable({
  providedIn: 'root',
})
export class WiddingService {
  constructor(private _HttpClient: HttpClient) {}

  getTrending(): Observable<any> {
    return this._HttpClient.get(`${apiUrl}wedding-halls`);
  }
  getMovieDetails(id: string): Observable<any> {
    return this._HttpClient.get(`${apiUrl}wedding-halls/show/${id}`);
  }

  getTrending1(): Observable<any> {
    return this._HttpClient.get(`${apiUrl}sessions`);
  }

  getMovieDetails2(id: string): Observable<any> {
    return this._HttpClient.get(`${apiUrl}sessions/show/${id}`);
  }

  addDetails(data: any): Observable<any> {
    return this._HttpClient.post(`$${apiUrl}wedding-halls/store`, data);
  }
}
