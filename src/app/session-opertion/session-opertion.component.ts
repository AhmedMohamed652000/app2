import { Component } from '@angular/core';
import { WiddingService } from './../widding.service';
import { apiUrl } from '../API/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-session-opertion',
  templateUrl: './session-opertion.component.html',
  styleUrls: ['./session-opertion.component.css'],
})
export class SessionOpertionComponent {
  constructor(private _WiddingService: WiddingService, private http: HttpClient) { }
  qunatity: string = '';
  session: any[] = [];
  trendingMovies1: any[] = [];
  ngOnInit(): void {
    this._WiddingService.getAllSessions().subscribe({
      next: (response) => (this.trendingMovies1 = response.data),
    });
  }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });

  deletFun(Id: number) {
    this.http.delete(`${apiUrl}sessions/delete/${Id}`, { headers: this.headers })
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
