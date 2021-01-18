import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private name: any;
  private age: any;
  private listFrameWork: any;
  private style: any;

  public setName(name: any): void{
    this.name = name
  }

  public getName(): any{
    return this.name;  
  }

  public setAge(age: any): void{
    this.age = age;
  }

  public getAge(): any{
    return this.age;
  }

  public setListFrameWork(listFrameWork: any): void{
    this.listFrameWork = listFrameWork;
  }

  public getListFrameWork(): any{
    return this.listFrameWork;
  }

  public setStyle(style: any): void{
    this.style = style;
  }

  public getStyle(): any{
    return this.style;
  }

  constructor() { 
    this.name = 'DuowngTora';
    this.age = 22;
    this.listFrameWork = ['N/A', 'Spring Boot', 'Spring MVC', 'Spring Sercurity', 'AngularJS', 'Angular', 'VueJS', 'ReactJS', 'React Native', 'Node js', '...'];
    this.style = 2;
  }

  ngOnInit(): void {
  }

}
