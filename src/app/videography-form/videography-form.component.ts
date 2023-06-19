import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { apiUrl } from '../API/config';

@Component({
  selector: 'app-videography-form',
  templateUrl: './videography-form.component.html',
  styleUrls: ['./videography-form.component.css']
})
export class VideographyFormComponent {
  myForm: any;
  file: any;
  videography: any;


  cover_image($event:any) {
    const file = $event.target.files[0];
    this.videographyData.append('cover_image', file);
  }

  VideoUpload($event:any) {
    const file = $event.target.files[0];
    this.videographyData.append('video_upload', file);
  }
  VidoesUpload($event:any) {
    const file = $event.target.files;
    console.log(file)
    for (let i = 0; i < file.length; i++) {
      this.videographyData.append(`videos[${i}]`, file[i]);
    }
  }


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.videography = this.fb.group({
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

  videographyData = new FormData();
  onSubmit(formData1: any) {
    console.log(formData1)
    this.videographyData.append('name', formData1.name);
    this.videographyData.append('location', formData1.location);
    this.videographyData.append('open_day', formData1.open_day);
    this.videographyData.append('close_day', formData1.close_day);
    this.videographyData.append('price', formData1.price);
    this.videographyData.append('description', formData1.description);

    // Example using Angular HttpClient:
    this.http.post(`${apiUrl}videographer/store`, this.videographyData, { headers: this.headers }).subscribe(
      response => {
        console.log('videography created successfully', response);
        // Perform any other actions as needed
      },
      error => {
        console.error('Error creating videography', error);
        // Handle the error as needed
      }
    );
  }

}
