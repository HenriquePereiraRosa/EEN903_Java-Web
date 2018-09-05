import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Exercícios';

  msg: string;

  constructor() {
    this.msg = 'Hello World!';
  }

  ngOnInit() {
    print();
    rotateText(this.msg, 1000);
  }

}

function print(): void {
  console.log('HELLO WORLD Ladys and Gentlemen...');
}

function rotateText(msg: string, dt: number) {
  setInterval(() => doRotate(msg), 1000);
}

function doRotate(msg) {
  if (msg.length > 1) {
    const aux = msg.charAt(msg.length - 1);
    msg = aux + msg.substring(0, (msg.length - 1));
    console.log(msg);
  }
}
