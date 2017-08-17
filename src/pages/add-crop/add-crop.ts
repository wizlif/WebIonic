import {Component} from '@angular/core';
import {IonicPage,ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FileValidatorDirective} from "../../directives/file-validator/file-validator";
import {FileUploader} from "ng2-file-upload";

@IonicPage({
  name: 'add-crop'
})
@Component({
  selector: 'page-add-crop',
  templateUrl: 'add-crop.html',
})
export class AddCropPage {
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:5000/test_upload'});
  private item;
  private progressOpen=false;
  private crop: FormGroup;

  constructor(public viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.crop = this.formBuilder.group({
      crops: ['', Validators.compose([Validators.pattern(/[a-zA-Z]*/), Validators.required])],
      picture: new FormControl('', FileValidatorDirective.validate)
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(
    );
  }

  addCrop(crop) {
    this.viewCtrl.dismiss(
      crop
    );
  }

  log(value) {
    console.log(value);
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
