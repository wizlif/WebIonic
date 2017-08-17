import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";
import {LoginPage} from "../../pages/login/login";
@Injectable()
export class GlobalProvider {
  api_url:string="http://localhost:3000";
  months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  role;
  constructor(private toastCtrl: ToastController) {
  }

  toast(message: string, style: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: style
    });

    toast.present();
  }

  isLoggedIn(page){
    if(this.role === undefined){
      return LoginPage;
    }else{
      return page;
    }
  }

}
