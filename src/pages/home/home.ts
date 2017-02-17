import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { FloorPage } from '../floor/floor';
import { HouseService } from '../../service/house.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  house: house;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private houseService: HouseService) {
    this.house = houseService.getHouse();
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'New Floor',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name your floor'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (data.name != '') {
              let floor = {
                id: this.house.floors[this.house.floors.length - 1].id + 1,
                name: data.name,
                rooms: []
              }
              this.house.floors.push(floor);
            }
          }
        }
      ]
    });
    alert.present();
  }

  gotoFloor(floorNumber) {
    let floor = this.house.floors.filter(function (item) {
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