import { Component } from '@angular/core';
import { WiddingService } from './../widding.service';
@Component({
  selector: 'app-wedding-operation',
  templateUrl: './wedding-operation.component.html',
  styleUrls: ['./wedding-operation.component.css'],
})
export class WeddingOperationComponent {
  constructor(private _WiddingService: WiddingService) {}
  qunatity: string = 'm';
  movie: any[] = [];
  trendingMovies: any[] = [];
  items: any[] = [];
  ngOnInit(): void {
    this._WiddingService.getAllWedding().subscribe({
      next: (response) => (this.trendingMovies = response.data),
    });
  }
}
