import { Component } from '@angular/core';
import {
  NavController, ToastController,
  ModalController
} from 'ionic-angular';

import { LocalDataProvider } from
  './../../providers/local-data/local-data'

// Interface de item
export interface Item {
  id: string; // id do item
  title: string; // título do item
  description: string; // descrição do item
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // items da página
  private items: Item[] = [];

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public localDataProvider: LocalDataProvider) {
  }
  // Método para adicionar novo item
  public addItem() {
    //this.toastCtrl.create({message: 'Add item...', duration: 2000}).
    //  present();
    //Exibir a página AddItem de forma modal
    let addModal = this.modalCtrl.create('AddItemPage');
    addModal.onDidDismiss(
      (item) => {
        if (item) {
          this.saveItem(item);
        }
      }
    );
    addModal.present();
  }

  // Função para atualizar a lista e salvar em algum BD
  public saveItem(item: Item) {
    // Armazenar um novo item no vetor de itens
    console.log(item);
    this.items.push(item);
    // Salvar no storage
    this.localDataProvider.save(this.items);
  }

  // Método para editar item
  public viewItem(i: Item) {
    //this.toastCtrl.create({
    //  message: `View item: ${item.id}`,
    //  duration: 2000
    //}).present();
    this.navCtrl.push('ItemDetailPage', { item: i });
  }
  public async ionViewDidLoad() {
    console.log('did load');
    let data: Item[] = await this.localDataProvider.load();
    if (data) {
      this.items = data;
    }
  }


}
