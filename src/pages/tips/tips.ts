import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  name:'tips',
  segment:'tips'
})
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
