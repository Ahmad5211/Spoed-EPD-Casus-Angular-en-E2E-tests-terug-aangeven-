/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'spoed-epd-use-case-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.scss']
})
export class NieuwsComponent implements OnInit {

  
  userForm:FormGroup;
  listData: any;


  constructor(private fb:FormBuilder  ){

      this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      tapletten : ['', Validators.required],
      Beschrijving : ['', Validators.required]
      
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addItem( ){
    this.listData.push(this.userForm.value);
   
  }
 




  

  

}
