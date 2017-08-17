import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  name:'payments-report',
  segment:'payments-report'
})
@Component({
  selector: 'page-payments-report',
  templateUrl: 'payments-report.html',
})
export class PaymentsReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
