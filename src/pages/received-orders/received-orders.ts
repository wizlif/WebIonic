import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {OrdersProvider} from "../../providers/orders/orders";
import {OrderDetailsPage} from "../order-details/order-details";

@IonicPage({
  name:'received-orders',
  segment:'received-orders'
})
@Component({
  selector: 'page-received-orders',
  templateUrl: 'received-orders.html',
  providers:[OrdersProvider]
})
export class ReceivedOrdersPage implements OnInit{

  public maxSize = 5;
  public bigTotalItems = 0;
  public bigCurrentPage = 1;
  public numPages = 0;
  public itemsPerPage = 8;

  public ordersData;
public orders;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private ordersProvider: OrdersProvider) {
  }

  ngOnInit(): void {
    this.ordersProvider.getOrders()
      .subscribe(orders => {
        this.orders=orders;
        this.bigTotalItems = this.orders.length;
        this.pageChanged({page: 1})
        ,
          err => console.log(err)
      });
  }

  public pageChanged({page}): void {
    this.ordersData = this.orders.filter((value, index) => {
      if (index >= this.itemsPerPage * (page - 1) && index < page * this.itemsPerPage) {
        return value;
      }
    });
  }

  public viewDetails(details){
    let modal = this.modalCtrl.create(OrderDetailsPage,{'order-details':details});
    modal.onDidDismiss(data=>{});
    modal.present();
  }

}
