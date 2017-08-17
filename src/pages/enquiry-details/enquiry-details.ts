import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({
  name:'enquiry-details',
  segment:'enquiry-details'
})
@Component({
  selector: 'page-enquiry-details',
  templateUrl: 'enquiry-details.html',
})
export class EnquiryDetailsPage {
  enq;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.enq=this.navParams.get('enq');
    console.log(this.enq)
  }

}
