import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalProvider} from "../global/global";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrdersProvider {

  constructor(public http: Http,
              public global: GlobalProvider) {
  }

  getOrders()
  {
    return this.http.get('/api/Orders_info')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'))
  }

  // getting orders that were finished
  getCompleteOrders() {
    return this.http.get('/api/Orders_info')
      .map(res =>res.json().filter((item) => item.key.status === 'complete'));
  }

}
