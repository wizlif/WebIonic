import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FileUploader} from "ng2-file-upload";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FileValidatorDirective} from "../../directives/file-validator/file-validator";
import {InputsProvider} from "../../providers/inputs/inputs";

@IonicPage({
  name:'add-disease',
  segment:'add-disease'
})
@Component({
  selector: 'page-add-disease',
  templateUrl: 'add-disease.html',
})
export class AddDiseasePage {
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:5000/test_upload'});
  private item;
  private progressOpen=false;
  private crop: FormGroup;

  public allcrops;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public inputsProvider: InputsProvider,
              private formBuilder: FormBuilder) {
    this.crop = this.formBuilder.group({
      name: ['', Validators.compose([Validators.pattern(/[a-zA-Z]*/), Validators.required])],
      cause: ['', Validators.compose([Validators.pattern(/[a-zA-Z]*/), Validators.required])],
      crops: ['', Validators.compose([ Validators.required])],
      control: ['', Validators.compose([Validators.pattern(/[a-zA-Z]*/), Validators.required])],
      symptoms: ['', Validators.compose([Validators.pattern(/[a-zA-Z]*/), Validators.required])],
      picture: new FormControl('', FileValidatorDirective.validate)
    });
  }

  ngOnInit(){
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
