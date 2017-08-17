import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController, Nav} from 'ionic-angular';
import {MenuOptionModel, SideMenuComponent} from "../components/side-menu/side-menu";
import {SIDE_MENU} from "./app.metadata";
import {LoginPage} from "../pages/login/login";
import {GlobalProvider} from "../providers/global/global";

@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  @ViewChild(Nav) nav: Nav;
  @ViewChild(SideMenuComponent) sideMenu: SideMenuComponent;

  sidemenu;

  root:any;

  constructor(private menuCtrl: MenuController,private global:GlobalProvider) {
    this.sidemenu=SIDE_MENU;

    if(this.global.role === undefined){
      this.root= LoginPage;
    }else{
      this.root='dashboard';
    }
  }

  // Redirect the user to the selected page
  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {

      // Collapse all the options
      this.sideMenu.collapseAllOptions();

      // Redirect to the selected page
      this.nav.setRoot(option.component || 'dashboard', { 'title': option.displayName });
    });
  }

  public collapseMenuOptions(): void {
    // Collapse all the options
    this.sideMenu.collapseAllOptions();
  }

}
