import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    
    this.title.setTitle('StemBridge Labs: Dynamic Learning with STEM Studio');    
        this.meta.updateTag({name:'keyword',content:'STEM Studio, STEMBridge Labs, STEM studio projects.'});
        this.meta.updateTag({name:'description',content:'STEM Studio is a dedicated channel to promote knowledge based learning environment in Science, Technology, Engineering, and Mathematics. We intend to provide in-depth knowledge of the subjects through real world problem.'});
  }

}
