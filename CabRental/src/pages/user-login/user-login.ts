import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { UserSignupPage } from '../user-signup/user-signup';
import { UserSelectPage } from '../user-select/user-select';
import { AuthService } from '../../services/auth.service';


/**
 * Generated class for the UserLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {
  
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, fb: FormBuilder) {
    this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }

  openUSL() {
  	this.navCtrl.push(UserSignupPage);
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

  openUSSL() {

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
                () => this.navCtrl.push(UserSelectPage),
                error => this.loginError = error.message
            );
  }

}
