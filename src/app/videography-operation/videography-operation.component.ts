import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { WiddingService } from '../widding.service';
@Component({
  selector: 'app-videography-operation',
  templateUrl: './videography-operation.component.html',
  styleUrls: ['./videography-operation.component.css'],
})
export class VideographyOperationComponent {
  constructor(
    private _Router: Router,
    private _AuthService: AuthService,
    private _WiddingService: WiddingService
  ) {}
  ratings9 = [{ value: 1 }];
  stars9 = [1, 2, 3, 4, 5];
  ratings10 = [{ value: 1 }];
  stars10 = [1, 2, 3, 4, 5];
  ratings11 = [{ value: 1 }];
  stars11 = [1, 2, 3, 4, 5];
  changeRating9(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating10(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating11(rating: { value: any }, value: any) {
    rating.value = value;
  }
  allVideographer: any = [];
  ngOnInit(): void {
    this._WiddingService.getAllVideographer().subscribe({
      next: (response) => {
        this.allVideographer = response.data;
      },
    });
  }
}
