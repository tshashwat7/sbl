import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatMenuModule, MatCardModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { FbloginsComponent } from './fblogins/fblogins.component';
import { SliderModule } from 'ngx-slider';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  SocialLoginModule,  AuthServiceConfig,  GoogleLoginProvider,  FacebookLoginProvider,} from "angular5-social-login";
// import {NgxSocialLoginModule} from 'ngx-social-login';
import {MatDialogModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
// import {MatCardModule} from '@angular/material';
// import {MatButtonModule} from '@angular/material';
// import {MatDialogModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
 
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { CampComponent } from './camp/camp.component';
import { AtlComponent } from './atl/atl.component';
import { StudioComponent } from './studio/studio.component';
import { TeacherstrainingComponent } from './teacherstraining/teacherstraining.component';
import { SiaComponent } from './sia/sia.component';
import { IotComponent } from './iot/iot.component';
import { HackingComponent } from './hacking/hacking.component';
import { ContactComponent } from './contact/contact.component';
import {MatExpansionModule} from '@angular/material/expansion';


// import { FlipModule } from 'ngx-Flip';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1533056176802766")
        }
        // {
        //   id: GoogleLoginProvider.PROVIDER_ID,
        //   provider: new GoogleLoginProvid("Your-Google-Client-Id")
        // },
      ]);

  return config;
}
// googleMapsClient.geocode({
//   address: 'stembridge labs pvt ltd'
// }, function(err, response) {
//   if (!err) {
//     console.log(response.json.results);
//   }
// });
// var googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyBOK25k1lwPdXqybiqFWkFEPk3aimDeSCo'
// });

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FbloginsComponent,
    DialogComponent,
    AboutusComponent,
    FooterComponent,
    HomeComponent,
    WorkshopComponent,
    CampComponent,
    AtlComponent,
    StudioComponent,
    TeacherstrainingComponent,
    SiaComponent,
    IotComponent,
    HackingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOK25k1lwPdXqybiqFWkFEPk3aimDeSCo'
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule, 
    MatCardModule ,
    AppRoutingModule,
    FlexLayoutModule,
    SocialLoginModule,
    MatDialogModule,
    MatExpansionModule,
    SliderModule
    // FlipModule
  //   NgxSocialLoginModule.init(
  //     {
  //         facebook: {
  //             initOptions: {
  //                 appId: '1533056176802766'
  //             }
  //         }
  //     }
  // )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }