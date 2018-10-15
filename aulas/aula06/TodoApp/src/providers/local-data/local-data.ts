import { Injectable } from '@angular/core';
import { Item } from './../../pages/home/home';
import { Storage } from '@ionic/storage';
/*
  Generated class for the LocalDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDataProvider {

  constructor(public storage: Storage) {
    console.log('Hello LocalDataProvider Provider');
  }

  public async load(): Promise<Item[]> {
    let data: string = await this.storage.get('todos');
    return <Item[]>JSON.parse(data);
  }

  public save(data: Item[]) {
    this.storage.set('todos', JSON.stringify(data));
  }

}
