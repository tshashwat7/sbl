import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor(private title: Title, private meta: Meta) { }
image1;image2;
  ngOnInit() {
    this.title.setTitle('StemBridge Labs: About US to StemBridge Labs');    
        this.meta.updateTag({name:'keyword',content:'StemBridge Labs Company, StemBridge Lab education provider.'});
        this.meta.updateTag({name:'description',content:'StemBridge Labs is a smart learning solution provider that organizes various STEM based educational programs for teachers and students student across schools and colleges in India.'});
  }
  scrolltop(){
    window.scrollTo(0, 0);
  }
}
