import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-businesss',
  templateUrl: './businesss.component.html',
  styleUrls: ['./businesss.component.css']
})
export class BusinesssComponent implements OnInit {
  constructor(private _AuthService:AuthService  , private _Router:Router){ }
  //   private _Router:Router){ }

  //   errorMessage:string = '';
  //   isLoading:boolean = false;
  // registerForm:FormGroup =new FormGroup({
  //   first_name:new FormControl(null ,[Validators.minLength(3) , Validators.maxLength(10) , Validators.required ]),
  //   last_name:new FormControl(null ,[Validators.minLength(3) , Validators.maxLength(10) , Validators.required ]),
  //   email:new FormControl(null ,[Validators.email, Validators.required ]),
  //   password:new FormControl(null ,[Validators.pattern('^[A-Z][a-z]{3,8}'), Validators.required ]),


  // })
  // submitRegisterForm(registerForm:FormGroup)
  //  {
  //  this.isLoading =true;
  //   if(registerForm.valid)
  //   {
  //     this._AuthService.signup(registerForm.value).subscribe({
  //       next:(response)=> {
  //         if(response.message === 'succes')
  //         {
  //           this.isLoading = false;
  //           //  this._Router.navigate(['/mohamed/Login']);

  //         }
  //         else{
  //           this.errorMessage = response.message ;

  //           this.isLoading = false;
  //           this._Router.navigate(['mohamed/Login'])
  //         }
  //       }
  //     })
  //   }
  // }

  errorMessage: string = '';
  isLogin: boolean = false;

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null),
    last_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    age: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null, [Validators.required]),

  })

  subitRegisterForm(registerForm: FormGroup) {

    if (registerForm.valid) {

      this._AuthService.signup(registerForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {

            this._Router.navigate(['/mohamed/Login'])
          }
          else {

            this.errorMessage = response.message;

          }
        }
      })
    }
  }



  ngOnInit(): void {

  }
}
