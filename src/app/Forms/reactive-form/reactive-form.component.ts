import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(event: Event):void {
    console.log("Duowng <3 Tora");
    console.log("event: ", event);
    console.log("firstName: ", this.profileForm.controls.firstName);
    console.log("firstName: ", this.profileForm.controls.lastName);
    alert("Name: " + this.profileForm.controls.firstName.value + this.profileForm.controls.lastName.value);
  }

}
