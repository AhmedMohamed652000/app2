import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { WiddingService } from '../widding.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(
    private _Router: Router,
    private _AuthService: AuthService,
    private _WiddingService: WiddingService
  ) {}
  isLogin: boolean = false;
  ratings = [{ value: 1 }];
  stars = [1, 2, 3, 4, 5];
  ratings1 = [{ value: 1 }];
  stars1 = [1, 2, 3, 4, 5];
  ratings2 = [{ value: 1 }];
  stars2 = [1, 2, 3, 4, 5];
  ratings3 = [{ value: 1 }];
  stars3 = [1, 2, 3, 4, 5];
  ratings4 = [{ value: 1 }];
  stars4 = [1, 2, 3, 4, 5];
  ratings5 = [{ value: 1 }];
  stars5 = [1, 2, 3, 4, 5];
  ratings6 = [{ value: 1 }];
  stars6 = [1, 2, 3, 4, 5];
  ratings7 = [{ value: 1 }];
  stars7 = [1, 2, 3, 4, 5];
  ratings8 = [{ value: 1 }];
  stars8 = [1, 2, 3, 4, 5];
  ratings9 = [{ value: 1 }];
  stars9 = [1, 2, 3, 4, 5];
  ratings10 = [{ value: 1 }];
  stars10 = [1, 2, 3, 4, 5];
  ratings11 = [{ value: 1 }];
  stars11 = [1, 2, 3, 4, 5];
  changeRating(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating1(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating2(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating3(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating4(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating5(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating6(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating7(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating8(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating9(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating10(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating11(rating: { value: any }, value: any) {
    rating.value = value;
  }

  allWedding: any = [];
  firstFourWedding: any[] = [];
  allSession: any = [];
  firstFourSession: any[] = [];
  allPhotographer: any = [];
  firstFourPhotographer: any[] = [];
  allVideographer: any = [];
  firstFourVideographer: any[] = [];
  ngOnInit(): void {
    this._AuthService.UserData.subscribe({
      next: () => {
        if (this._AuthService.UserData.getValue() != null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });

    this._WiddingService.getAllWedding().subscribe({
      next: (response) => {
        this.allWedding = response.data;
        this.firstFourWedding = this.allWedding.slice(0, 4);
      },
    });
    this._WiddingService.getAllSessions().subscribe({
      next: (response) => {
        this.allSession = response.data;
        this.firstFourSession = this.allSession.slice(0, 4);
      },
    });
    this._WiddingService.getAllPhotographer().subscribe({
      next: (response) => {
        this.allPhotographer = response.data;
        this.firstFourPhotographer = this.allPhotographer.slice(0, 4);
      },
    });
    this._WiddingService.getAllVideographer().subscribe({
      next: (response) => {
        this.allVideographer = response.data;
        this.firstFourVideographer = this.allVideographer.slice(0, 4);
      },
    });
  }
}
