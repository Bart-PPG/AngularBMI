import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css'
})
export class BmiComponent {
wzrost = 0
waga = 0
bmi = 0
wynik = ""

obliczBmi(){
  this.bmi = this.waga/Math.pow(this.wzrost,2);
  this.wynik = this.bmi.toFixed(2);
}
}
