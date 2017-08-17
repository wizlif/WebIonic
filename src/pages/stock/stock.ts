import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {InputsProvider} from "../../providers/inputs/inputs";

@IonicPage({
  name:'stock',
  segment:'stock'
})
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
  providers:[InputsProvider]
})
export class StockPage implements OnInit {
  pages;

  public maxSize = 5;
  public bigTotalItems = 0;
  public bigCurrentPage = 1;
  public itemsPerPage = 4;


  public bigTotalItemsCrop = 0;
  public bigCurrentPageCrop = 1;

  public inputs;
  public inputsData;

  public crops;
  public cropsData;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public inputsProvider: InputsProvider) {
    this.pages = "stock";
  }

  ngOnInit() {
    this.inputsProvider.getInputs()
      .subscribe(inputs => {
          this.inputs = inputs;
          this.bigTotalItems = this.inputs.length;
          this.pageChanged({page: 1});
        },
        err => {
          console.log(err);
        }
      );

    this.inputsProvider.getGeneralInfo('all_crops')
      .subscribe(crops => {
          this.crops = crops;
          this.bigTotalItemsCrop = this.crops.length;
          this.pageChangedCrops({page: 1});
        },
        err => {
          console.log(err);
        }
      );
  }

  public pageChanged({page}): void {
    this.inputsData = this.inputs.filter((value, index) => {
      if (index >= this.itemsPerPage * (page - 1) && index < page * this.itemsPerPage) {
        return value;
      }
    });
  }

  public pageChangedCrops({page}): void {
    this.cropsData = this.crops.filter((value, index) => {
      if (index >= this.itemsPerPage * (page - 1) && index < page * this.itemsPerPage) {
        return value;
      }
    });
  }

  addCrop(){
    let modal = this.modalCtrl.create('add-crop');
    modal.onDidDismiss(data=>{});
    modal.present();
  }

  addStock(){
    let modal = this.modalCtrl.create('add-stock');
    modal.onDidDismiss(data=>{});
    modal.present();
  }



}
