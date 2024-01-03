import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
 powers=['Super Strength','Invisibility','Time Travel','Super speed'];

 model= new Hero('Dr.Strange',31,"Time Travel");

 onSubmit(heroForm:NgForm){
  console.log(this.model);
  console.log(heroForm);
 }
}
