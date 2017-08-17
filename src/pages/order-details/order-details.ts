import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'order-details',
  segment:'order-details'
})
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage implements OnInit{
  public details;
  public orderA;
  public orderData;

  public maxSize = 5;
  public bigTotalItems = 0;
  public bigCurrentPage = 1;
  public numPages = 0;
  public itemsPerPage = 2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    if(this.navParams.get('order-details')){
      this.details = this.navParams.get('order-details');
      this.orderData = this.details.order;
      this.bigTotalItems = this.orderData.length;
      this.pageChanged({page: 1});
    }
  }

  public pageChanged({page}): void {
    this.orderA = this.orderData.filter((value, index) => {
      if (index >= this.itemsPerPage * (page - 1) && index < page * this.itemsPerPage) {
        return value;
      }
    });
  }




}
