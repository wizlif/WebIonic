import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalProvider} from "../global/global";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the EnquiriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EnquiriesProvider {

  constructor(public http: Http,
              public global:GlobalProvider) {
  }

  getEnquiries():Observable<any>{
    return this.http.get(this.global.api_url+'/api/enquiry_info')
      .map(res =>res.json().map(r=>r.value))
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
