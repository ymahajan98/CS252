import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RideMapPage } from './ride-map';

@NgModule({
  declarations: [
    RideMapPage,
  ],
  imports: [
    IonicPageModule.forChild(RideMapPage),
  ],
})
export class RideMapPageModule {}
