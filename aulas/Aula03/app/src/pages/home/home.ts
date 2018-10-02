import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController) {

  }

  showGreeting(name: string) {
    this.toastCtrl.create({
      message: `Hello, ${name}`,
      duration: 3000
    }).present();
  }
}
