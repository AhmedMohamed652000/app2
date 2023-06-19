import { Component } from '@angular/core';
import { WiddingService } from './../widding.service';
@Component({
  selector: 'app-session2',
  templateUrl: './session2.component.html',
  styleUrls: ['./session2.component.css'],
})
export class Session2Component {
  constructor(private _WiddingService: WiddingService) {}
  qunatity: string = '';
  session: any[] = [];
  trendingMovies1: any[] = [];
  imgprefix: string = 'http://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    this._WiddingService.getAllSessions().subscribe({
      next: (response) => (this.trendingMovies1 = response.data),
    });
  }
}
