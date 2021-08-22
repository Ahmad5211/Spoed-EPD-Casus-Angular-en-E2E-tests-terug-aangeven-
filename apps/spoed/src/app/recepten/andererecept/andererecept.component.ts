/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spoed-epd-use-case-andererecept',
  templateUrl: './andererecept.component.html',
  styleUrls: ['./andererecept.component.scss']
})
export class AnderereceptComponent {
  userForm : FormGroup;
  name: any;

  
  onsubmit(data: any){
    console.log(data);
  }

  constructor(private fb:FormBuilder  ){

    

  this.userForm = this.fb.group({
    'anders': new FormControl ('', Validators.required),
    'tabletten nummer' : new FormControl ('', Validators.required),
    'Beschrijving' : new FormControl ('')

    
  })   
 }

}
 

