import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalProvider} from "../global/global";
import {Observable} from "rxjs/Observable";
@Injectable()
export class DiseasesProvider {

  constructor(public http: Http,public global:GlobalProvider) {
  }

  getDiseases():Observable<any>{
    return this.http.get('/api/disease_info')
      .map(res =>res.json().map(r=>r.value))
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
