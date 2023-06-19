import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../API/config';
@Component({
  selector: 'app-edit-hell',
  templateUrl: './edit-hell.component.html',
  styleUrls: ['./edit-hell.component.css']
})
export class EditHellComponent {
  id: any;
  hell: any;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });
  gethell(id: string) {
    this.http.get(`${apiUrl}wedding-halls/show/${id}`).subscribe(
      (response: any) => {
        this.hell = this.formBuilder.group({
          name: response.data.name,
          style: response.data.style,
          location: response.data.location,
          cover_image: response.data.cover_image,
          threeD_module: response.data.threeD_module,
          video_upload: response.data.video_upload,
          open_day: response.data.open_day,
          close_day: response.data.close_day,
          price: response.data.price,
          images: response.data.images,
          total_space: response.data.total_space,
          chairs_no: response.data.chairs_no,
          tables_no: response.data.tables_no,
          description: response.data.description
        });
      },
      (error) => console.log(error)
    );
  }

  data = new FormData();
  onSubmit(formData1: any) {
    this.data.append('name', formData1.name);
    this.data.append('style', formData1.style);
    this.data.append('location', formData1.location);
    this.data.append('open_day', formData1.open_day);
    this.data.append('close_day', formData1.close_day);
    this.data.append('price', formData1.price);
    this.data.append('total_space', formData1.total_space);
    this.data.append('chairs_no', formData1.chairs_no);
    this.data.append('tables_no', formData1.tables_no);
    this.data.append('description', formData1.description);

    this.http.post(`${apiUrl}wedding-halls/update/${this.id}`, this.data, { headers: this.headers }).subscribe(
      (response) => {
        console.log(response);
        alert("edit successfully")
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gethell(this.id);
  }




  cover_image($event:any) {
    const file = $event.target.files[0];
    this.hell.append('cover_image', file);
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













