import { Component } from '@angular/core';
import { WiddingService } from './../widding.service';
@Component({
  selector: 'app-session-opertion',
  templateUrl: './session-opertion.component.html',
  styleUrls: ['./session-opertion.component.css'],
})
export class SessionOpertionComponent {
  constructor(private _WiddingService: WiddingService) {}
  qunatity: string = '';
  session: any[] = [];
  trendingMovies1: any[] = [];
  ngOnInit(): void {
    this._WiddingService.getAllSessions().subscribe({
      next: (response) => (this.trendingMovies1 = response.data),
    });
  }
}
