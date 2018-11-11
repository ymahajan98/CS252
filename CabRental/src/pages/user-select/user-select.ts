import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RideMapPage } from '../ride-map/ride-map';

/**
 * Generated class for the UserSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-select',
  templateUrl: 'user-select.html',
})
export class UserSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSelectPage');
  }
  openRM(start,end) {
  	let s = parseInt(start,10);
    let e = parseInt(end,10);
    if(s >= e){
      alert("Can't travel in past!");
      return;
    }
  	this.navCtrl.push(RideMapPage, {
      param1: start, param2: end
    });
  }

}
