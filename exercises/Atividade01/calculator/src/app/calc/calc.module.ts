import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CalcModule {

  stack: number[];

  constructor() {
    this.stack = [];
  }

  add(num: number) {
    this.stack.push(num);
  }

  removeLast() {
    this.stack.pop();
  }

  doCalc(operator: string): number {
    let result: number;

    if (this.stack.length > 0) {
      switch (operator) {
        case '+': {
          result = this.sum();
          break;
        }
        case '-': {
          result = this.sub();
          break;
        }
        case '*': {
          result = this.mult();
          break;
        }
        case '/': {
          result = this.div();
          break;
        }

        default: {
          console.log('Operação não suportada.');
        }
      }

    } else {
      console.log('Stack Empty...');
    }

    return result;
  }

  sum(): number {
    this.stack.forEach(() => this.stack.pop());
    return this.stack.pop() + this.stack.pop();
  }

  sub(): number {
    this.stack.forEach(() => this.stack.pop());
    return this.stack.pop() - this.stack.pop();
  }

  mult(): number {
    this.stack.forEach(() => this.stack.pop());
    return this.stack.pop() * this.stack.pop();
  }


  div(): number {
    const number1 = this.stack.pop();
    const number2 = this.stack.pop();
    if (number2 > 0) {
      this.stack.forEach(() => this.stack.pop());
      return number1 / number2;
    }
    console.log('Division by \'0\' is not supported');
    return NaN;
  }
 }
