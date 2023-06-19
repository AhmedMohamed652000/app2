import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { WiddingService } from '../widding.service';
@Component({
  selector: 'app-photography-operation',
  templateUrl: './photography-operation.component.html',
  styleUrls: ['./photography-operation.component.css'],
})
export class PhotographyOperationComponent {
  ratings6 = [{ value: 1 }];
  stars6 = [1, 2, 3, 4, 5];
  ratings7 = [{ value: 1 }];
  stars7 = [1, 2, 3, 4, 5];
  ratings8 = [{ value: 1 }];
  stars8 = [1, 2, 3, 4, 5];
  changeRating6(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating7(rating: { value: any }, value: any) {
    rating.value = value;
  }
  changeRating8(rating: { value: any }, value: any) {
    rating.value = value;
  }
  constructor(
    private _Router: Router,
    private _AuthService: AuthService,
    private _WiddingService: WiddingService
  ) {}
  allPhotographer: any = [];
  ngOnInit(): void {
    this._WiddingService.getAllPhotographer().subscribe({
      next: (response) => {
        this.allPhotographer = response.data;
      },
    });
  }
}
