import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html'
})
export class RoomPage {
  room: any;
  categories: category[];
  shownCategory: any;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.room = navParams.get('room');
    this.categories = [
      { id: 1, name: 'Trims', items: [{ id: 1, name: 'Base trim N37' }, { id: 2, name: 'Chair trim N36' }, { id: 3, name: 'Crown trim N45' }] },
      { id: 2, name: 'Colors', items: [{ id: 1, name: 'Wall color Peach' }, { id: 2, name: 'Trim color Semi-gloss' }, { id: 3, name: 'Ceiling color Flat white' }] },
      { id: 3, name: 'Accessories', items: [{ id: 1, name: 'Door knobs silver model: KDF-543' }, { id: 2, name: 'Hinges gold' }, { id: 3, name: 'Switches ivory' }] },
    ]
  }

  toggleCategory(category) {
    if (this.isCategoryShown(category)) {
      this.shownCategory = null;
    } else {
      this.shownCategory = category;
    }
  }

  isCategoryShown(category) {
    return this.shownCategory === category;
  }
}
interface category {
  id: number;
  items: item[];
  name: string;
}
interface item {
  id: number;
  name: string;
}