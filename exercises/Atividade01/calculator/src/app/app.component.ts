import { CalcModule } from './calc/calc.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Exercícios';

  msg: string;
  calc: CalcModule;

  constructor() {
    this.msg = 'Hello World!';
    this.calc = new CalcModule();
  }

  ngOnInit() {
    print();
    this.rotateText(this.msg, 1000);
  }

  print(): void {
    console.log('HELLO WORLD Ladys and Gentlemen...');
  }

  rotateText(msg: string, dt: number) {
    setInterval(() => this.doRotate(msg), dt);
  }

  doRotate(msg) {
    if (msg.length > 1) {
      msg = this.msg;
      const aux = msg.charAt(msg.length - 1);
      msg = aux + msg.substring(0, (msg.length - 1));
      console.log(msg);
      this.msg = msg;
    }
  }
}
