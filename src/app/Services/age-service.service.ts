import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeServiceService {

  public age: number | undefined;

  constructor() { 
    this.age = 22;
  }
}
