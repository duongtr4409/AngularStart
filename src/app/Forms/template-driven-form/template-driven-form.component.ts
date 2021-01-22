import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  public email: string | undefined;
  public password: string | undefined;
  public address: string | undefined;
  public city: string | undefined;
  public state: string | undefined;
  public zip: string | undefined;
  public check: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void{
    console.log("Duowng <3 Tora");
    console.log("email: ", this.email);
    console.log("password: ", this.password);
    console.log("city: ", this.city);
    console.log("state: ", this.state);
    console.log("zip: ", this.zip);
    console.log("check: ", this.check);
  }
}
