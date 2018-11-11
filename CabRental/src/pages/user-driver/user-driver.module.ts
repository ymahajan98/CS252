import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDriverPage } from './user-driver';

@NgModule({
  declarations: [
    UserDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDriverPage),
  ],
})
export class UserDriverPageModule {}
