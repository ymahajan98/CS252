import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DriverSignupPage } from '../driver-signup/driver-signup';
import { DriverUpdatePage } from '../driver-update/driver-update';
import { AuthService } from '../../services/auth.service';

import { HomePage } from '../home/home';

/**
 * Generated class for the DriverLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-login',
  templateUrl: 'driver-login.html',
})
export class DriverLoginPage {
  
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, fb: FormBuilder) {
    this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverLoginPage');
  }

  openDSL() {
  	this.navCtrl.push(DriverSignupPage);
  }
  
  reset(){
    let data1 = this.loginForm.value;

    if (!data1.email) {
        return;
    }

    let em = data1.email;

    this.auth.resetPassword(em)
      .then(
        () => this.navCtrl.push(HomePage),
      )
  }
  
  openDU() {
    
        let data = this.loginForm.value;

        if (!data.email) {
            return;
        }

        let credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(
                () => this.navCtrl.push(DriverUpdatePage),
                error => this.loginError = error.message
            );
  }

}
