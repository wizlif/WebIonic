import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalProvider} from "../global/global";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  constructor(public http: Http,
              public global:GlobalProvider) {
  }

  getWeather(){
    return this.http.get(this.global.api_url+'/api/weather_info')
      .map(res => res.json().map(r=>r.key))
      .catch((error: any) => Observable.throw(error.json() || 'Server error'))
  }
}
