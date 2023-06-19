import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../API/config';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent {
  id: any;
  session: any;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });

  getsession(id: string) {
    this.http.get(`${apiUrl}sessions/show/${id}`).subscribe(
      (response: any) => {
        this.session = this.formBuilder.group({
          name: response.data.name,
          location: response.data.location,
          cover_image: response.data.cover_image,
          open_day: response.data.open_day,
          close_day: response.data.close_day,
          price: response.data.price,
          description: response.data.description,
          shoots_no: response.data.shoots_no
        });
      },
      (error) => console.log(error)
    );
  }

  data = new FormData();
  onSubmit(formData1: any) {
    this.data.append('name', formData1.name);
    this.data.append('location', formData1.location);
    this.data.append('open_day', formData1.open_day);
    this.data.append('close_day', formData1.close_day);
    this.data.append('price', formData1.price);
    this.data.append('description', formData1.description);
    this.data.append('shoots_no', formData1.shoots_no);

    this.http.post(`${apiUrl}sessions/update/${this.id}`, this.data, { headers: this.headers }).subscribe(
      (response) => {
        console.log(response);
        alert("edit successfully")
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getsession(this.id);
  }





  cover_image($event:any) {
    const file = $event.target.files[0];
    this.data.append('cover_image', file);
  }

  VideoUpload($event:any) {
    const file = $event.target.files[0];
    this.data.append('video_upload', file);
  }
  ImagesUpload($event:any) {
    const file = $event.target.files;
    console.log(file)
    const fileArray:any = [];
    for (let i = 0; i < file.length; i++) {
      this.data.append(`images[${i}]`, file[i]);
    }
  }

}
