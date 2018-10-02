import { Injectable } from '@angular/core';
import { Item } from '../../pages/home/home';

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

  save(data: Item[]) {
    this.storage.set('todos', JSON.stringify(data));
  }
}
