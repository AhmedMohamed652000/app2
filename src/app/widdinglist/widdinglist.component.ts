import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WiddingService } from './../widding.service';
@Component({
  selector: 'app-widdinglist',
  templateUrl: './widdinglist.component.html',
  styleUrls: ['./widdinglist.component.css']
})
export class WiddinglistComponent {
  wedding: any;
  movieId:string =''; 
  imgprefix:string = 'http://image.tmdb.org/t/p/w500'
constructor(private _ActivatedRoute:ActivatedRoute , private _WiddingService:WiddingService){}
ngOnInit(): void{
  this.movieId =  this._ActivatedRoute.snapshot.params['id'];
  this._WiddingService.getMovieDetails( this.movieId).subscribe({
    next:(respsonse)=> this.wedding =respsonse.data    
  }) 
}
}
