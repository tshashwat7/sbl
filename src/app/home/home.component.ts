import { Component, OnInit } from '@angular/core';
// import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slider = new Slider();
  title = "StemBridge Labs";
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
      
    constructor(private breakpointObserver: BreakpointObserver) {
      this.slider.config.loop = true;
      this.slider.config.showPreview = false;
    }
  
    ngOnInit() {
   
      const slideItems = [
        { src: 'assets/img/img/3.jpg'},        
        { src: 'assets/img/img/1.jpeg'},
        { src: 'assets/img/img/2.jpeg'},
        { src: 'assets/img/img/4.jpeg'},
        { src: 'assets/img/img/5.jpeg'},
        { src: 'assets/img/img/6.jpeg'},
      ];
   
      this.slider.items = slideItems;
    }
    newwindow(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdlUYDn-lcmoMyxzdWIbUy3qJ6vQTF-4KNZwZplb6CIgIXM_A/viewform?c=0&w=1")}
}
