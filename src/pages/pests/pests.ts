import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PestsProvider} from "../../providers/pests/pests";

@IonicPage({
  name:'pests',
  segment:'pests'
})
@Component({
  selector: 'page-pests',
  templateUrl: 'pests.html',
  providers:[PestsProvider]
})
export class PestsPage {
  public maxSize = 5;
  public bigTotalItems = 0;
  public bigCurrentPage = 1;
  public itemsPerPage = 4;

  public pestsData;
  public pests;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public alertCtrl:AlertController,
              public pestsProvider:PestsProvider) {
  }

  ngOnInit(){
    this.pestsProvider.getPests()
      .subscribe(pst=>{
        this.pests=pst;
        this.bigTotalItems = this.pests.length;
        this.pageChanged({page: 1})
          ,
          err => console.log(err)
      })
  }

  public pageChanged({page}): void {
    this.pestsData = this.pests.filter((value, index) => {
      if (index >= this.itemsPerPage * (page - 1) && index < page * this.itemsPerPage) {
        return value;
      }
    });
  }


  viewPests(pest){
    // let modal = this.modalCtrl.create('disease-details',{dis:dis});
    // modal.onDidDismiss(data=>{});
    // modal.present();
  }

  addPest(){
    let modal = this.modalCtrl.create('add-pest');
    modal.onDidDismiss(data=>{});
    modal.present();
  }

  deletePest(pest) {
    let prompt = this.alertCtrl.create({
      title: 'Delete',
      message: "Are you sure you want to delete this pest ?",
      buttons: [
        {
          text: 'No',
          handler: data => {
          }
        },
        {
          text: 'Yes',
          handler: data => {

          }
        }
      ]
    });

    prompt.present()
  }


}
