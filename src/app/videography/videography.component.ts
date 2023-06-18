import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-videography',
  templateUrl: './videography.component.html',
  styleUrls: ['./videography.component.css']
})
export class VideographyComponent {
  constructor(private _Router:Router , private _AuthService:AuthService){}

  ggz()
  {
    this._Router.navigate(['/mohamed/register'])
  }


  
  ngOnInit(): void {
    
     }

}
