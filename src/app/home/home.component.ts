import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public  name: any;
  public  age: any;
  public  listFrameWork: any;
  public  style: any;

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



  public addAge(addNumber: number): void {
    if(this.age >= 22){
      alert('age > 22');
    }else{
      this.age += addNumber;
    }
  }

  public diffAge(diffNumber: number): void{
    if(this.age <= 0){
      alert('Age < 0');
    }else{
      (this.age >= diffNumber) ? this.age -= diffNumber : alert('Age < ' + diffNumber) ;
    }
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
