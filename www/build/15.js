webpackJsonp([15],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseDetailsModule", function() { return DiseaseDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disease_details__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DiseaseDetailsModule = (function () {
    function DiseaseDetailsModule() {
    }
    return DiseaseDetailsModule;
}());
DiseaseDetailsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__disease_details__["a" /* DiseaseDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__disease_details__["a" /* DiseaseDetailsPage */])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__disease_details__["a" /* DiseaseDetailsPage */]
        ]
    })
], DiseaseDetailsModule);

//# sourceMappingURL=disease-details.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cash_cash__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_0__cash_cash__["a" /* CashPipe */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__cash_cash__["a" /* CashPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CashPipe = (function (_super) {
    __extends(CashPipe, _super);
    function CashPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CashPipe.prototype.transform = function (value) {
        if (Number(value) < 1000) {
            return _super.prototype.transform.call(this, value || 0);
        }
        else if (Number(value) >= 1000 && Number(value) < 1000000) {
            return _super.prototype.transform.call(this, ((value || 0) / 1000), "1.1-2") + "K";
        }
        else if (Number(value) >= 1000000 && Number(value) < 1000000000) {
            return _super.prototype.transform.call(this, ((value || 0) / 1000000), "1.1-2") + "M";
        }
        else {
            return _super.prototype.transform.call(this, ((value || 0) / 1000000000), "1.1-2") + "B";
        }
    };
    return CashPipe;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DecimalPipe"]));
CashPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'cash',
    })
], CashPipe);

//# sourceMappingURL=cash.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseaseDetailsPage; });
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


var DiseaseDetailsPage = (function () {
    function DiseaseDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiseaseDetailsPage.prototype.ngOnInit = function () {
        this.dis = this.navParams.get('dis');
    };
    return DiseaseDetailsPage;
}());
DiseaseDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        name: 'disease-details',
        segment: 'disease-details'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-disease-details',template:/*ion-inline-start:"/root/Templates/IONIC/WebIonic/src/pages/disease-details/disease-details.html"*/'<!--\n  Generated template for the DiseaseDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>DiseaseDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-img [src]="dis?.photo_url" ></ion-img>\n    <ion-card-content>\n      <ion-card-title text-capitalize>\n        {{dis?.name}}\n      </ion-card-title>\n      <h2><b>Cause</b></h2>\n      <p>{{dis?.cause}}</p>\n      <h2><b>Symptoms</b></h2>\n      <ol>\n        <li *ngFor="let sp of dis?.explanation">{{sp}}</li>\n      </ol>\n      <h2><b>Control</b></h2>\n      <p>{{dis?.control}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/root/Templates/IONIC/WebIonic/src/pages/disease-details/disease-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], DiseaseDetailsPage);

//# sourceMappingURL=disease-details.js.map

/***/ })

});
//# sourceMappingURL=15.js.map