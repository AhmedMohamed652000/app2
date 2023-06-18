import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  constructor(private _Router:Router , private _AuthService:AuthService){}

  ggo()
  {
    this._Router.navigate(['/mohamed/Photographer'])
  }

  ggqm(){
    this._Router.navigate(['/mohamed/register'])
  }

  
  ngOnInit(): void {
   
     }
}
