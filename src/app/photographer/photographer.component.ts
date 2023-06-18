import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent {
  constructor(private _Router:Router , private _AuthService:AuthService){}

  ggk()
  {
    this._Router.navigate(['/mohamed/Videography'])
  }

  ggkl(){
    this._Router.navigate(['/mohamed/register'])
  }



  ngOnInit(): void {
  
     }


}
