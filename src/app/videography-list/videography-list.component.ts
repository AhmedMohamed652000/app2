import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WiddingService } from '../widding.service';
@Component({
  selector: 'app-videography-list',
  templateUrl: './videography-list.component.html',
  styleUrls: ['./videography-list.component.css'],
})
export class VideographyListComponent {
  video: any = {};
  videoId: string = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _WiddingService: WiddingService
  ) {}
  ngOnInit(): void {
    this.videoId = this._ActivatedRoute.snapshot.params['id'];
    this._WiddingService.getVideoDetail(this.videoId).subscribe({
      next: (respsonse) => {
        this.video = respsonse.data;
        console.log(this.video);
      },
    });
  }
}
