import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LocalDataProvider } from '../../providers/local-data/local-data';

export interface Item {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private items: Item[] = [];
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public localDataProvider: LocalDataProvider) {

  }
  viewItem(i: Item) {
    this.navCtrl.push('ItemDetailsPage', { item: i});
  }

  ionViewDidLoad(){
  }

  addItem() {
    let addModal = this.modalCtrl.create('AddItemPage');
    addModal.onDidDismiss((item) => {
      if(item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.localDataProvider.save(this.items);

  }
}
