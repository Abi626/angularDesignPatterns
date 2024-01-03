import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,FormControl,FormArray,FormBuilder,FormGroup,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css'
})
export class NameEditorComponent {
  name =new FormControl('david');
}
