
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Slider } from 'ngx-slider';
import{FooterComponent} from './footer/footer.component'
// import { Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import {  trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // animations: [

  //   trigger('goals', [
  //     transition('* => *', [

  //       query(':enter', style({ opacity: 0 }), {optional: true}),

  //       query(':enter', stagger('300ms', [
  //         animate('.6s ease-in', keyframes([
  //           style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  //           style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
  //           style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
  //         ]))]), {optional: true})
  //     ])
  //   ])

  // ]
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  hoverIndex=null;
  constructor(private breakpointObserver: BreakpointObserver) {
   
  }

  ngOnInit() {
 
  }
  enter(i) {
    // alert(i);
    let il = i;
    this.hoverIndex = true;
}

leave(i) {
    this.hoverIndex = null;
}
  }
