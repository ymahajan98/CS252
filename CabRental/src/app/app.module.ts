import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { DriverService } from '../services/driver.service';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserDriverPage } from '../pages/user-driver/user-driver';
import { UserLoginPage } from '../pages/user-login/user-login';
import { DriverLoginPage } from '../pages/driver-login/driver-login';
import { UserSignupPage } from '../pages/user-signup/user-signup';
import { DriverSignupPage } from '../pages/driver-signup/driver-signup';
import { UserSelectPage } from '../pages/user-select/user-select';
import { DriverUpdatePage } from '../pages/driver-update/driver-update';
import { RideMapPage } from '../pages/ride-map/ride-map';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserDriverPage,
    UserLoginPage,
    DriverLoginPage,
    UserSignupPage,
    DriverSignupPage,
    UserSelectPage,
    DriverUpdatePage,
    RideMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserDriverPage,
    UserLoginPage,
    DriverLoginPage,
    UserSignupPage,
    DriverSignupPage,
    UserSelectPage,
    DriverUpdatePage,
    RideMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    DriverService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
