import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyNavComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { CampComponent } from './camp/camp.component';
import { AtlComponent } from './atl/atl.component';
import { StudioComponent } from './studio/studio.component';
import { TeacherstrainingComponent } from './teacherstraining/teacherstraining.component';
import { SiaComponent } from './sia/sia.component';
import { IotComponent } from './iot/iot.component';
import { HackingComponent } from './hacking/hacking.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
    { path: 'About-us', component: AboutusComponent },
    { path: 'project-based-learning', component: WorkshopComponent },
    { path: 'winter-summer-camp', component: CampComponent },
    { path: 'atal-tinkering-lab', component: AtlComponent },
    { path: 'stem-studio', component: StudioComponent },
    { path: 'teacher-training-program', component: TeacherstrainingComponent },
    { path: 'school-in-analytics', component: SiaComponent },
    { path: 'internet-of-things', component: IotComponent },
    { path: 'ethical-hacking', component: HackingComponent },
    { path: 'contact-us', component: ContactComponent }
     
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}