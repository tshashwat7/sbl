import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-teacherstraining',
  templateUrl: './teacherstraining.component.html',
  styleUrls: ['./teacherstraining.component.scss']
})
export class TeacherstrainingComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('StemBridge Labs: Teachers Training Program');    
        this.meta.updateTag({name:'keyword',content:'StemBridge Labs Company, Teacher training program, StemBridge Teacher Training.'});
        this.meta.updateTag({name:'description',content:'StemBridge Labs offers exclusive training program for teacher to enhance their skills in technology, communication and information.'});
  }
  scrolltop(){
    window.scrollTo(0, 0);
  }
}
