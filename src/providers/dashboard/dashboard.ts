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
    return this.http.get(this.global.api_url+'/api/farmers_info')
      .map(res =>{
       res.json().map(r=>(r.value.enterprise==='Village Agent')?v++:f++);
       return {f,v}
      })
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getPayments() {
    return this.http.get(this.global.api_url+'/api/payments')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getEnquiries() {
    return this.http.get(this.global.api_url+'/api/enquiry_info')
      .map(res =>res.json().filter(r=>r.value.status=='new').length)
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getNewOrdersNo() {
    return this.http.get(this.global.api_url+'/api/new_orders_no')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getOrdersChart(){
    return this.http.get(this.global.api_url+'/api/orders_chart')
      .map(res =>res.json())
  .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getSubscribersChart():Observable<any>{
    return this.http.get(this.global.api_url+'/api/subscribers_chart')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getInputsChart():Observable<any>{
    return this.http.get(this.global.api_url+'/api/inputs_chart')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getOrdersPortionChart():Observable<any>{
    return this.http.get(this.global.api_url+'/api/orders_portion')
      .map(res =>res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
