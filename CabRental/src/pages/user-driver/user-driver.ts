import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLoginPage } from '../user-login/user-login';
import { DriverLoginPage } from '../driver-login/driver-login';

/**
 * Generated class for the UserDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-driver',
  templateUrl: 'user-driver.html',
})
export class UserDriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDriverPage');
  }
  
  openUL() {
  	this.navCtrl.push(UserLoginPage);
  }
  openDL() {
  	this.navCtrl.push(DriverLoginPage);
  }

}
