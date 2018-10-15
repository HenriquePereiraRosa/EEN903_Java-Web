import { Component } from '@angular/core';
import {
  NavController, ToastController,
  ModalController
} from 'ionic-angular';

import { LocalDataProvider } from
  './../../providers/local-data/local-data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private msg = ['Muito abaixo do peso: Queda de cabelo, infertilidade, ausência menstrual',
    'Abaixo do peso: Fadiga, stress, ansiedade',
    'Peso normal: Menor risco de doenças cardíacas e vasculares',
    'Acima do peso: Fadiga, má circulação, varizes',
    'Obesidade Grau I: Diabetes, angina, infarto, aterosclerose',
    'Obesidade Grau II: Apneia do sono, falta de ar',
    'Obesidade Grau III: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC',
    'Fora do intervalo de processamento.']

  private height: number;
  private weight: number;
  private bmc: number;

  timeDuration = 3000;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public localDataProvider: LocalDataProvider) {
    this.height = 0;
    this.weight = 0;
  }


  doCalc() {

    this.bmc = this.weight / Math.pow(this.height, 2);

    console.log(this.bmc);

    switch (true) {

      case ((this.bmc > 16) && (this.bmc < 16.9)):
        console.log(0);
        this.toastCtrl.create({ message: this.msg[0], duration: this.timeDuration }).present();
        break;
      case ((this.bmc > 17) && (this.bmc < 18.4)):
        console.log(1);
        this.toastCtrl.create({ message: this.msg[1], duration: this.timeDuration }).present();
        break;
      case ((this.bmc > 18.5) && (this.bmc < 24.9)):
        console.log(2);
        this.toastCtrl.create({ message: this.msg[2], duration: this.timeDuration }).present();
        break;
      case ((this.bmc > 25) && (this.bmc < 29.9)):
        console.log(3);
        this.toastCtrl.create({ message: this.msg[3], duration: this.timeDuration }).present();
        break;
      case ((this.bmc > 30) && (this.bmc < 34.9)):
        console.log(4);
        this.toastCtrl.create({ message: this.msg[4], duration: this.timeDuration }).present();
        break;
      case ((this.bmc > 35) && (this.bmc < 40)):
        console.log(5);
        this.toastCtrl.create({ message: this.msg[5], duration: this.timeDuration }).present();
        break;
      case (this.bmc > 40):
        console.log(6);
        this.toastCtrl.create({ message: this.msg[6], duration: this.timeDuration }).present();
        break;

      default:
        console.log(this.bmc);
        this.toastCtrl.create({ message: this.msg[7], duration: this.timeDuration }).present();

    } // end switch
  } // end doCalc()

  
} // end class 
