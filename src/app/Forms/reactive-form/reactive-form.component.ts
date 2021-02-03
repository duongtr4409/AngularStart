import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerHttpService } from 'src/app/Services/server-http.service';

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

  constructor(private serverHttpService: ServerHttpService) { }

  ngOnInit(): void {
  }

  public onSubmit(event: Event):void {
    console.log("Duowng <3 Tora");
    console.log("event: ", event);
    console.log("firstName: ", this.profileForm.controls.firstName);
    console.log("firstName: ", this.profileForm.controls.lastName);
    alert("Name: " + this.profileForm.controls.firstName.value + this.profileForm.controls.lastName.value);
    
    var newData = {title: "", author: ""};
    newData.title = this.profileForm.controls.firstName.value;
    newData.author = this.profileForm.controls.lastName.value;
    this.serverHttpService.addPosts(newData).subscribe((
      data => {
        console.log("data: ", data);
      }
    ));
  }

}
