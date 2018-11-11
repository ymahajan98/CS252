import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../model/driver/driver.model'

import { HomePage } from '../home/home';

/**
 * Generated class for the DriverSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-signup',
  templateUrl: 'driver-signup.html',
})
export class DriverSignupPage {
	driver: Driver = {
		name: '',
		mobile: 0,
		email: '',
		charges: 0,
		loc_lat: 0,
		loc_lng: 0,
		start: 0,
		end: 0,
		carmodel: ''
	};

	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		public navCtrl: NavController,
		public navParams: NavParams,
		private auth: AuthService,
		private drv: DriverService
	) {
	  	this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DriverSignupPage');
	}

  	signup(driver: Driver,confirm) {
		let data = this.form.value;
		if(confirm != data.password){
			alert("Passwords do not match.!");
			return;
		}
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => {
				this.drv.addDriver(driver);
				this.navCtrl.setRoot(HomePage);	
			},
			error => this.signupError = error.message
		);
	}

}
