import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.css'
})
export class PipesExampleComponent {
  cars =[
    {
      "color":"blue",
      "name":"chevy",
      "purchasedDate": new Date()
    },
    {
      "color":"red",
      "name":"ford",
      "purchasedDate": new Date()  
    },
    {
      "color":"white",
      "name":"honda",
      "purchasedDate": new Date()  
    }
  ]
}
