import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../API/config';
@Component({
  selector: 'app-edit-videography',
  templateUrl: './edit-videography.component.html',
  styleUrls: ['./edit-videography.component.css']
})
export class EditVideographyComponent {
  id: any;
  videography: any;


  VideoUpload($event:any) {
    const file = $event.target.files[0];
    this.data.append('video_upload', file);
  }


  cover_image($event:any) {
    const file = $event.target.files[0];
    this.data.append('cover_image', file);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  });


  getVideography(id: string) {
    this.http.get(`${apiUrl}videographer/show/${id}`).subscribe(
      (response: any) => {
        this.videography = this.formBuilder.group({
          name: response.data.name,
          location: response.data.location,
          cover_image: '',
          images: '',
          price: response.data.price,
          open_day: response.data.open_day,
          close_day: response.data.close_day,
          description: response.data.description
        });
      },
      (error) => console.log(error)
    );
  }

   data = new FormData();
  onSubmit(formData:any) {
    this.data.append('name', formData.name);
    this.data.append('location', formData.location);
    this.data.append('price', formData.price);
    this.data.append('open_day', formData.open_day);
    this.data.append('close_day', formData.close_day);
    this.data.append('description', formData.description);

    this.http.post(`${apiUrl}videographer/update/${this.id}`, this.data,{headers:this.headers}).subscribe(
      (response) => {
        console.log(response);
        alert("edit successfully")
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getVideography(this.id);
  }

}
