import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {DiseasesProvider} from "../../providers/diseases/diseases";

@IonicPage({
  name:'disease',
  segment:'disease'
})
@Component({
  selector: 'page-disease',
  templateUrl: 'disease.html',
  providers:[DiseasesProvider]
})
export class DiseasePage {
  public maxSize = 5;
  public bigTotalItems = 0;
  public bigCurrentPage = 1;
  public itemsPerPage = 4;

  public diseasesData;
  public diseases;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public alertCtrl:AlertController,
              public diseaseProvider:DiseasesProvider) {
  }

  ngOnInit(){
    this.diseaseProvider.getDiseases()
      .subscribe(dis=>{
        this.diseases=dis;
        this.bigTotalItems = this.diseases.length;
        this.pageChanged({page: 1})
          ,
          err => console.log(err)
      })
  }


  public pageChanged({page}): void {
    this.diseasesData = this.diseases.filter((value, index) => {
      if (index >= this.itemsPerPage * (page - 1) && index < page * this.itemsPerPage) {
        return value;
      }
    });
  }

  viewDiseases(dis){
    let modal = this.modalCtrl.create('disease-details',{dis:dis});
    modal.onDidDismiss(data=>{});
    modal.present();
  }

  addDisease(){
    let modal = this.modalCtrl.create('add-disease');
    modal.onDidDismiss(data=>{});
    modal.present();
  }

  deleteDisease(disease) {
    let prompt = this.alertCtrl.create({
      title: 'Delete',
      message: "Are you sure you want to delete this disease ?",
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
