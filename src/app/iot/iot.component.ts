import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('StemBridge Labs: Hands-on experience in the Internet of Things');    
        this.meta.updateTag({name:'keyword',content:'Internet of things, StemBridge Internet of things.'});
        this.meta.updateTag({name:'description',content:'Internet of Things: StemBridge Labs organize practical learning centers or labs for students where they can acquire skills in the IoT.'});
  
  }
  scrolltop(){
    window.scrollTo(0, 0);
  }
}
