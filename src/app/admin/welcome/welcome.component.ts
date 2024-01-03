import { Component,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  
  constructor(private welcomeService:WelcomeService){}

  getperson()
  {
    return this.welcomeService.getPerson();
  }
  updatepersonname()
  {
    this.welcomeService.updatePersonName('patel');
  }
}
