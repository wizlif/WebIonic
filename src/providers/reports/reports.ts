import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalProvider} from "../global/global";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ReportsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReportsProvider {

  constructor(public http: Http,
              public global:GlobalProvider) {
  }

  getGenderStat() {
    return this.http.get(this.global.api_url+'/api/gender_order_stat')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getDistrictStat() {
    return this.http.get(this.global.api_url+'/api/district_order_stat')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
