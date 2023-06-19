import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrl } from './API/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken')) {
      this.saveUserData();
    }
  }

  UserData = new BehaviorSubject(null);
  saveUserData() {
    const userDataString = localStorage.getItem('userDate');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const birthYear = new Date(userData.dob).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    userData.age = age;
    this.UserData.next(userData);
  }

  signup(formData: object): Observable<any> {
    return this._HttpClient.post(`${apiUrl}auth/register-customer`, formData);
  }

  signin(formData: object): Observable<any> {
    return this._HttpClient.post(`${apiUrl}auth/login`, formData);
  }

  signupAdmin(formData: object): Observable<any> {
    return this._HttpClient.post(
      `${apiUrl}auth/register-business-owner`,
      formData
    );
  }
  signinAdmin(formData: object): Observable<any> {
    return this._HttpClient.post(`${apiUrl}auth-admin/login`, formData);
  }

  signOut() {
    localStorage.clear();
    this.UserData.next(null);
    this._Router.navigate(['/mohamed/hompage']);
  }
}
