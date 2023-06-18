import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrl } from './API/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken')) {
      this.saveUserData();
    }
  }

  UserData = new BehaviorSubject(null);
  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.UserData.next(decodedToken);
    console.log(this.UserData)
  }



  signup(formData: object): Observable<any> {
    return this._HttpClient.post(`${apiUrl}auth/register-customer`, formData)
  }

  signin(formData: object): Observable<any> {
    return this._HttpClient.post(`${apiUrl}auth/login`, formData)
  }

  signOut() {
    localStorage.clear();
    this.UserData.next(null);
    this._Router.navigate(['/mohamed/hompage'])

  }

}


