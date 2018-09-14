import { Component, OnInit } from '@angular/core';

import { CalcModule } from './calc/calc.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Exercícios';

  operation: string;
  calc: CalcModule;

  constructor() {
    this.operation = '13 2 + 7 /';
    this.calc = new CalcModule();
  }

  ngOnInit() {
    console.log(this.calc.processRPN(this.operation));
  }
}
