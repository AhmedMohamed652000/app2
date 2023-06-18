import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  // constructor(private _AuthService:AuthService ,
  //   private _Router:Router){ }
  
//   errorMessage:string = '';
//   isLoading:boolean = false;
// loginForm:FormGroup =new FormGroup({
  // email:new FormControl(null ,[Validators.email, Validators.required ]),
  // password:new FormControl(null ,[Validators.pattern('^[A-Z][a-z]{3,8}'), Validators.required ]),
//   email:new FormControl(null),
//   password:new FormControl(null),
  
// })
// submitLoginForm(loginForm:FormGroup)
//  {
//  this.isLoading =true;
 
//   if(loginForm.valid)
//   {
//     this._AuthService.signin(loginForm.value).subscribe({
//       next:(response)=> {
       
//         if(response.success === 'true')
//         {
//           this.isLoading = false;
          
//           // this._Router.navigate(['/mohamed/homepage'])
//         } 
//         else{
//           this.errorMessage = response.message ;
//           this.isLoading = false;
//           this._Router.navigate(['/mohamed/client'])
//         }
//       }
//     })
//   }
 
// }
}
