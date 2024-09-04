import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  Name="Kumar Ojja";
  SubmitForm!: FormGroup;
  constructor( private formBuilder: FormBuilder){

  }
ngOnInit(){
  // this.SubmitForm = this.formBuilder.group({
  //   Name: [''],
 
  //   // Transactiondateedit: ['', Validators.required],

  // });
}
}
