import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserDriverPage } from '../user-driver/user-driver';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openUD() {
  	this.navCtrl.push(UserDriverPage);
  }


}
