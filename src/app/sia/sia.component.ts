import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sia',
  templateUrl: './sia.component.html',
  styleUrls: ['./sia.component.scss']
})
export class SiaComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('StemBridge Labs: Manage daily school operations with SIA');    
        this.meta.updateTag({name:'keyword',content:'Analytic software in school, StemBridge Analytic Software.'});
        this.meta.updateTag({name:'description',content:'Keep a track on school operations, academic and financial performance, and monitor staff through School in Analytic software (SIA). The school management software SIA is a handy tool that facilitates decision making.'});
  }
  scrolltop(){
    window.scrollTo(0, 0);
  }
  
}
