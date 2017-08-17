import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  name:'general-report',
  segment:'general-report'
})
@Component({
  selector: 'page-general-report',
  templateUrl: 'general-report.html',
})
export class GeneralReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
