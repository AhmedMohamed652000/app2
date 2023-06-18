import { Component } from '@angular/core';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private _Router:Router, private _AuthService:AuthService){}
  isLogin:boolean = false;

  ggox()
  {
    this._Router.navigate(['/mohamed/videography2'])
  
  }
  ggoox()
  {
    this._Router.navigate(['/mohamed/Photographer2'])
  
  }
  ggooox()
  {
    this._Router.navigate(['/mohamed/session2'])
  
  }
  ggoooox()
  {
    this._Router.navigate(['/mohamed/widding2'])
  
  }
 
  ratings = [    { value: 1 }  ];
  stars = [1, 2, 3,4,5];
  ratings1 = [    { value: 1 } ];
  stars1 = [1, 2, 3,4,5];
  ratings2 = [    { value: 1 } ];
  stars2= [1, 2, 3,4,5];
  ratings3 = [    { value: 1 } ];
  stars3= [1, 2, 3,4,5];
  ratings4 = [    { value: 1 } ];
  stars4= [1, 2, 3,4,5];
  ratings5 = [    { value: 1 } ];
  stars5= [1, 2, 3,4,5];
  ratings6 = [    { value: 1 } ];
  stars6= [1, 2, 3,4,5];
  ratings7 = [    { value: 1 } ];
  stars7= [1, 2, 3,4,5];
  ratings8 = [    { value: 1 } ];
  stars8= [1, 2, 3,4,5];
  ratings9 = [    { value: 1 } ];
  stars9= [1, 2, 3,4,5];
  ratings10 = [    { value: 1 } ];
  stars10= [1, 2, 3,4,5];
  ratings11 = [    { value: 1 } ];
  stars11= [1, 2, 3,4,5];
  changeRating(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating1(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating2(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating3(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating4(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating5(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating6(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating7(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating8(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating9(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating10(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating11(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  
  ggmnx(){
    // this._Router.navigate(['/mohamed/'])
  }


  
  
  
// dellet

ngOnInit():void{
  this._AuthService.UserData.subscribe({
    next:()=>{
      if(this._AuthService.UserData.getValue()!=null)
      {
        this.isLogin = true;
      }
      else
      {
        this.isLogin=false;
      }
    }
  })
}
    


}









  ///stars

  // stars: number[] = [1, 2, 3, 4, 5];
  // selectedValue: number = 0;
  // isMouseover = true;
  
  // countStar(star: number) {
  //   this.isMouseover = false;
  //   this.selectedValue = star;
  // }
  
  //  addClass(star: number) {
  //   if (this.isMouseover) {
  //     this.selectedValue = star;
  //   }
  //  }
  
  //  removeClass() {
  //    if (this.isMouseover) {
  //       this.selectedValue = 0;
  //    }
  //  };







