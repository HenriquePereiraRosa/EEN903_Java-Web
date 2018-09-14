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

  stack: number[];

  constructor() {
    this.stack = [];
  }

  processRPN(operator: string): number {
    let array: string[] = [];
    let lastIndex: number = 0;
    let result: number;

    for (let index = 0; index < operator.length; index++) {
      array.push(operator.charAt(index));
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        
        let aux = operator.substring(lastIndex, i);

        if (!isNaN(parseInt(aux))) {
          this.stack.push(parseInt(aux));
          lastIndex = i + 1;
        }
      } else {
        if (this.stack.length > 1) {
          switch (array[i]) {
            case "+": {
              result = this.sum();
              this.stack.push(result);
              lastIndex += 2;
              break;
            }
            case "-": {
              result = this.sub();
              this.stack.push(result);
              break;
            }
            case "*": {
              result = this.mult();
              this.stack.push(result);
              break;
            }
            case "/": {
              result = this.div();
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
    const number2 = this.stack.pop();
    const number1 = this.stack.pop();
    if (number2 > 0) {
      return number1 / number2;
    }
    console.log('Division by 0 is not supported');
    return NaN;
  }
 }
