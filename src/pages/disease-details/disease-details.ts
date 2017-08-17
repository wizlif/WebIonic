import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  name:'disease-details',
  segment:'disease-details'
})
@Component({
  selector: 'page-disease-details',
  templateUrl: 'disease-details.html',
})
export class DiseaseDetailsPage {
dis;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.dis=this.navParams.get('dis')
  }

}
