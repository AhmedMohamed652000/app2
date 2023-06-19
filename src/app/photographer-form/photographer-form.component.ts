import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../API/config';

@Component({
  selector: 'app-photographer-form',
  templateUrl: './photographer-form.component.html',
  styleUrls: ['./photographer-form.component.css'],
})
export class PhotographerFormComponent {
  photographer = {
    name: '',
    price: '',
    coverImage: '',
    shooting: '',
    openDay: '',
    closeDay: '',
    images: ['', ''],
    location: '',
    description: '',
  };

  constructor(private http: HttpClient) {}
  onImageSelected(event: any, number: any) {
    this.photographer.images[number] = event.target.files[0];
  }
  onCoverImageSelected(event: any) {
    this.photographer.coverImage = event.target.files[0];
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.photographer.name);
    formData.append('price', this.photographer.price);
    formData.append('cover_image', this.photographer.coverImage);
    formData.append('shooting', this.photographer.shooting);
    formData.append('open_day', this.photographer.openDay);
    formData.append('close_day', this.photographer.closeDay);
    formData.append('images[0]', this.photographer.images[0]);
    formData.append('images[1]', this.photographer.images[1]);
    formData.append('location', this.photographer.location);
    formData.append('description', this.photographer.description);

    // return this._HttpClient.post(`${apiUrl}auth/login`, formData);
    console.log(formData);
    // this.http.post(`${apiUrl}photographer/store`, formData).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.error(error)
    // );
  }
}
