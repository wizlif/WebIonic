import {MenuOptionModel, SideMenuComponent} from "../components/side-menu/side-menu";
import {MyApp} from "./app.component";
import {IonicApp, IonicErrorHandler} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {GlobalProvider} from "../providers/global/global";
import {ErrorHandler} from "@angular/core";
import {LoginPage} from "../pages/login/login";

export const DECLARATIONS=[
  MyApp,
  SideMenuComponent,
  LoginPage
];

export const IMPORTS=[
  HttpModule,
  BrowserModule
];

export const COMPONENTS=[
  MyApp,
  LoginPage
];

export const BOOTSTRAP=[IonicApp];

export const PROVIDERS=[
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  GlobalProvider
];

export const SIDE_MENU:Array<MenuOptionModel>=[
  {
    iconRightName:null,
    iconLeftName:"ion-ios-pie",
    displayName:"Dashboard",
    component:'dashboard',
    isLogin:false,
    isLogout:false
  },
  {
    iconRightName:'ios-arrow-dropdown-circle',
    iconLeftName:'ion-ios-pricetags',
    displayName:"Orders",
    component:null,
    isLogin:false,
    isLogout:false,
    subItems:[
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Stock",
        component:'stock',
        isLogin:false,
        isLogout:false
      },
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Received Orders",
        component:'received-orders',
        isLogin:false,
        isLogout:false
      },
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Complete Orders",
        component:'complete-orders',
        isLogin:false,
        isLogout:false
      }
    ]
  },
  {
    iconRightName:'ios-arrow-dropdown-circle',
    iconLeftName:'ion-ios-bug',
    displayName:"Diagnosis",
    component:null,
    isLogin:false,
    isLogout:false,
    subItems:[
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Disease",
        component:'disease',
        isLogin:false,
        isLogout:false
      },
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Pests",
        component:'pests',
        isLogin:false,
        isLogout:false
      },
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Enquiries",
        component:'enquiries',
        isLogin:false,
        isLogout:false
      }
    ]
  },
  {
    iconRightName:'ios-arrow-dropdown-circle',
    iconLeftName:"ion-ios-leaf",
    displayName:"Agronomical Info",
    component:null,
    isLogin:false,
    isLogout:false,
    subItems:[
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Tips",
        component:'tips',
        isLogin:false,
        isLogout:false
      }
    ]
  },
  {
    iconRightName:null,
    iconLeftName:"ion-ios-rainy",
    displayName:"Weather",
    component:'weather',
    isLogin:false,
    isLogout:false
  },
  {
    iconRightName:'ios-arrow-dropdown-circle',
    iconLeftName:'ion-ios-book',
    displayName:"Reports",
    component:null,
    isLogin:false,
    isLogout:false,
    subItems:[
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"General",
        component:'general-report',
        isLogin:false,
        isLogout:false
      },
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Payments",
        component:'payments-report',
        isLogin:false,
        isLogout:false
      },
      {
        iconRightName:null,
        iconLeftName:null,
        displayName:"Sales",
        component:'sales-report',
        isLogin:false,
        isLogout:false
      }
    ]
  }
]
