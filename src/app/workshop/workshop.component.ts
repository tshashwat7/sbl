import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { Http, Response, Headers } from '@angular/http'/;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  showDialog;
  registerForm: FormGroup;
  submitted = false;
  constructor(private http: Http,  private formBuilder: FormBuilder , private title: Title, private meta: Meta) { }
  // confirmationString:string = "New product has been added";
  isAdded: boolean = false;
  productObj:object = {};
  ngOnInit() {
    this.title.setTitle('StemBridge Labs: Project Based Learning for STEM');    
        this.meta.updateTag({name:'keyword',content:'Project based learning program, StemBridge Learning program.'});
        this.meta.updateTag({name:'description',content:'We deliver Project Based Learning programs to help students gain knowledge and skills in STEM in an environment that nurtures critical thinking through real-world applications of the learnt practices.'});

    this.registerForm = this.formBuilder.group({
      nam: ['', Validators.required],
      mob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required]
  });
  
  }
scrolltop(){
  window.scrollTo(0, 0);
}
// addNewProduct = function(product) {
//   this.productObj = {
//     "name": product.name,
//     "color": product.color
//   }
//   this.http.post("http://stembridgelabs.com/mails.json", this.productObj).subscribe((res:Response) => {
//     this.isAdded = true;
//   })
// }
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
