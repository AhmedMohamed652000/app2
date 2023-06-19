import { Component } from '@angular/core';
import { apiUrl } from '../API/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


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


  myForm: any;
  file: any;
  photographer: any;


  cover_image($event:any) {
    const file = $event.target.files[0];
    this.photographerData.append('cover_image', file);
  }

  VideoUpload($event:any) {
    const file = $event.target.files[0];
    this.photographerData.append('video_upload', file);
  }
  ImagesUpload($event:any) {
    const file = $event.target.files;
    console.log(file)
    const fileArray:any = [];
    for (let i = 0; i < file.length; i++) {
      this.photographerData.append(`images[${i}]`, file[i]);
    }
  }



  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.photographer = this.fb.group({
      name: new FormControl(null),
      location: new FormControl(null, [Validators.required]),
      cover_image: new FormControl(null, [Validators.required]),
      open_day: new FormControl(null, [Validators.required]),
      close_day: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });

  photographerData = new FormData();
  onSubmit(formData1: any) {
    console.log(formData1)
    this.photographerData.append('name', formData1.name);
    this.photographerData.append('location', formData1.location);
    this.photographerData.append('open_day', formData1.open_day);
    this.photographerData.append('close_day', formData1.close_day);
    this.photographerData.append('price', formData1.price);
    this.photographerData.append('description', formData1.description);

    // Example using Angular HttpClient:
    this.http.post(`${apiUrl}photographer/store`, this.photographerData, { headers: this.headers }).subscribe(
      response => {
        console.log('photographer created successfully', response);
        // Perform any other actions as needed
      },
      error => {
        console.error('Error creating photographer', error);
        // Handle the error as needed
      }
    );
  }
}
