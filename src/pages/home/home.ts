import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FloorPage } from '../floor/floor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  house: house;

  constructor(public navCtrl: NavController) {
    this.house = {
      id: 1,
      name: "My House",
      floors: [
        { id: 1, name: 'Basement', rooms: ['Bedroom', 'Bathroom', 'Leaving'] },
        { id: 2, name: 'First floor', rooms: ['Bedroom', 'Bathroom', 'Office'] },
        { id: 3, name: 'Second floor', rooms: ['Master Bedroom', 'Bathroom', 'Bedroom'] },
      ]
    }
  }

  gotoFloor(floorNumber) {
    let floor = this.house.floors.filter(function(item){
      return item.id == floorNumber;
    })
    this.navCtrl.push(FloorPage, { floor: floor[0] });
  }

}
interface house {
  id: number,
  name: string,
  floors: floor[]
}
interface floor {
  id: number,
  name: string,
  rooms: string[]
}