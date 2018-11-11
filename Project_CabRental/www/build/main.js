webpackJsonp([8],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_signup_driver_signup__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__driver_update_driver_update__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DriverLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverLoginPage = /** @class */ (function () {
    function DriverLoginPage(navCtrl, navParams, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    DriverLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverLoginPage');
    };
    DriverLoginPage.prototype.openDSL = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_signup_driver_signup__["a" /* DriverSignupPage */]);
    };
    DriverLoginPage.prototype.reset = function () {
        var _this = this;
        var data1 = this.loginForm.value;
        if (!data1.email) {
            return;
        }
        var em = data1.email;
        this.auth.resetPassword(em)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]); });
    };
    DriverLoginPage.prototype.openDU = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__driver_update_driver_update__["a" /* DriverUpdatePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    DriverLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-login',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/driver-login/driver-login.html"*/'<!--\n  Generated template for the DriverLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <form (ngSubmit)="openDU()" [formGroup]="loginForm">\n\n\n	 <ion-list inset>\n\n	  <ion-item  [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n	    <ion-label stacked>E-Mail</ion-label>\n	    <ion-input type="text" formControlName="email"></ion-input>\n	  </ion-item>\n\n	  <div ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n      </div>\n\n	  <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n	    <ion-label stacked>Password</ion-label>\n	    <ion-input type="password"  formControlName="password"></ion-input>\n	  </ion-item>\n\n	  <div ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n      </div>\n\n      <div class="form-error">{{loginError}}</div>\n\n	</ion-list>\n\n	  <ion-row center>\n	  	<ion-col text-center>\n	  		<button ion-button color="dark" round type="submit" [disabled]="!loginForm.valid">LOGIN</button>\n	  	</ion-col>\n	  </ion-row>\n\n	  <ion-row center>\n        <ion-col text-center>\n          <button ion-button color="dark" round (click)="reset()">Reset Password</button>\n        </ion-col>\n      </ion-row>\n\n </form>\n\n	<ion-row center>\n		<ion-col text-center>\n			<button ion-button color="dark" round (click)="openDSL()">SIGNUP</button>\n		</ion-col>\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/driver-login/driver-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], DriverLoginPage);
    return DriverLoginPage;
}());

//# sourceMappingURL=driver-login.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_driver_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DriverSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverSignupPage = /** @class */ (function () {
    function DriverSignupPage(fb, navCtrl, navParams, auth, drv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.drv = drv;
        this.driver = {
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
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    DriverSignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverSignupPage');
    };
    DriverSignupPage.prototype.signup = function (driver, confirm) {
        var _this = this;
        var data = this.form.value;
        if (confirm != data.password) {
            alert("Passwords do not match.!");
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () {
            _this.drv.addDriver(driver);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (error) { return _this.signupError = error.message; });
    };
    DriverSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-signup',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/driver-signup/driver-signup.html"*/'<!--\n  Generated template for the DriverSignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="signup(driver,confirm)" [formGroup]="form">\n\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked> NAME </ion-label>\n        <ion-input [(ngModel)]="driver.name" [ngModelOptions]="{standalone:true}" type="text" value=""></ion-input>\n      </ion-item>\n\n      <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label stacked>E-Mail</ion-label>\n        <ion-input [(ngModel)]="driver.email" type="text" formControlName="email"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n      </div>\n\n      <ion-item  [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Confirm Password</ion-label>\n        <ion-input type="password" [(ngModel)]="confirm" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Mobile Number</ion-label>\n        <ion-input [(ngModel)]="driver.mobile" [ngModelOptions]="{standalone:true}" type="tel" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked> Car Model </ion-label>\n        <ion-input [(ngModel)]="driver.carmodel" [ngModelOptions]="{standalone:true}" type="text" value=""></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div class="form-error">{{signupError}}</div>  \n\n    <ion-row center>\n    	<ion-col text-center>\n    		<button ion-button color="dark" round type="submit" [disabled]="!form.valid">PROCEED</button>\n    	</ion-col>\n    </ion-row>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/driver-signup/driver-signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_driver_service__["a" /* DriverService */]])
    ], DriverSignupPage);
    return DriverSignupPage;
}());

