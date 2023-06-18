import { Component } from '@angular/core';
import { WiddingService } from './../widding.service';

@Component({
  selector: 'app-widding2',
  templateUrl: './widding2.component.html',
  styleUrls: ['./widding2.component.css']
})
export class Widding2Component {
  constructor(private _WiddingService:WiddingService){}
  qunatity:string='m'
  movie:any[]=[];
  trendingMovies:any[] =[];
  items:any[]=[];
  imgprefix:string = 'http://image.tmdb.org/t/p/w500'
  ngOnInit():void{
    this._WiddingService.getTrending().subscribe({
      next:(response)=> this.trendingMovies = response.data,  
    })
  //   this.getItems();
  // }
  // getItems() {
  //   this._WiddingService.getItems().subscribe((data) => {
  //     this.items = data;
  //   });

    
  }
 

}