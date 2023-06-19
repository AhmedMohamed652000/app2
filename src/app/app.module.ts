import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PartyComponent } from './party/party.component';
import { WiddingComponent } from './widding/widding.component';
import { MohamedComponent } from './mohamed/mohamed.component';
import { ClientComponent } from './client/client.component';
import { AhmedComponent } from './ahmed/ahmed.component';
import { SessionComponent } from './session/session.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { VideographyComponent } from './videography/videography.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Videography2Component } from './videography2/videography2.component';
import { Photographer2Component } from './photographer2/photographer2.component';
import { FooterComponent } from './footer/footer.component';
import { Session2Component } from './session2/session2.component';
import { Widding2Component } from './widding2/widding2.component';
import { HttpClientModule } from '@angular/common/http';
import { WiddinglistComponent } from './widdinglist/widdinglist.component';
import { BusinesssComponent } from './businesss/businesss.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { Business1Component } from './business1/business1.component';
import { HellComponent } from './hell/hell.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionlistComponent } from './sessionlist/sessionlist.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PhotographerFormComponent } from './photographer-form/photographer-form.component';
import { VideographyFormComponent } from './videography-form/videography-form.component';
import { PhotographerListComponent } from './photographer-list/photographer-list.component';
import { VideographyListComponent } from './videography-list/videography-list.component';
import { SessionOpertionComponent } from './session-opertion/session-opertion.component';
import { WeddingOperationComponent } from './wedding-operation/wedding-operation.component';
import { PhotographyOperationComponent } from './photography-operation/photography-operation.component';
import { VideographyOperationComponent } from './videography-operation/videography-operation.component';

import { EditVideographyComponent } from './edit-videography/edit-videography.component';
import { EditHellComponent } from './edit-hell/edit-hell.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { EditPhotographerComponent } from './edit-photographer/edit-photographer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    WiddingComponent,
    MohamedComponent,
    ClientComponent,
    AhmedComponent,
    SessionComponent,
    PhotographerComponent,
    VideographyComponent,
    HomepageComponent,
    NavbarComponent,
    Videography2Component,
    Photographer2Component,
    FooterComponent,
    Session2Component,
    Widding2Component,
    WiddinglistComponent,
    BusinesssComponent,
    RegisterComponent,
    LoginComponent,
    Login2Component,
    Business1Component,
    HellComponent,
    SessionDetailsComponent,
    SessionlistComponent,
    ProfilepageComponent,
    PhotographerFormComponent,
    VideographyFormComponent,
    EditVideographyComponent,
    EditHellComponent,
    SessionOpertionComponent,
    WeddingOperationComponent,
    PhotographyOperationComponent,
    VideographyOperationComponent,
    EditVideographyComponent,
    EditHellComponent,
    EditSessionComponent,
    EditPhotographerComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
