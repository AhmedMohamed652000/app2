import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app2';
  showNavbar:boolean=true;
  constructor(private router:Router){
    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url==='/mohamed/party'){
            this.showNavbar=false
          }

          else{
            this.showNavbar= true
          }

          if(val.url==='/mohamed/client'){
            this.showNavbar=false
          }

           if(val.url=='/mohamed/session'){
            this.showNavbar=false
          }

           if(val.url=='/mohamed/Photographer'){
            this.showNavbar=false
          }

           if(val.url=='/mohamed/Videography'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/Businesss'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/register'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/Login'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/Login2'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/Business1'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/hell'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/SessionDetails'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/widding'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/PhotographerForm'){
            this.showNavbar=false
          }
          if(val.url=='/mohamed/VideographyForm'){
            this.showNavbar=false
          }
          if(val.url.includes('edit')){
            this.showNavbar=false
          }




        }
      }
    )
  }






}

