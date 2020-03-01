import { Component } from '@angular/core';
import {CalculatorService} from './core/services/calculator.service';
import {NOTES} from '../assets/data/notes';
import {Note} from './core/models/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cash-floor';
  constructor(private calculator: CalculatorService) {
    NOTES.forEach(n => console.log(new Note(n)));
  }
}
