/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';



@Component({
  selector: 'spoed-epd-use-case-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.scss']
})
export class OverComponent {

  userForm : FormGroup;
  name: any;

  onsubmit(data: any){
    console.log(data);
  }

  constructor(private fb:FormBuilder  ){

    

  this.userForm = this.fb.group({
    'name': new FormControl ('maag', Validators.required),
    'tapletten' : new FormControl ('12'),
    'Beschrijving' : new FormControl ('2 tabletten per dag')

    
  })

  
 


  }

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
