import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  errorMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null, [Validators.required]),
  });

  subitLoginForm(loginForm: FormGroup) {
    if (loginForm.valid) {
      this._AuthService.signinAdmin(loginForm.value).subscribe({
        next: (response) => {
          if (response.success === true) {
            localStorage.setItem('userToken', response.data.access_token);
            localStorage.setItem('userDate', JSON.stringify(response.data));
            this._AuthService.saveUserData();
            this._Router.navigate(['/mohamed/Business1']);
          } else {
            this.errorMessage = response.message;
          }
        },
      });
    }
  }

  ngOnInit(): void {
    let Token = localStorage.getItem('userToken');
    if (Token) {
      this._Router.navigate(['/mohamed/homepage']);
    }
  }
}
