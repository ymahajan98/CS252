import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Driver } from '../model/driver/driver.model';

@Injectable()

export class DriverService{
	private driverRef = this.db.list<Driver>('cab-rental');

	constructor(private db: AngularFireDatabase){

	}

	getDrivers(){
		return this.driverRef;
	}

	addDriver(driver: Driver){
		return this.driverRef.push(driver);
	}

	editDriver(driver: Driver){
		return this.driverRef.update(driver.key, driver);
	}
}