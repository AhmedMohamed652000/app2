import { Component } from '@angular/core';
import { WiddingService } from './../widding.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../API/config';

@Component({
  selector: 'app-wedding-operation',
  templateUrl: './wedding-operation.component.html',
  styleUrls: ['./wedding-operation.component.css'],
})
export class WeddingOperationComponent {
  constructor(private _WiddingService: WiddingService,private http: HttpClient) {}
  qunatity: string = 'm';
  movie: any[] = [];
  trendingMovies: any[] = [];
  items: any[] = [];

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });

  deletFun(Id: number) {
    this.http.delete(`${apiUrl}wedding-halls/delete/${Id}`,{headers:this.headers})
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

  ngOnInit(): void {
    this._WiddingService.getAllWedding().subscribe({
      next: (response) => (this.trendingMovies = response.data),
    });
  }
}
