import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public listMenu: any;

  public getListMenu(): Array<any>{
    return this.listMenu;
  }

  constructor() { 
    this.listMenu = new Array;
    var home = {name: 'home', link: 'home'};
    var about = {name: 'about', link: 'about'};
    var templateForm = {name: 'template form', link: 'template-form'};
    var reactiveForm = {name: 'reactive form', link: 'reactive-form'};
    this.listMenu.push(home);
    this.listMenu.push(about);
    this.listMenu.push(templateForm);
    this.listMenu.push(reactiveForm);
  }

  ngOnInit(): void {
  }

}
