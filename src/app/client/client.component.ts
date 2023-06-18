import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
  
})
export class ClientComponent {
  constructor(private _Router:Router , private _AuthService:AuthService){}

  ggt()
  {
    this._Router.navigate(['/mohamed/session'])
  }
  ggpp()
  {
    this._Router.navigate(['/mohamed/register'])
  }

 
  
  ngOnInit(): void {
   
     }
}


