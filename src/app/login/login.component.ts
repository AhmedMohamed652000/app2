import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  errorMessage: string = '';


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null, [Validators.required]),

  })


  subitLoginForm(loginForm: FormGroup) {

    if (loginForm.valid) {

      this._AuthService.signin(loginForm.value).subscribe({
        next: (response) => {
          if (response.success === true) {
            localStorage.setItem('userToken', response.data.access_token);
            localStorage.setItem('userDate', JSON.stringify(response.data));
            this._AuthService.saveUserData();
            this._Router.navigate(['/mohamed/homepage']);
          }
          else {

            this.errorMessage = response.message;

          }
        }
      })
    }
  }

  ngOnInit(): void {

    let Token = localStorage.getItem('userToken')
    if (Token) {
      this._Router.navigate(['/mohamed/homepage'])
    }
  }



}
