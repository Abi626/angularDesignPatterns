import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,WelcomeComponent,LoginComponent
  ],
  exports:[LoginComponent,WelcomeComponent]
})
export class AdminModule { }
