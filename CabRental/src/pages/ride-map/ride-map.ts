import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import 'leaflet';
import { Geolocation } from '@ionic-native/geolocation';
import L from 'leaflet';

import { Driver } from '../../model/driver/driver.model'
import { AngularFireDatabase } from 'angularfire2/database';
import { DriverService } from '../../services/driver.service';

import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

/**
 * Generated class for the RideMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ride-map',
  templateUrl: 'ride-map.html',
})
export class RideMapPage {

    loading;

    start: 0;
    end: 0;

    DriverList: Observable<Driver[]>
    DriverSubscription: Subscription;

    constructor(
        private loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public navParams: NavParams,
        private gl: Geolocation,
        private db: AngularFireDatabase,
        private drv: DriverService
    ) {
        
        this.presentLoading();

        this.start = navParams.get('param1');
        this.end = navParams.get('param2');

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
    console.log('ionViewDidLoad MapPage');

    var map  = L.map("map").fitWorld();

    /**
     * Apparently you don't need any tokens to use the maps. 
     */
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18 
    }).addTo(map);

    map.locate({
      setView: true, 
      maxZoom: 18
    })
    .on('locationfound', (e) => {
        this.loading.dismiss(); //Stop showing the loading spinner once the map is loaded.
        const { lat,lng }=e.target.getCenter();
        let markerGroup = L.featureGroup();
        let marker: any = L.marker([lat,lng]).bindPopup('You.!').on('click', () => {
            marker.openPopup();
        })
        markerGroup.addLayer(marker);
        
        this.DriverList.subscribe(notes => {
          for(var i=0;i<notes.length;i++){
            if(this.start >= notes[i].start && this.end <= notes[i].end){
                let marker: any = L.marker([notes[i].loc_lat,notes[i].loc_lng]).bindPopup("<b>Driver Name: "+ notes[i].name + "<br>" + "Contact: "+ notes[i].mobile + "<br>" + "Charges per Hour: "+ notes[i].charges + "<br>" + "Vehicle: "+ notes[i].carmodel + "</b>").on('click', () => {
                    marker.openPopup();
                })
                markerGroup.addLayer(marker);
            }
          }
        });

        map.addLayer(markerGroup);

    })
    .on('locationerror', (e) => {
        alert("Error finding Location!");
    })
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading map...'
    });

    this.loading.present();
  }
}
