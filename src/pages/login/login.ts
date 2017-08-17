import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Http} from "@angular/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private login:FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl:LoadingController,
              private http:Http,
              private formBuilder: FormBuilder,
              public global: GlobalProvider) {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(){
    let loader = this.loadingCtrl.create({
      content: "Processing..."
    });
    loader.present();

    new Promise(resolve => {
      this.http.post('/api/login', this.login.value)
        .map(res => res.json())
        .subscribe((data) => {
            if(data.exist){
              loader.dismiss();
              this.global.role=data.role;
              this.navCtrl.setRoot('dashboard');
            }else {
              loader.dismiss();
              this.global.toast("Invalid username or password.","toast-error");
            }
          },
          (err)=>{
            loader.dismiss();
            this.global.toast("Check your internet connection.","toast-error");
          });
    });
  }

}
