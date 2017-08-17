import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import {GlobalProvider} from "../global/global";
import {Observable} from "rxjs/Observable";
@Injectable()
export class DashboardProvider {

  constructor(public http: Http,
              public global:GlobalProvider) {
  }

  getFarmers() {
    let f:number=0;
    let v:number=0;
    return this.http.get('/api/farmers_info')
      .map(res =>{
       res.json().map(r=>(r.value.enterprise==='Village Agent')?v++:f++);
       return {f,v}
      })
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getPayments() {
    return this.http.get('/api/payments')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getEnquiries() {
    return this.http.get('/api/enquiry_info')
      .map(res =>res.json().filter(r=>r.value.status=='new').length)
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getNewOrdersNo() {
    return this.http.get('/api/new_orders_no')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getOrdersChart(){
    return this.http.get('/api/orders_chart')
      .map(res =>res.json())
  .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getSubscribersChart():Observable<any>{
    return this.http.get('/api/subscribers_chart')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getInputsChart():Observable<any>{
    return this.http.get('/api/inputs_chart')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getOrdersPortionChart():Observable<any>{
    return this.http.get('/api/orders_portion')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
