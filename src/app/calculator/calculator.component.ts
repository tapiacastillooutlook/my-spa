import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  screen = '0';
  firstValue!: number;
  action: string | null = null;

  numClick(val: { toString: () => string; }) {
    if (this.screen === '0') {
      this.screen = val.toString();
    } else {
      this.screen = `${this.screen}${val}`;
    }
  }

  oper(action: string | null) {
    this.firstValue = parseFloat(this.screen);
    this.action = action;
    this.screen = ' ';
  }

  calculate() {
    debugger;
    const a = this.firstValue;
    const b = parseFloat(this.screen);

    
    let result;
    if (this.action === 'm') {
      result = a * b;
      this.firstValue = result;
    this.screen = result.toString();
    }
    if (this.action === 'd') {
      result = a / b;
      this.firstValue = result;
    this.screen = result.toString();
    }
    if (this.action === 'a') {
      result = a + b;
      this.firstValue = result;
    this.screen = result.toString();
    }
    if (this.action === 's') {
      result = a - b;
    this.firstValue = result;
    this.screen = result.toString();
  }
  if (this.action === 'c') {
    result = 0 + 0;
  this.firstValue = result;
  this.screen = result.toString();
}


}}