//# sourceMappingURL=driver-signup.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login_user_login__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_login_driver_login__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDriverPage = /** @class */ (function () {
    function UserDriverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserDriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDriverPage');
    };
    UserDriverPage.prototype.openUL = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_login_user_login__["a" /* UserLoginPage */]);
    };
    UserDriverPage.prototype.openDL = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__driver_login_driver_login__["a" /* DriverLoginPage */]);
    };
    UserDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-driver',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-driver/user-driver.html"*/'<!--\n  Generated template for the UserDriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar transperant>\n    <ion-title>Ride or Drive</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding style="background-image: url(\'assets/imgs/worldmap.jpg\');"> -->\n<ion-content style="background-color: #ffcc99">\n\n  <!-- <img src="assets/imgs/homemap.png" class="back"> -->\n  \n  <ion-row center>\n  	<ion-col text-center>\n  		<img src="assets/imgs/usr1.png" width="150" height="150">\n  	</ion-col>\n  </ion-row>\n  <ion-row center>\n  	<ion-col text-center>\n  		<button ion-button color="dark" round (click)="openUL()"> USER </button>\n  	</ion-col>\n  </ion-row>\n  <ion-row center>\n  	<ion-col text-center>\n  		<img src="assets/imgs/drv.svg" width="200" height="200">\n  	</ion-col>\n  </ion-row>\n  <ion-row center>\n  	<ion-col text-center>\n  		<button ion-button color="dark" round (click)="openDL()">DRIVER</button>\n  	</ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-driver/user-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserDriverPage);
    return UserDriverPage;
}());

//# sourceMappingURL=user-driver.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_signup_user_signup__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_select_user_select__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the UserLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserLoginPage = /** @class */ (function () {
    function UserLoginPage(navCtrl, navParams, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    UserLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserLoginPage');
    };
    UserLoginPage.prototype.openUSL = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_signup_user_signup__["a" /* UserSignupPage */]);
    };
    UserLoginPage.prototype.reset = function () {
        var _this = this;
        var data1 = this.loginForm.value;
        if (!data1.email) {
            return;
        }
        var em = data1.email;
        this.auth.resetPassword(em)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); });
    };
    UserLoginPage.prototype.openUSSL = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_select_user_select__["a" /* UserSelectPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    UserLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-login',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-login/user-login.html"*/'<!--\n  Generated template for the UserLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="openUSSL()" [formGroup]="loginForm">\n       \n     <ion-list inset>\n\n      <ion-item  [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n        <ion-label stacked>E-Mail</ion-label>\n        <ion-input type="text" formControlName="email"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n      </div>\n\n      <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n      </div>\n\n      <div class="form-error">{{loginError}}</div>\n\n    </ion-list>\n      <ion-row center>\n      	<ion-col text-center>\n      		<button ion-button color="dark" round type="submit" [disabled]="!loginForm.valid">LOGIN</button>\n      	</ion-col>\n      </ion-row>\n\n      <ion-row center>\n        <ion-col text-center>\n          <button ion-button color="dark" round (click)="reset()">Reset Password</button>\n        </ion-col>\n      </ion-row>\n        \n  </form>\n  <ion-row center>\n    <ion-col text-center>\n      <button ion-button color="dark" round (click)="openUSL()">SIGNUP</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-login/user-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UserLoginPage);
    return UserLoginPage;
}());

