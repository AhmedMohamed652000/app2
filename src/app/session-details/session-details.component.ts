import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { apiUrl } from '../API/config';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent {
  myForm: any;
  file: any;
  session: any;


  cover_image($event:any) {
    const file = $event.target.files[0];
    this.sessionData.append('cover_image', file);
  }

  VideoUpload($event:any) {
    const file = $event.target.files[0];
    this.sessionData.append('video_upload', file);
  }
  ImagesUpload($event:any) {
    const file = $event.target.files;
    console.log(file)
    const fileArray:any = [];
    for (let i = 0; i < file.length; i++) {
      this.sessionData.append(`images[${i}]`, file[i]);
    }
  }


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.session = this.fb.group({
      name: new FormControl(null),
      style: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      cover_image: new FormControl(null, [Validators.required]),
      threeD_module: new FormControl(null, [Validators.required]),
      open_day: new FormControl(null, [Validators.required]),
      close_day: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      total_space: new FormControl(null, [Validators.required]),
      chairs_no: new FormControl(null, [Validators.required]),
      tables_no: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });

  sessionData = new FormData();
  onSubmit(formData1: any) {
    console.log(formData1)
    this.sessionData.append('name', formData1.name);
    this.sessionData.append('location', formData1.location);
    this.sessionData.append('open_day', formData1.open_day);
    this.sessionData.append('close_day', formData1.close_day);
    this.sessionData.append('price', formData1.price);
    this.sessionData.append('shoots_no', formData1.chairs_no);
    this.sessionData.append('description', formData1.description);

    // Example using Angular HttpClient:
    this.http.post(`${apiUrl}sessions/store`, this.sessionData, { headers: this.headers }).subscribe(
      response => {
        console.log('session created successfully', response);
        // Perform any other actions as needed
      },
      error => {
        console.error('Error creating session', error);
        // Handle the error as needed
      }
    );
  }
}
