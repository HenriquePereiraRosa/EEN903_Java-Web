import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { isNumber } from 'util';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CalcModule {

  let stack: number[];

  constructor() {
    this.stack = [];
  }

  processRPN(operator: string): number {
    let aux: string;
    let array: string[];
    let lastIndex: number = 0;
    let result: number;

    for (let i = 0; i < operator.length; i++) {
      array.push(operator.charAt(i));
    }

    for (const element of array) {
      if (element === ' ') {
          this.stack.push(parseInt(operator.substring(lastIndex, (element - 1)));
      } else {
        if (this.stack.length > 1) {
          switch (element) {
            case '+': {
              result = this.sum();
              this.stack.push(result);
              break;
            }
            case '-': {
              result = this.sub();
              this.stack.push(result);
              break;
            }
            case '*': {
              result = this.mult();
              this.stack.push(result);
              break;
            }
            case '/': {
              result = this.sub();
              this.stack.push(result);
              break;
            }
            default: {
              console.log('Operação não suportada');
              break;
            }
          }
        }
      }

    }
    return result;
  }

  stackAdd(num: number) {
    this.stack.push(num);
  }

  stackRemove() {
    this.stack.pop();
  }

  sum(): number {
    return this.stack.pop() + this.stack.pop();
  }

  sub(): number {
    return this.stack.pop() - this.stack.pop();
  }

  mult(): number {
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
