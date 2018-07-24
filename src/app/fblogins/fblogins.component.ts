import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  AuthService,  FacebookLoginProvider,  GoogleLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'app-fblogins',
  templateUrl: './fblogins.component.html',
  styleUrls: ['./fblogins.component.css']
})
export class FbloginsComponent implements OnInit {
val = '';
  constructor(private router: Router , private socialAuthService: AuthService) { }

  ngOnInit() {
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    // else if(socialPlatform == "google"){
    //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        
        console.log(socialPlatform+" sign in data : " , userData.name);
        // Now sign-in with userData
        this.val =  userData.name;
            
      }
    );
  }


}
