import { Component ,OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { WiddingComponent } from './../widding/widding.component';
@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
constructor(private _Router:Router){}
  
  goTo()
  {
    this._Router.navigate(['/mohamed/widding'])
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._Router.navigate(['/mohamed/widding'])
    }, 2000);
  }

  
}
