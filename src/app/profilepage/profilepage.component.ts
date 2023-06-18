import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  isLogin:boolean = false;
  userInfo:any = {};
  logOut(){

    this._AuthService.signOut();
    this._Router.navigate(['/mohamed/widding'])
  }

  ngOnInit():void{
    this._AuthService.UserData.subscribe({
      next:()=>{
        if(this._AuthService.UserData.getValue()!=null)
        {
          this.isLogin = true;
          this.userInfo= this._AuthService.UserData;
        }
        else
        {
          this.isLogin=false;
        }
      }
    })
  }
 
}
