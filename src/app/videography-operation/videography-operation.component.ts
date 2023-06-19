import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { WiddingService } from '../widding.service';
import { apiUrl } from '../API/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-videography-operation',
  templateUrl: './videography-operation.component.html',
  styleUrls: ['./videography-operation.component.css'],
})
export class VideographyOperationComponent {
  constructor(
    private _Router: Router,
    private _AuthService: AuthService,
    private _WiddingService: WiddingService,
    private http:HttpClient
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
  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });

  deletFun(Id: number) {
    this.http.delete(`${apiUrl}videographer/delete/${Id}`, { headers: this.headers })
      .subscribe(
        () => {
          alert("delete successflly")
          window.location.reload();
        },
        error => {
          alert('Error deleting');
        }
      );
  }
}
