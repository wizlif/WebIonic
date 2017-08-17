import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {InputsProvider} from "../../providers/inputs/inputs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FileValidatorDirective} from "../../directives/file-validator/file-validator";
import {FileUploader} from "ng2-file-upload";

/**
 * Generated class for the AddStockPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'add-stock'
})
@Component({
  selector: 'page-add-stock',
  templateUrl: 'add-stock.html',
})
export class AddStockPage implements OnInit{
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:5000/test_upload'});
  private item;
  private progressOpen=false;

  public allcrops;
  private stock: FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public inputsProvider: InputsProvider) {
    this.stock = this.formBuilder.group({
      name: ['', Validators.compose([Validators.pattern(/[a-zA-Z]*/), Validators.required])],
      crops:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
      unit_price:[0,Validators.compose([Validators.pattern(/[0-9]*/), Validators.required])],
      units:['',Validators.required],
      qty:[0,Validators.compose([Validators.pattern(/[0-9]*/), Validators.required])],
      picture: new FormControl('', FileValidatorDirective.validate)
    });
  }
  ngOnInit(): void {
    this.inputsProvider.getCrops()
      .subscribe(crops => this.allcrops = crops,
        err => {
          console.log(err);
        }
      );
  }

  uploadPic(picture) {
    this.uploader.progress=0;
    if (picture === undefined || picture.length === 0) {

    } else {
      this.progressOpen = true;
      this.item = this.uploader.queue[this.uploader.queue.length-1];
      this.uploader.uploadItem(this.item);
    }
  }


}
