import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Business1Component } from './business1/business1.component';
import { BusinesssComponent } from './businesss/businesss.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { HellComponent } from './hell/hell.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

import { MohamedComponent } from './mohamed/mohamed.component';

import { PartyComponent } from './party/party.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { Photographer2Component } from './photographer2/photographer2.component';
import { RegisterComponent } from './register/register.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionComponent } from './session/session.component';
import { Session2Component } from './session2/session2.component';
import { SessionlistComponent } from './sessionlist/sessionlist.component';
import { VideographyComponent } from './videography/videography.component';
import { Videography2Component } from './videography2/videography2.component';
import { WiddingComponent } from './widding/widding.component';
import { Widding2Component } from './widding2/widding2.component';
import { WiddinglistComponent } from './widdinglist/widdinglist.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PhotographerFormComponent } from './photographer-form/photographer-form.component';
import { VideographyFormComponent } from './videography-form/videography-form.component';
import { EditVideographyComponent } from './edit-videography/edit-videography.component';
import { EditHellComponent } from './edit-hell/edit-hell.component';
import { VideographyListComponent } from './videography-list/videography-list.component';
import { PhotographerListComponent } from './photographer-list/photographer-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mohamed/party',
    pathMatch: 'full',
  },
  {
    path: 'mohamed',
    component: MohamedComponent,
    children: [
      { path: 'party', component: PartyComponent },
      { path: 'widding', component: WiddingComponent },
      { path: 'client', component: ClientComponent },
      { path: 'session', component: SessionComponent },
      { path: 'Photographer', component: PhotographerComponent },
      { path: 'PhotographerForm', component: PhotographerFormComponent },
      { path: 'PhotographerList/:id', component: PhotographerListComponent },
      { path: 'Videography', component: VideographyComponent },
      { path: 'VideographyForm', component: VideographyFormComponent },
      { path: 'videography2', component: Videography2Component },
      { path: 'videographyList/:id', component: VideographyListComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'Photographer2', component: Photographer2Component },
      { path: 'session2', component: Session2Component },
      { path: 'widding2', component: Widding2Component },
      { path: 'widdinglist/:id', component: WiddinglistComponent },
      { path: 'Businesss', component: BusinesssComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Login2', component: Login2Component },
      { path: 'Business1', component: Business1Component },
      { path: 'hell', component: HellComponent },
      { path: 'SessionDetails', component: SessionDetailsComponent },
      { path: 'videography/:id/edit', component: EditVideographyComponent },
      { path: 'hell/:id/edit', component: EditHellComponent },
      { path: 'Sessionlist/:id', component: SessionlistComponent },
      { path: 'Profilepage', component: ProfilepageComponent },
    ],
  },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
