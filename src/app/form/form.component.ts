import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
plec = "K"
bialko = false
nabial = false
warzywa = false
wiek = ""
pokazParagraf = false

pokazAnalize(){
this.pokazParagraf = true
}
}