//# sourceMappingURL=user-login.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSignupPage = /** @class */ (function () {
    function UserSignupPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    UserSignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSignupPage');
    };
    UserSignupPage.prototype.signup = function (confirm) {
        var _this = this;
        var data = this.form.value;
        if (confirm != data.password) {
            alert("Passwords do not match.!");
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); }, function (error) { return _this.signupError = error.message; });
    };
    UserSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-signup',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-signup/user-signup.html"*/'<!--\n  Generated template for the UserSignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="signup(confirm)" [formGroup]="form">\n\n     <ion-list>\n\n      <ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label stacked>E-Mail</ion-label>\n        <ion-input type="text" formControlName="email"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="email" #emailErrors="ngxErrors">\n        <div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n      </div>\n\n      <ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="password" #passwordErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Confirm Password</ion-label>\n        <ion-input type="password" [(ngModel)]="confirm" [ngModelOptions]="{standalone:true}"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div class="form-error">{{signupError}}</div>    \n\n    <ion-row center>\n    	<ion-col text-center>\n    		<button ion-button color="dark" round type="submit" [disabled]="!form.valid">PROCEED</button>\n    	</ion-col>\n    </ion-row>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-signup/user-signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], UserSignupPage);
    return UserSignupPage;
}());

//# sourceMappingURL=user-signup.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ride_map_ride_map__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSelectPage = /** @class */ (function () {
    function UserSelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserSelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSelectPage');
    };
    UserSelectPage.prototype.openRM = function (start, end) {
        var s = parseInt(start, 10);
        var e = parseInt(end, 10);
        if (s >= e) {
            alert("Can't travel in past!");
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ride_map_ride_map__["a" /* RideMapPage */], {
            param1: start, param2: end
        });
    };
    UserSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-select',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-select/user-select.html"*/'<!--\n  Generated template for the UserSelectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Book Now!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n	  <ion-label>Start Time</ion-label>\n	  <ion-select [(ngModel)]="start">\n	    <ion-option value="0">0000 hours</ion-option>\n	    <ion-option value="1">0100 hours</ion-option>\n	    <ion-option value="2">0200 hours</ion-option>\n	    <ion-option value="3">0300 hours</ion-option>\n	    <ion-option value="4">0400 hours</ion-option>\n	    <ion-option value="5">0500 hours</ion-option>\n	    <ion-option value="6">0600 hours</ion-option>\n	    <ion-option value="7">0700 hours</ion-option>\n	    <ion-option value="8">0800 hours</ion-option>\n	    <ion-option value="9">0900 hours</ion-option>\n	    <ion-option value="10">1000 hours</ion-option>\n	    <ion-option value="11">1100 hours</ion-option>\n	    <ion-option value="12">1200 hours</ion-option>\n	    <ion-option value="13">1300 hours</ion-option>\n	    <ion-option value="14">1400 hours</ion-option>\n	    <ion-option value="15">1500 hours</ion-option>\n	    <ion-option value="16">1600 hours</ion-option>\n	    <ion-option value="17">1700 hours</ion-option>\n	    <ion-option value="18">1800 hours</ion-option>\n	    <ion-option value="19">1900 hours</ion-option>\n	    <ion-option value="20">2000 hours</ion-option>\n	    <ion-option value="21">2100 hours</ion-option>\n	    <ion-option value="22">2200 hours</ion-option>\n	    <ion-option value="23">2300 hours</ion-option>\n	  </ion-select>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label>End Time</ion-label>\n	  <ion-select [(ngModel)]="end">\n	    <ion-option value="1">0100 hours</ion-option>\n	    <ion-option value="2">0200 hours</ion-option>\n	    <ion-option value="3">0300 hours</ion-option>\n	    <ion-option value="4">0400 hours</ion-option>\n	    <ion-option value="5">0500 hours</ion-option>\n	    <ion-option value="6">0600 hours</ion-option>\n	    <ion-option value="7">0700 hours</ion-option>\n	    <ion-option value="8">0800 hours</ion-option>\n	    <ion-option value="9">0900 hours</ion-option>\n	    <ion-option value="10">1000 hours</ion-option>\n	    <ion-option value="11">1100 hours</ion-option>\n	    <ion-option value="12">1200 hours</ion-option>\n	    <ion-option value="13">1300 hours</ion-option>\n	    <ion-option value="14">1400 hours</ion-option>\n	    <ion-option value="15">1500 hours</ion-option>\n	    <ion-option value="16">1600 hours</ion-option>\n	    <ion-option value="17">1700 hours</ion-option>\n	    <ion-option value="18">1800 hours</ion-option>\n	    <ion-option value="19">1900 hours</ion-option>\n	    <ion-option value="20">2000 hours</ion-option>\n	    <ion-option value="21">2100 hours</ion-option>\n	    <ion-option value="22">2200 hours</ion-option>\n	    <ion-option value="23">2300 hours</ion-option>\n	    <ion-option value="24">Tom: 0000 hours</ion-option>\n	    <ion-option value="25">Tom: 0100 hours</ion-option>\n	    <ion-option value="26">Tom: 0200 hours</ion-option>\n	    <ion-option value="27">Tom: 0300 hours</ion-option>\n	    <ion-option value="28">Tom: 0400 hours</ion-option>\n	    <ion-option value="29">Tom: 0500 hours</ion-option>\n	    <ion-option value="30">Tom: 0600 hours</ion-option>\n	    <ion-option value="31">Tom: 0700 hours</ion-option>\n	    <ion-option value="32">Tom: 0800 hours</ion-option>\n	    <ion-option value="33">Tom: 0900 hours</ion-option>\n	    <ion-option value="34">Tom: 1000 hours</ion-option>\n	    <ion-option value="35">Tom: 1100 hours</ion-option>\n	    <ion-option value="36">Tom: 1200 hours</ion-option>\n	    <ion-option value="37">Tom: 1300 hours</ion-option>\n	    <ion-option value="38">Tom: 1400 hours</ion-option>\n	    <ion-option value="39">Tom: 1500 hours</ion-option>\n	    <ion-option value="40">Tom: 1600 hours</ion-option>\n	    <ion-option value="41">Tom: 1700 hours</ion-option>\n	    <ion-option value="42">Tom: 1800 hours</ion-option>\n	    <ion-option value="43">Tom: 1900 hours</ion-option>\n	    <ion-option value="44">Tom: 2000 hours</ion-option>\n	    <ion-option value="45">Tom: 2100 hours</ion-option>\n	    <ion-option value="46">Tom: 2200 hours</ion-option>\n	    <ion-option value="47">Tom: 2300 hours</ion-option>\n	    <ion-option value="48">Tom: 2400 hours</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-row center>\n  	<ion-col text-center>\n  		<button ion-button color="dark" round (click)="openRM(start,end)">Show Rides</button>\n  	</ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/user-select/user-select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserSelectPage);
    return UserSelectPage;
}());

