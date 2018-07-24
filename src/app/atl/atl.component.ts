import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-atl',
  templateUrl: './atl.component.html',
  styleUrls: ['./atl.component.scss']
})
export class AtlComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('StemBridge Labs: Authorized partner to set up Atal Tinkering Lab');    
        this.meta.updateTag({name:'keyword',content:'Atal Tinkering Labs, Atal Innovation Mission.'});
        this.meta.updateTag({name:'description',content:'Atal Tinkering Labs: A part of Atal Innovation Mission, the labs promote practical learning and help with skill enhancement. The labs help us engage students from class 6 to class 12 through design & computational thinking, artificial Intelligence and adaptive learning.'});
 
  }
  newwindow(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdlUYDn-lcmoMyxzdWIbUy3qJ6vQTF-4KNZwZplb6CIgIXM_A/viewform?c=0&w=1")}

}
