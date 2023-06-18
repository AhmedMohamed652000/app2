import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WiddingService } from './../widding.service';
@Component({
  selector: 'app-sessionlist',
  templateUrl: './sessionlist.component.html',
  styleUrls: ['./sessionlist.component.css']
})
export class SessionlistComponent {

  session1: any;
  movieId:string =''; 
  imgprefix:string = 'http://image.tmdb.org/t/p/w500'
constructor(private _ActivatedRoute:ActivatedRoute , private _WiddingService:WiddingService){}
ngOnInit(): void{
  this.movieId =  this._ActivatedRoute.snapshot.params['id'];
  this._WiddingService.getMovieDetails2( this.movieId).subscribe({
    next:(respsonse)=> this.session1 =respsonse.data    
  }) 
}
}
