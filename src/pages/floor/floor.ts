import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { RoomPage } from '../room/room';

@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html'
})
export class FloorPage {
  floor: any
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.floor = navParams.get('floor');
  }

  gotoRoom(roomNumber) {
    let room = this.floor.rooms.filter(function(item){
      return item == roomNumber;
    });
    this.navCtrl.push(RoomPage, {room : room[0]});
  }

}