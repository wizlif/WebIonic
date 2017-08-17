import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {EnquiriesProvider} from "../../providers/enquiries/enquiries";

@IonicPage({
  name:'enquiries',
  segment:'enquiries'
})

@Component({
  selector: 'page-enquiries',
  templateUrl: 'enquiries.html',
  providers:[EnquiriesProvider]
})
export class EnquiriesPage {
  enquiries;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public enquiriesProvider:EnquiriesProvider) {
  }

  ngOnInit(){
    this.enquiriesProvider.getEnquiries()
      .subscribe(enq=>this.enquiries=enq)
  }

  viewEnquiries(enq){
    let modal = this.modalCtrl.create('enquiry-details',{enq:enq});
    modal.onDidDismiss(data=>{});
    modal.present();
  }

}
