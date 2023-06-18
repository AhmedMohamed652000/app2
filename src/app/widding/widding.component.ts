import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientComponent } from './../client/client.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-widding',
  templateUrl: './widding.component.html',
  styleUrls: ['./widding.component.css']
})
export class WiddingComponent implements OnInit {
constructor(private _Router:Router , private _AuthService:AuthService){}

  xxC()
  {
    this._Router.navigate(['/mohamed/client'])
  }
  
  xxmC(){
    this._Router.navigate(['/mohamed/Businesss'])
  }


 
  ngOnInit(): void {
   
     }

}
