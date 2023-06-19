import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from './API/config';
@Injectable({
  providedIn: 'root',
})
export class WiddingService {
  constructor(private _HttpClient: HttpClient) {}

  getAllWedding(): Observable<any> {
    return this._HttpClient.get(`${apiUrl}wedding-halls`);
  }

  getAllSessions(): Observable<any> {
    return this._HttpClient.get(`${apiUrl}sessions`);
  }

  getAllPhotographer(): Observable<any> {
    return this._HttpClient.get(`${apiUrl}photographer`);
  }
  getAllVideographer(): Observable<any> {
    return this._HttpClient.get(`${apiUrl}videographer`);
  }

  getVideoDetail(id: string): Observable<any> {
    return this._HttpClient.get(`${apiUrl}videographer/show/${id}`);
  }
  getPhotoDetail(id: string): Observable<any> {
    return this._HttpClient.get(`${apiUrl}photographer/show/${id}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this._HttpClient.get(`${apiUrl}wedding-halls/show/${id}`);
  }
  getMovieDetails2(id: string): Observable<any> {
    return this._HttpClient.get(`${apiUrl}sessions/show/${id}`);
  }

  addDetails(data: any): Observable<any> {
    console.log(data);
    return this._HttpClient.post(`$${apiUrl}wedding-halls/store`, data);
  }
}
