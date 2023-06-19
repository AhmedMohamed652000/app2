import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../API/config';

@Component({
  selector: 'app-hell',
  templateUrl: './hell.component.html',
  styleUrls: ['./hell.component.css'],
})
export class HellComponent {
  myForm: any;
  file: any;
  hell: any;


  cover_image($event:any) {
    const file = $event.target.files[0];
    this.hellData.append('cover_image', file);
  }

  VideoUpload($event:any) {
    const file = $event.target.files[0];
    this.hellData.append('video_upload', file);
  }
  ImagesUpload($event:any) {
    const file = $event.target.files;
    console.log(file)
    const fileArray:any = [];
    for (let i = 0; i < file.length; i++) {
      this.hellData.append(`images[${i}]`, file[i]);
    }
  }


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.hell = this.fb.group({
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

  hellData = new FormData();
  onSubmit(formData1: any) {
    console.log(formData1)
    this.hellData.append('name', formData1.name);
    this.hellData.append('style', formData1.style);
    this.hellData.append('location', formData1.location);
    this.hellData.append('open_day', formData1.open_day);
    this.hellData.append('close_day', formData1.close_day);
    this.hellData.append('price', formData1.price);
    this.hellData.append('total_space', formData1.total_space);
    this.hellData.append('chairs_no', formData1.chairs_no);
    this.hellData.append('tables_no', formData1.tables_no);
    this.hellData.append('description', formData1.description);

    // Example using Angular HttpClient:
    this.http.post(`${apiUrl}wedding-halls/store`, this.hellData, { headers: this.headers }).subscribe(
      response => {
        console.log('Hell created successfully', response);
        // Perform any other actions as needed
      },
      error => {
        console.error('Error creating hell', error);
        // Handle the error as needed
      }
    );
  }
}