//# sourceMappingURL=user-select.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_driver_service__ = __webpack_require__(68);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RideMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RideMapPage = /** @class */ (function () {
    function RideMapPage(loadingCtrl, navCtrl, navParams, gl, db, drv) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gl = gl;
        this.db = db;
        this.drv = drv;
        this.presentLoading();
        this.start = navParams.get('param1');
        this.end = navParams.get('param2');
        this.DriverList = this.drv
            .getDrivers()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    RideMapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MapPage');
        var map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").fitWorld();
        /**
         * Apparently you don't need any tokens to use the maps.
         */
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'www.tphangout.com',
            maxZoom: 18
        }).addTo(map);
        map.locate({
            setView: true,
            maxZoom: 18
        })
            .on('locationfound', function (e) {
            _this.loading.dismiss(); //Stop showing the loading spinner once the map is loaded.
            var _a = e.target.getCenter(), lat = _a.lat, lng = _a.lng;
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([lat, lng]).bindPopup('You.!').on('click', function () {
                marker.openPopup();
            });
            markerGroup.addLayer(marker);
            _this.DriverList.subscribe(function (notes) {
                var _loop_1 = function () {
                    if (_this.start >= notes[i].start && _this.end <= notes[i].end) {
                        var marker_1 = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([notes[i].loc_lat, notes[i].loc_lng]).bindPopup("<b>Driver Name: " + notes[i].name + "<br>" + "Contact: " + notes[i].mobile + "<br>" + "Charges per Hour: " + notes[i].charges + "<br>" + "Vehicle: " + notes[i].carmodel + "</b>").on('click', function () {
                            marker_1.openPopup();
                        });
                        markerGroup.addLayer(marker_1);
                    }
                };
                for (var i = 0; i < notes.length; i++) {
                    _loop_1();
                }
            });
            map.addLayer(markerGroup);
        })
            .on('locationerror', function (e) {
            alert("Error finding Location!");
        });
    };
    RideMapPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading map...'
        });
        this.loading.present();
    };
    RideMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ride-map',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/ride-map/ride-map.html"*/'<!--\n  Generated template for the RideMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar transperant>\n    <ion-title>Rides...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/ride-map/ride-map.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_driver_service__["a" /* DriverService */]) === "function" && _f || Object])
    ], RideMapPage);
    return RideMapPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=ride-map.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_driver_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(41);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DriverUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverUpdatePage = /** @class */ (function () {
    function DriverUpdatePage(navCtrl, navParams, auth, gl, db, drv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.gl = gl;
        this.db = db;
        this.drv = drv;
        this.em = this.auth.getEmail();
        this.driverRef = this.db.list('cab-rental');
        this.myVar = [];
        this.driver = {
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
        this.DriverList = this.drv
            .getDrivers()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    DriverUpdatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DriverUpdatePage');
        var j = 0;
        this.DriverList.subscribe(function (notes) {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].email == _this.em) {
                    _this.myVar[j] = notes[i];
                    j++;
                }
            }
        });
    };
    DriverUpdatePage.prototype.update = function (driver, start1, end1) {
        var _this = this;
        driver.key = this.myVar[0].key;
        driver.name = this.myVar[0].name;
        driver.mobile = this.myVar[0].mobile;
        driver.email = this.myVar[0].email;
        driver.carmodel = this.myVar[0].carmodel;
        driver.loc_lat = this.lat;
        driver.loc_lng = this.lng;
        driver.start = parseInt(start1, 10);
        driver.end = parseInt(end1, 10);
        if (driver.end < driver.start) {
            alert("Can't travel in past!");
            return;
        }
        this.drv.editDriver(driver).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        });
    };
    DriverUpdatePage.prototype.get_loc = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true
            };
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            }, function (error) {
                console.log(error);
            }, options);
        }
    };
    DriverUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver-update',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/driver-update/driver-update.html"*/'<!--\n  Generated template for the DriverUpdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Logistics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-item>\n	  <ion-label>Start Time Availability</ion-label>\n	  <ion-select [(ngModel)]="start1">\n	    <ion-option value=0>0000 hours</ion-option>\n	    <ion-option value=1>0100 hours</ion-option>\n	    <ion-option value=2>0200 hours</ion-option>\n	    <ion-option value=3>0300 hours</ion-option>\n	    <ion-option value=4>0400 hours</ion-option>\n	    <ion-option value=5>0500 hours</ion-option>\n	    <ion-option value=6>0600 hours</ion-option>\n	    <ion-option value=7>0700 hours</ion-option>\n	    <ion-option value=8>0800 hours</ion-option>\n	    <ion-option value=9>0900 hours</ion-option>\n	    <ion-option value=10>1000 hours</ion-option>\n	    <ion-option value=11>1100 hours</ion-option>\n	    <ion-option value=12>1200 hours</ion-option>\n	    <ion-option value=13>1300 hours</ion-option>\n	    <ion-option value=14>1400 hours</ion-option>\n	    <ion-option value=15>1500 hours</ion-option>\n	    <ion-option value=16>1600 hours</ion-option>\n	    <ion-option value=17>1700 hours</ion-option>\n	    <ion-option value=18>1800 hours</ion-option>\n	    <ion-option value=19>1900 hours</ion-option>\n	    <ion-option value=20>2000 hours</ion-option>\n	    <ion-option value=21>2100 hours</ion-option>\n	    <ion-option value=22>2200 hours</ion-option>\n	    <ion-option value=23>2300 hours</ion-option>\n	  </ion-select>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label>End Time Availability</ion-label>\n	  <ion-select [(ngModel)]="end1">\n	    <ion-option value=1>0100 hours</ion-option>\n	    <ion-option value=2>0200 hours</ion-option>\n	    <ion-option value=3>0300 hours</ion-option>\n	    <ion-option value=4>0400 hours</ion-option>\n	    <ion-option value=5>0500 hours</ion-option>\n	    <ion-option value=6>0600 hours</ion-option>\n	    <ion-option value=7>0700 hours</ion-option>\n	    <ion-option value=8>0800 hours</ion-option>\n	    <ion-option value=9>0900 hours</ion-option>\n	    <ion-option value=10>1000 hours</ion-option>\n	    <ion-option value=11>1100 hours</ion-option>\n	    <ion-option value=12>1200 hours</ion-option>\n	    <ion-option value=13>1300 hours</ion-option>\n	    <ion-option value=14>1400 hours</ion-option>\n	    <ion-option value=15>1500 hours</ion-option>\n	    <ion-option value=16>1600 hours</ion-option>\n	    <ion-option value=17>1700 hours</ion-option>\n	    <ion-option value=18>1800 hours</ion-option>\n	    <ion-option value=19>1900 hours</ion-option>\n	    <ion-option value=20>2000 hours</ion-option>\n	    <ion-option value=21>2100 hours</ion-option>\n	    <ion-option value=22>2200 hours</ion-option>\n	    <ion-option value=23>2300 hours</ion-option>\n	    <ion-option value="24">Tom: 0000 hours</ion-option>\n	    <ion-option value="25">Tom: 0100 hours</ion-option>\n	    <ion-option value="26">Tom: 0200 hours</ion-option>\n	    <ion-option value="27">Tom: 0300 hours</ion-option>\n	    <ion-option value="28">Tom: 0400 hours</ion-option>\n	    <ion-option value="29">Tom: 0500 hours</ion-option>\n	    <ion-option value="30">Tom: 0600 hours</ion-option>\n	    <ion-option value="31">Tom: 0700 hours</ion-option>\n	    <ion-option value="32">Tom: 0800 hours</ion-option>\n	    <ion-option value="33">Tom: 0900 hours</ion-option>\n	    <ion-option value="34">Tom: 1000 hours</ion-option>\n	    <ion-option value="35">Tom: 1100 hours</ion-option>\n	    <ion-option value="36">Tom: 1200 hours</ion-option>\n	    <ion-option value="37">Tom: 1300 hours</ion-option>\n	    <ion-option value="38">Tom: 1400 hours</ion-option>\n	    <ion-option value="39">Tom: 1500 hours</ion-option>\n	    <ion-option value="40">Tom: 1600 hours</ion-option>\n	    <ion-option value="41">Tom: 1700 hours</ion-option>\n	    <ion-option value="42">Tom: 1800 hours</ion-option>\n	    <ion-option value="43">Tom: 1900 hours</ion-option>\n	    <ion-option value="44">Tom: 2000 hours</ion-option>\n	    <ion-option value="45">Tom: 2100 hours</ion-option>\n	    <ion-option value="46">Tom: 2200 hours</ion-option>\n	    <ion-option value="47">Tom: 2300 hours</ion-option>\n	    <ion-option value="48">Tom: 2400 hours</ion-option>\n	  </ion-select>\n	</ion-item>\n\n	<ion-item>\n	    <ion-label stacked>Charges per hour</ion-label>\n	    <ion-input [(ngModel)]="driver.charges" type="number"></ion-input>\n	</ion-item>\n\n  	<ion-row center>\n  		<ion-col text-center>\n  			<button ion-button color="light" full (click)="get_loc()">Get Current Location</button>\n  		</ion-col>\n  	</ion-row>\n\n  	<ion-row center>\n  		<ion-col text-center>\n  			<button ion-button color="dark" round (click)="update(driver,start1,end1)">Update Ride Info</button>\n  		</ion-col>\n  	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/driver-update/driver-update.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_driver_service__["a" /* DriverService */]) === "function" && _f || Object])
    ], DriverUpdatePage);
    return DriverUpdatePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=driver-update.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/driver-login/driver-login.module": [
		443,
		7
	],
	"../pages/driver-signup/driver-signup.module": [
		444,
		6
	],
	"../pages/driver-update/driver-update.module": [
		445,
		5
	],
	"../pages/ride-map/ride-map.module": [
		446,
		4
	],
	"../pages/user-driver/user-driver.module": [
		447,
		3
	],
	"../pages/user-login/user-login.module": [
		448,
		2
	],
	"../pages/user-select/user-select.module": [
		449,
		1
	],
	"../pages/user-signup/user-signup.module": [
		450,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 201;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ultimate_ngxerrors__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_driver_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_driver_user_driver__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_user_login_user_login__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_driver_login_driver_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_signup_user_signup__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_driver_signup_driver_signup__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_user_select_user_select__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_driver_update_driver_update__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ride_map_ride_map__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_driver_user_driver__["a" /* UserDriverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_login_user_login__["a" /* UserLoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_driver_login_driver_login__["a" /* DriverLoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_signup_user_signup__["a" /* UserSignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_driver_signup_driver_signup__["a" /* DriverSignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_select_user_select__["a" /* UserSelectPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_driver_update_driver_update__["a" /* DriverUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ride_map_ride_map__["a" /* RideMapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/driver-login/driver-login.module#DriverLoginPageModule', name: 'DriverLoginPage', segment: 'driver-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-signup/driver-signup.module#DriverSignupPageModule', name: 'DriverSignupPage', segment: 'driver-signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-update/driver-update.module#DriverUpdatePageModule', name: 'DriverUpdatePage', segment: 'driver-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ride-map/ride-map.module#RideMapPageModule', name: 'RideMapPage', segment: 'ride-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-driver/user-driver.module#UserDriverPageModule', name: 'UserDriverPage', segment: 'user-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-login/user-login.module#UserLoginPageModule', name: 'UserLoginPage', segment: 'user-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-select/user-select.module#UserSelectPageModule', name: 'UserSelectPage', segment: 'user-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-signup/user-signup.module#UserSignupPageModule', name: 'UserSignupPage', segment: 'user-signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_user_driver_user_driver__["a" /* UserDriverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_login_user_login__["a" /* UserLoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_driver_login_driver_login__["a" /* DriverLoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_signup_user_signup__["a" /* UserSignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_driver_signup_driver_signup__["a" /* DriverSignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_select_user_select__["a" /* UserSelectPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_driver_update_driver_update__["a" /* DriverUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ride_map_ride_map__["a" /* RideMapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12__services_driver_service__["a" /* DriverService */],
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_driver_user_driver__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openUD = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_driver_user_driver__["a" /* UserDriverPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-navbar color="danger" transparent>\n    <ion-title ><b>Cab Rental!</b></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="start" style="background-image: url(\'assets/imgs/cab\'); background-repeat: no-repeat; background-size: cover; width: 100%">\n<!-- <ion-content> -->\n\n  <!-- <img src="assets/imgs/worldmap.jpg" class="back"> -->\n  \n</ion-content>\n\n<ion-footer no-shadow>\n  \n  	<button ion-button color="dark" full (click)="openUD()"> Let\'s Go.! </button>\n  \n</ion-footer>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyAIRBF3zvxerCJK6CfSEQbmVqNVo5CYZ3k",
        authDomain: "cab-rental.firebaseapp.com",
        databaseURL: "https://cab-rental.firebaseio.com",
        projectId: "cab-rental",
        storageBucket: "cab-rental.appspot.com",
        messagingSenderId: "530626465822"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, auth, splashScreen) {
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sahilbansal/Desktop/CabRental/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sahilbansal/Desktop/CabRental/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverService = /** @class */ (function () {
    function DriverService(db) {
        this.db = db;
        this.driverRef = this.db.list('cab-rental');
    }
    DriverService.prototype.getDrivers = function () {
        return this.driverRef;
    };
    DriverService.prototype.addDriver = function (driver) {
        return this.driverRef.push(driver);
    };
    DriverService.prototype.editDriver = function (driver) {
        return this.driverRef.update(driver.key, driver);
    };
    DriverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], DriverService);
    return DriverService;
    var _a;
}());

//# sourceMappingURL=driver.service.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map