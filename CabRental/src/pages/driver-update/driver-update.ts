import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverService } from '../../services/driver.service';

import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation';
import L, { LatLngExpression } from 'leaflet';

import { Driver } from '../../model/driver/driver.model'
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

import { HomePage } from '../home/home';


/**
 * Generated class for the DriverUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-update',
  templateUrl: 'driver-update.html',
})

export class DriverUpdatePage {
	
	private em = this.auth.getEmail();

	private driverRef = this.db.list<Driver>('cab-rental');

	DriverList: Observable<Driver[]>
	myVar : Driver[] = [];
	DriverSubscription: Subscription;
  
	lat: number;
	lng: number;

	driver: Driver = {
		key: '',
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

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private auth: AuthService,
		private gl: Geolocation,
		private db: AngularFireDatabase,
		private drv: DriverService) {

			this.DriverList = this.drv
				.getDrivers()
			    .snapshotChanges()
			    .map(changes => {
		        	return changes.map(c => ({
		        		key: c.payload.key,
		        		...c.payload.val()
		    		  }));
					});

		}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DriverUpdatePage');

		var j = 0;
        this.DriverList.subscribe(notes => {
          
          for(var i=0;i<notes.length;i++){
            if(notes[i].email == this.em){
              this.myVar[j] = notes[i];
              j++;
            }
          }
        });

	}

	update(driver: Driver,start1,end1){
		driver.key = this.myVar[0].key;
		driver.name = this.myVar[0].name;
		driver.mobile = this.myVar[0].mobile;
		driver.email = this.myVar[0].email;
		driver.carmodel = this.myVar[0].carmodel;
		driver.loc_lat = this.lat;
		driver.loc_lng = this.lng;
		driver.start = parseInt(start1,10);
		driver.end = parseInt(end1,10);

		if(driver.end < driver.start){
			alert("Can't travel in past!");
			return;
		}
		
		this.drv.editDriver(driver).then(
		() => {
			this.navCtrl.setRoot(HomePage);
		});

	}

	get_loc(){
		    if (navigator.geolocation) {
		      var options = {
		        enableHighAccuracy: true
		      };

		      navigator.geolocation.getCurrentPosition(position=> {

				this.lat = position.coords.latitude;
		        this.lng = position.coords.longitude;

		      }, error => {
		        console.log(error);
		      }, options);
		    }
		
	}

}
