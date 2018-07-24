import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('StemBridge Labs: Winter & Summer Camp Training Program');    
  this.meta.updateTag({name:'keyword',content:'StemBridge Labs, StemBridge Winter & Summer Camp, Winter/Summer training program.'});
  this.meta.updateTag({name:'description',content:'Winter & summer camps are the best training programs for kids between 6 and 12 years. The training camps promote innovative thinking through project based learning.'});
  }
  scrolltop(){
    window.scrollTo(0, 0);
  }
  
}
