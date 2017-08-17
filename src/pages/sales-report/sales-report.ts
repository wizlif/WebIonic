import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  name:'sales-report',
  segment:'sales-report'
})
@Component({
  selector: 'page-sales-report',
  templateUrl: 'sales-report.html',
})
export class SalesReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesReportPage');
  }

}
