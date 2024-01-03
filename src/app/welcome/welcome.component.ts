import { Component,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  
  @Input() name:string="";
  sentence:string="welcome";
  myName:string="David Acosta";
  userIsLoggedIn = false;
  isLoggedInClass = 'is-logged-in';
  states=['Ohio','California','Texas'];
  cars =[
    {
      "color":"blue",
      "name":"chevy"  
    },
    {
      "color":"red",
      "name":"ford"  
    },
  ]
  constructor(){
    // console.log(this.name);
    console.log(this.sentence);
  }

  ngOnInit(): void {
    this.setUpperCase()
    console.log(this.name);
  }

  setUpperCase(){
    this.name=this.name.toUpperCase();
  }

  displayName(){
    alert(this.name);
  }
  

  isLoggedIn()
  {
    return this.userIsLoggedIn;
  }
  login()
  {
    this.userIsLoggedIn=!this.userIsLoggedIn;
  }
  getName()
  {
    return this.name;
  }
  updateName($event:Event)
  {
    const element = $event.target as HTMLInputElement;
    this.name=element.value;
  }
}
