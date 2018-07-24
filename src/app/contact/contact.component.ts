import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat: number = 26.484274;
  lng: number = 80.292614;
  labels = 'StemBridge Labs Pvt Ltd'
  registerForm: FormGroup;
  submitted = false;
  constructor(private title: Title, private meta: Meta , private formBuilder: FormBuilder) { }
  
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  ngOnInit() {
    this.title.setTitle('Contact Address StemBridge Labs, Program Bases Learning, Analytic Software');    
        this.meta.updateTag({name:'keyword',content:'StemBridge Labs Contact, StemBridge office, Email to StemBridge Labs.'});
        this.meta.updateTag({name:'description',content:'Fill the contact form to get in touch with our knowledge experts and enquire about our offerings or setting up a STEM lab in your school premises. We organize Atal tinkering lab, summer/winter training camp and offer teacher training program.'});

    this.registerForm = this.formBuilder.group({
      nam: ['', Validators.required],
      mob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required]
  });

  }
  get f() { 
    // console.log(this.registerForm , "this.registerForm")/;
  return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.valid){
    // alert("true");
      
      return true;

    }
    else {
    // alert("false");
      
      return false;
    }
  }


  }



