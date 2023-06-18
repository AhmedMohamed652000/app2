import { Component } from '@angular/core';
import { WiddingService } from './../widding.service';
@Component({
  selector: 'app-session2',
  templateUrl: './session2.component.html',
  styleUrls: ['./session2.component.css']
})
export class Session2Component {
  constructor(private _WiddingService:WiddingService){}
  qunatity:string=''
  session:any[]=[];
  trendingMovies1:any[] =[];
  imgprefix:string = 'http://image.tmdb.org/t/p/w500'
  ngOnInit():void{
    this._WiddingService.getTrending1().subscribe({
      next:(response)=> this.trendingMovies1 = response.data,
       
       
    }
   )

  }










  // ratings3 = [    { value: 1 }  ];
  // stars3 = [1, 2, 3,4,5];
  // ratings4 = [    { value: 1 } ];
  // stars4 = [1, 2, 3,4,5];
  // ratings5 = [    { value: 1 } ];
  // stars5= [1, 2, 3,4,5];
  // changeRating3(rating: { value: any; }, value: any) {
  //   rating.value = value;
  // }
  // changeRating4(rating: { value: any; }, value: any) {
  //   rating.value = value;
  // }
  // changeRating5(rating: { value: any; }, value: any) {
  //   rating.value = value;
  // }
}
