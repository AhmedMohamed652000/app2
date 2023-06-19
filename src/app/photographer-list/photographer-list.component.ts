import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { WiddingService } from '../widding.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photographer-list',
  templateUrl: './photographer-list.component.html',
  styleUrls: ['./photographer-list.component.css'],
})
export class PhotographerListComponent {
  photo: any = {};
  photoId: string = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _WiddingService: WiddingService
  ) {}
  ngOnInit(): void {
    this.photoId = this._ActivatedRoute.snapshot.params['id'];
    this._WiddingService.getPhotoDetail(this.photoId).subscribe({
      next: (respsonse) => {
        this.photo = respsonse.data;
      },
    });
  }
}
