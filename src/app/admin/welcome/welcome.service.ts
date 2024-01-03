import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  private person ={
    name:"John",
    age:21,
    gender:"male"
  };

  public getPerson(){
    return this.person;
  }
  constructor() { }

  public updatePersonName(name:string){
    this.person.name = name;
  }
}
