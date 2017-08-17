import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalProvider} from "../global/global";
import {Observable} from "rxjs/Rx";
import {Stock} from "../../pages/stock/stock.metadata";

/*
  Generated class for the InputsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class InputsProvider {
  constructor(public http: Http,
              public global: GlobalProvider) {

  }

  getInputs(): Observable<Stock[]> {
    return this.http.get( '/api/inputs_all')
      .map(res => res.json().map(r=>r.value))
      .catch((error: any) => Observable.throw(error.json() || 'Server error'))
  }

  getCrops(): Observable<any>{
    return this.http.get( '/api/all_crops')
      .map(res => res.json().map(r=>r.value))
      .catch((error: any) => Observable.throw(error.json() || 'Server error'))
  }

  getGeneralInfo(url:string): Observable<any>{
    return this.http.get('/api/'+url)
      .map(res => res.json().map(r=>r.value))
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
