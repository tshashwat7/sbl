import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nam: ['', Validators.required],
      mob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required]
  });
  }
  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  get f() { 
    // console.log(this.registerForm , "this.registerForm")/;
  return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.valid){
    // alert("true");s
      
      return true;

    }
    else {
    // alert("false")/;
      
      return false;
    }
  }

}
