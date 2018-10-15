import { LocalDataProvider } from './../../providers/local-data/local-data';
import { Item } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  private item: Item;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public localDataProvider: LocalDataProvider) {
    this.item = navParams.get('item');
  }

  public async update() {
    let items: Item[] = await this.localDataProvider.load();
    if (items) {
      for (let index = 0; index < items.length; index++) {
        if (items[index].id == this.item.id) {
          items[index] = this.item;
          break;
        }
      }
      this.localDataProvider.save(items);
    }
  }

  ionViewWillLeave() {
    //Update storage
    this.update();
  }


}
