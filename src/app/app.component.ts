import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { WelcomeComponent } from './welcome/welcome.component';
//import { LoginComponent } from './login/login.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { AdminModule } from './admin/admin.module';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AdminModule,
  PipesExampleComponent,HeroFormComponent,NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'designpatterns';

  
}
