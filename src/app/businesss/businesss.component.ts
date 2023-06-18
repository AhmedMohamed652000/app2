import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-businesss',
  templateUrl: './businesss.component.html',
  styleUrls: ['./businesss.component.css'],
})
export class BusinesssComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  errorMessage: string = '';
  isLogin: boolean = false;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    phone: new FormControl(null),
    dob: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null, [Validators.required]),
  });

  subitRegisterForm(registerForm: FormGroup) {
    if (registerForm.valid) {
      this._AuthService.signupAdmin(registerForm.value).subscribe({
        next: (response) => {
          if (response.success === true) {
            this._Router.navigate(['/mohamed/Login2']);
          } else {
            this.errorMessage = response.message;
          }
        },
      });
    }
  }
  ngOnInit(): void {}
}
