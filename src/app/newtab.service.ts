import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewtabService {

  constructor() { }
  getNativeWindow() {
    return window;
}
assignActivity(type){
  this.getNativeWindow();
}
}
