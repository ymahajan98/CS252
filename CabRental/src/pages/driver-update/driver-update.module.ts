import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverUpdatePage } from './driver-update';

@NgModule({
  declarations: [
    DriverUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverUpdatePage),
  ],
})
export class DriverUpdatePageModule {}
