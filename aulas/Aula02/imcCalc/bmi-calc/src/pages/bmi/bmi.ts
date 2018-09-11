import { BmiProvider } from './../../providers/bmi/bmi';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
@Injectable()
export class BmiPage {

  height: number;
  weight: number;
  result: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private bmiProvider: BmiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiPage');
  }

  calcBMI(): void {
    this.result = this.bmiProvider.doCalcBMI(this.height, this.weight);
  }
}
