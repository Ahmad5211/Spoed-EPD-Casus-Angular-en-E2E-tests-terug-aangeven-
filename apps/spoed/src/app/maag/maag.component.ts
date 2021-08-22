/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'spoed-epd-use-case-maag',
  templateUrl: './maag.component.html',
  styleUrls: ['./maag.component.scss']
})
export class MaagComponent  {
  userForm: FormGroup;
 name:any; 

 onsubmit(data: any){
  console.log(data);
}
  


  constructor(private fb:FormBuilder  ){

    

  this.userForm = this.fb.group({
    'name': new FormControl ('maag'),
    'tabletten nummer' : new FormControl ('16'),
    'Beschrijving' : new FormControl ('2 tabletten per dag')

    
  })

 


  }
  
 
}



