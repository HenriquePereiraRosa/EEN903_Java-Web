import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Item } from '../home/home';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  private item: Item = <Item>{}
  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  doOk() {
    // passar o item à página de fundo.
    this.viewCtrl.dismiss(this.item);
  }

  doCancel() {
    // passar o item à página de fundo.
    this.viewCtrl.dismiss();
  }
}
