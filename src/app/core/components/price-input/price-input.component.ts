import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
