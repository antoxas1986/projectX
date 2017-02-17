import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { RoomPage } from '../room/room';

@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html'
})
export class FloorPage {
  floor: any
  constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController) {
    this.floor = navParams.get('floor');
  }

  gotoRoom(roomNumber) {
    let room = this.floor.rooms.filter(function (item) {
      return item == roomNumber;
    });
    this.navCtrl.push(RoomPage, { room: room[0] });
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'New Room',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name your room'
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
              this.floor.rooms.push(data.name);
            }
          }
        }
      ]
    });
    alert.present();
  }

}