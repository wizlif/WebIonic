import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {GlobalProvider} from "../global/global";

/*
  Generated class for the PestsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PestsProvider {

  constructor(public http: Http,
              public global:GlobalProvider) {
  }

  getPests():Observable<any>{
    return this.http.get(this.global.api_url+'/api/pest_info')
      .map(res =>res.json().map(r=>r.value))
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
