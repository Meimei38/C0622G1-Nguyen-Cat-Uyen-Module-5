import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }


  result: string;
  input1: number;
  input2: number;


  ngOnInit(): void {
  }

  add() {
    this.result = String(this.input1 + this.input2);
  }

  minus() {
    this.result = String(this.input1 - this.input2);

  }

  multiply() {
    this.result = String(this.input1 * this.input2);
  }

  divide() {
    if (this.input2 == 0) {
      this.result = "Cannot divide by zero";
    } else {
      this.result = String(this.input1 / this.input2);
    }
  }
}
