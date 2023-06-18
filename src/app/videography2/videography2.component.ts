import { Component } from '@angular/core';

@Component({
  selector: 'app-videography2',
  templateUrl: './videography2.component.html',
  styleUrls: ['./videography2.component.css']
})
export class Videography2Component {
  ratings9 = [    { value: 1 }  ];
  stars9 = [1, 2, 3,4,5];
  ratings10 = [    { value: 1 } ];
  stars10 = [1, 2, 3,4,5];
  ratings11 = [    { value: 1 } ];
  stars11= [1, 2, 3,4,5];
  changeRating9(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating10(rating: { value: any; }, value: any) {
    rating.value = value;
  }
  changeRating11(rating: { value: any; }, value: any) {
    rating.value = value;
  }
}
