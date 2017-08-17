webpackJsonp([18],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralReportModule", function() { return GeneralReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__general_report__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeneralReportModule = (function () {
    function GeneralReportModule() {
    }
    return GeneralReportModule;
}());
GeneralReportModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__general_report__["a" /* GeneralReportPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__general_report__["a" /* GeneralReportPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__general_report__["a" /* GeneralReportPage */]
        ]
    })
], GeneralReportModule);

//# sourceMappingURL=general-report.module.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralReportPage = (function () {
    function GeneralReportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return GeneralReportPage;
}());
GeneralReportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        name: 'general-report',
        segment: 'general-report'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-general-report',template:/*ion-inline-start:"/root/Templates/IONIC/WebIonic/src/pages/general-report/general-report.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>General Report</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 no-padding>\n        <ion-card data-background-color="green">\n          <ion-card-header text-center>\n            Inputs Sales by Sex\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #donutCanvas height="160"></canvas>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 no-padding>\n        <ion-card data-background-color="blue">\n          <ion-card-header text-center>\n            Inputs Sales by Category\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #donutCanvas height="160"></canvas>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 no-padding>\n        <ion-card data-background-color="red">\n          <ion-card-header text-center>\n            Inputs Sales by District\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #donutCanvas height="160"></canvas>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 no-padding>\n        <ion-card data-background-color="purple">\n          <ion-card-header text-center>\n            Inputs Varieties by District\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #donutCanvas height="160"></canvas>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/root/Templates/IONIC/WebIonic/src/pages/general-report/general-report.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], GeneralReportPage);

//# sourceMappingURL=general-report.js.map

/***/ })

});
//# sourceMappingURL=18.js.map