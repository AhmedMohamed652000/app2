import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WiddingService {

  constructor(private _HttpClient:HttpClient) { }
  
  getTrending():Observable<any>
  {
    return this._HttpClient.get(`https://grad-proj.goicsoftware.com/api/wedding-halls`)
  }
  getMovieDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://grad-proj.goicsoftware.com/api/wedding-halls/show/${id}`)
  }

  getTrending1():Observable<any>{
    return this._HttpClient.get(`https://grad-proj.goicsoftware.com/api/sessions`)
  }

  getMovieDetails2(id:string):Observable<any>
  {
    return this._HttpClient.get(` https://grad-proj.goicsoftware.com/api/sessions/show/${id}`)
  }



  
 


  addDetils(data: any): Observable<any> {
    return this._HttpClient.post(`$https://grad-proj.goicsoftware.com/api/wedding-halls/store`, data);
  }

  // private apiUrl = 'https://grad-proj.goicsoftware.com/api/wedding-halls/store';

  // createItem(item: any): Observable<any> {
  //   return this._HttpClient.post(`${this.apiUrl}/items`, item);
  // }

  // getItems(): Observable<any[]> {
  //   return this._HttpClient.get<any[]>(`${this.apiUrl}/items`);
  // }

  // submitHallDetails(data: any): Observable<any> {
  //   return this._HttpClient.post(`$https://grad-proj.goicsoftware.com/api/wedding-halls/store`, data);
  // }

  // getHallDetails(): Observable<any> {
  //   return this._HttpClient.get(`$https://grad-proj.goicsoftware.com/api/wedding-halls`);
  // }
}


 
