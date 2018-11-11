import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverSignupPage } from './driver-signup';

@NgModule({
  declarations: [
    DriverSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverSignupPage),
  ],
})
export class DriverSignupPageModule {}
