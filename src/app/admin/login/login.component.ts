import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeService } from '../welcome/welcome.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private welcomeService:WelcomeService){}

  getperson()
  {
    // const persondetails = this.welcomeService.getPerson();
    // if(persondetails==null)
    // {
    //   alert("returning null");
    // }
    return this.welcomeService.getPerson();
  }
  updatepersonname()
  {
    this.welcomeService.updatePersonName('patel');
  }
}
