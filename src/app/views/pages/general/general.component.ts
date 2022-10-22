import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  // data: any[] = [];

  formdata: FormGroup = this.fb.group({
    name: ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  // addItem() {
  //   if (this.formdata.valid) {
  //     this.data.push({name:this.formdata.get('name')?.value})
  //   }
  // }

}
