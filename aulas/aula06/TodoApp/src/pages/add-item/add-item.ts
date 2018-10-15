import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { Item } from './../home/home';
import {generate} from 'shortid';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  private item: Item = <Item>{};
  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  // Salvar os dados da página
  doOk() {
    // Gerar um id
    this.item.id = generate();
    // Passar o item para a página que está aguardando
    this.viewCtrl.dismiss(this.item);
  }

  // Fecha sem salvar
  doCancel() {
    this.viewCtrl.dismiss();
  }
}
