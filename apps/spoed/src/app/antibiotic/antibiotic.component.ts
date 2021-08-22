/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'spoed-epd-use-case-antibiotic',
  templateUrl: './antibiotic.component.html',
  styleUrls: ['./antibiotic.component.scss']
})
export class AntibioticComponent{
  userForm : FormGroup;
  name: any;

  
  onsubmit(data: any){
    console.log(data);
  }

  constructor(private fb:FormBuilder  ){

    

  this.userForm = this.fb.group({
    'antibiotic': new FormControl ('antibiotic'),
    'tabletten nummer' : new FormControl ('12'),
    'Beschrijving' : new FormControl ('1 tablet per dag')

    
  })   
 }

}
 




  

  

