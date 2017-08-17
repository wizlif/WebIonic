webpackJsonp([19],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DECLARATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IMPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOOTSTRAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SIDE_MENU; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_side_menu_side_menu__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(75);








var DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_0__components_side_menu_side_menu__["a" /* SideMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
];
var IMPORTS = [
    __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
];
var BOOTSTRAP = [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]];
var PROVIDERS = [
    { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
    __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]
];
var SIDE_MENU = [
    {
        iconRightName: null,
        iconLeftName: "ion-ios-pie",
        displayName: "Dashboard",
        component: 'dashboard',
        isLogin: false,
        isLogout: false
    },
    {
        iconRightName: 'ios-arrow-dropdown-circle',
        iconLeftName: 'ion-ios-pricetags',
        displayName: "Orders",
        component: null,
        isLogin: false,
        isLogout: false,
        subItems: [
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Stock",
                component: 'stock',
                isLogin: false,
                isLogout: false
            },
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Received Orders",
                component: 'received-orders',
                isLogin: false,
                isLogout: false
            },
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Complete Orders",
                component: 'complete-orders',
                isLogin: false,
                isLogout: false
            }
        ]
    },
    {
        iconRightName: 'ios-arrow-dropdown-circle',
        iconLeftName: 'ion-ios-bug',
        displayName: "Diagnosis",
        component: null,
        isLogin: false,
        isLogout: false,
        subItems: [
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Disease",
                component: 'disease',
                isLogin: false,
                isLogout: false
            },
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Pests",
                component: 'pests',
                isLogin: false,
                isLogout: false
            },
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Enquiries",
                component: 'enquiries',
                isLogin: false,
                isLogout: false
            }
        ]
    },
    {
        iconRightName: 'ios-arrow-dropdown-circle',
        iconLeftName: "ion-ios-leaf",
        displayName: "Agronomical Info",
        component: null,
        isLogin: false,
        isLogout: false,
        subItems: [
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Tips",
                component: 'tips',
                isLogin: false,
                isLogout: false
            }
        ]
    },
    {
        iconRightName: null,
        iconLeftName: "ion-ios-rainy",
        displayName: "Weather",
        component: 'weather',
        isLogin: false,
        isLogout: false
    },
    {
        iconRightName: 'ios-arrow-dropdown-circle',
        iconLeftName: 'ion-ios-book',
        displayName: "Reports",
        component: null,
        isLogin: false,
        isLogout: false,
        subItems: [
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "General",
                component: 'general-report',
                isLogin: false,
                isLogout: false
            },
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Payments",
                component: 'payments-report',
                isLogin: false,
                isLogout: false
            },
            {
                iconRightName: null,
                iconLeftName: null,
                displayName: "Sales",
                component: 'sales-report',
                isLogin: false,
                isLogout: false
            }
        ]
    }
];
//# sourceMappingURL=app.metadata.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
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


var SideMenuComponent = (function () {
    function SideMenuComponent(renderer, domCtrl) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.accordionMode = false;
        // Inputs for custom item sizes
        this.iosItemHeight = 50;
        this.mdItemHeight = 50;
        this.wpItemHeight = 50;
        // Outputs
        this.selectOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    // ---------------------------------------------------
    // PUBLIC methods
    // ---------------------------------------------------
    // Send the selected option to the caller component
    SideMenuComponent.prototype.select = function (option) {
        this.selectOption.emit(option);
    };
    // Toggle the sub options of the selected item
    SideMenuComponent.prototype.toggleItemOptions = function (optionsDivElement, arrowIcon, itemsCount) {
        var itemHeight = 50;
        if (this.accordionMode) {
            this.collapseAllOptionsExceptSelected(optionsDivElement);
            this.resetAllIconsExceptSelected(arrowIcon);
        }
        this.toggleOptionSubItems(optionsDivElement, itemHeight + 1, itemsCount);
        this.toggleOptionIcon(arrowIcon);
    };
    // Reset the entire menu
    SideMenuComponent.prototype.collapseAllOptions = function () {
        var _this = this;
        this.optionDivs.forEach(function (optionDiv) {
            _this.hideSubItems(optionDiv.nativeElement);
        });
        this.headerIcons.forEach(function (headerIcon) {
            _this.resetIcon(headerIcon.nativeElement);
        });
    };
    // Create fake options to populate the side menu
    // ---------------------------------------------------
    // PRIVATE methods
    // ---------------------------------------------------
    // Toggle the sub items of the selected option
    SideMenuComponent.prototype.toggleOptionSubItems = function (optionsContainer, elementHeight, itemsCount) {
        var _this = this;
        this.domCtrl.write(function () {
            _this.subItemsAreExpanded(optionsContainer)
                ? _this.renderer.setElementStyle(optionsContainer, 'height', '0px')
                : _this.renderer.setElementStyle(optionsContainer, 'height', (elementHeight * itemsCount) + "px");
        });
    };
    // Toggle the arrow icon of the selected option
    SideMenuComponent.prototype.toggleOptionIcon = function (arrowIcon) {
        var _this = this;
        this.domCtrl.write(function () {
            _this.iconIsRotated(arrowIcon)
                ? _this.renderer.setElementClass(arrowIcon, 'rotate', false)
                : _this.renderer.setElementClass(arrowIcon, 'rotate', true);
        });
    };
    // Reset the arrow icon of all the options except the selected option
    SideMenuComponent.prototype.resetAllIconsExceptSelected = function (selectedArrowIcon) {
        var _this = this;
        this.headerIcons.forEach(function (headerIcon) {
            var iconElement = headerIcon.nativeElement;
            if (iconElement.id !== selectedArrowIcon.id && _this.iconIsRotated(iconElement)) {
                _this.resetIcon(iconElement);
            }
        });
    };
    // Collapse the sub items of all the options except the selected option
    SideMenuComponent.prototype.collapseAllOptionsExceptSelected = function (selectedOptionsContainer) {
        var _this = this;
        this.optionDivs.forEach(function (optionDiv) {
            var optionElement = optionDiv.nativeElement;
            if (optionElement.id !== selectedOptionsContainer.id && _this.subItemsAreExpanded(optionElement)) {
                _this.hideSubItems(optionElement);
            }
        });
    };
    // Return true if sub items are expanded
    SideMenuComponent.prototype.subItemsAreExpanded = function (element) {
        return element.style.height !== '' && element.style.height !== '0px';
    };
    // Return true if the icon is rotated
    SideMenuComponent.prototype.iconIsRotated = function (element) {
        return element.classList.contains('rotate');
    };
    // Collapse the sub items of the selected option
    SideMenuComponent.prototype.hideSubItems = function (optionsContainer) {
        var _this = this;
        this.domCtrl.write(function () {
            _this.renderer.setElementStyle(optionsContainer, 'height', '0px');
        });
    };
    // Reset the arrow icon of the selected option
    SideMenuComponent.prototype.resetIcon = function (arrowIcon) {
        var _this = this;
        this.domCtrl.write(function () {
            _this.renderer.setElementClass(arrowIcon, 'rotate', false);
        });
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('options'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], SideMenuComponent.prototype, "optionDivs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('headerIcon'),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "headerIcons", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SideMenuComponent.prototype, "options", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SideMenuComponent.prototype, "accordionMode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SideMenuComponent.prototype, "iosItemHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SideMenuComponent.prototype, "mdItemHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SideMenuComponent.prototype, "wpItemHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "selectOption", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'side-menu',template:/*ion-inline-start:"/root/Templates/IONIC/WebIonic/src/components/side-menu/side-menu.html"*/'<div class="main-page">\n<ion-list no-margin no-lines>\n  <ng-template ngFor let-option [ngForOf]="options" let-i="index">\n\n    <!-- It is a simple option -->\n    <ng-template [ngIf]="!option.subItems">\n      <ion-item class="header" (click)="select(option)">\n        <ion-icon *ngIf="option.iconLeftName" [class]="option.iconLeftName" item-left primary-font></ion-icon>\n        {{ option.displayName }}\n        <ion-icon *ngIf="option.iconRightName" [name]="option.iconRightName" item-right primary-font></ion-icon>\n      </ion-item>\n    </ng-template>\n\n    <!-- It has nested options -->\n    <ng-template [ngIf]="option.subItems && option.subItems.length > 0">\n\n      <ion-list no-margin class="accordion-menu" no-lines>\n        <ion-item class="header" tappable (click)="toggleItemOptions(options, headerIcon, option.subItems.length)" >\n          <ion-icon #headerIcon [id]="\'header-icon-\' + i" class="header-icon" [class]="option.iconLeftName" item-left primary-font></ion-icon>\n          {{ option.displayName }}\n          <ion-icon #headerIcon [id]="\'header-icon-\' + i" class="header-icon" [name]="option.iconRightName" item-right primary-font></ion-icon>\n        </ion-item>\n        <div #options [id]="\'sub-item-\' + i" class="options" primary-background-lightest>\n          <ng-template ngFor let-item [ngForOf]="option.subItems">\n            <ion-item (click)="select(item)">\n              <ion-icon *ngIf="item.iconLeftName" [class]="item.iconLeftName" item-left></ion-icon>\n              {{ item.displayName }}\n              <ion-icon *ngIf="item.iconRightName" [name]="item.iconRightName" item-right></ion-icon>\n            </ion-item>\n          </ng-template>\n        </div>\n      </ion-list>\n\n    </ng-template>\n\n  </ng-template>\n</ion-list>\n</div>\n'/*ion-inline-end:"/root/Templates/IONIC/WebIonic/src/components/side-menu/side-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DomController */]])
], SideMenuComponent);

//# sourceMappingURL=side-menu.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-crop/add-crop.module": [
		253,
		12
	],
	"../pages/add-disease/add-disease.module": [
		254,
		3
	],
	"../pages/add-pest/add-pest.module": [
		255,
		2
	],
	"../pages/add-stock/add-stock.module": [
		256,
		1
	],
	"../pages/complete-orders/complete-orders.module": [
		258,
		6
	],
	"../pages/dashboard/dashboard.module": [
		259,
		11
	],
	"../pages/disease-details/disease-details.module": [
		261,
		15
	],
	"../pages/disease/disease.module": [
		260,
		4
	],
	"../pages/enquiries/enquiries.module": [
		262,
		13
	],
	"../pages/enquiry-details/enquiry-details.module": [
		263,
		14
	],
	"../pages/general-report/general-report.module": [
		264,
		18
	],
	"../pages/order-details/order-details.module": [
		257,
		10
	],
	"../pages/payments-report/payments-report.module": [
		265,
		17
	],
	"../pages/pests/pests.module": [
		266,
		8
	],
	"../pages/received-orders/received-orders.module": [
		267,
		5
	],
	"../pages/sales-report/sales-report.module": [
		268,
		16
	],
	"../pages/stock/stock.module": [
		269,
		0
	],
	"../pages/tips/tips.module": [
		270,
		9
	],
	"../pages/weather/weather.module": [
		271,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_side_menu_side_menu__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_metadata__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(menuCtrl, global) {
        this.menuCtrl = menuCtrl;
        this.global = global;
        this.sidemenu = __WEBPACK_IMPORTED_MODULE_3__app_metadata__["f" /* SIDE_MENU */];
        if (this.global.role === undefined) {
            this.root = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.root = 'dashboard';
        }
    }
    // Redirect the user to the selected page
    MyApp.prototype.selectOption = function (option) {
        var _this = this;
        this.menuCtrl.close().then(function () {
            // Collapse all the options
            _this.sideMenu.collapseAllOptions();
            // Redirect to the selected page
            _this.nav.setRoot(option.component || 'dashboard', { 'title': option.displayName });
        });
    };
    MyApp.prototype.collapseMenuOptions = function () {
        // Collapse all the options
        this.sideMenu.collapseAllOptions();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__components_side_menu_side_menu__["a" /* SideMenuComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_side_menu_side_menu__["a" /* SideMenuComponent */])
], MyApp.prototype, "sideMenu", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/root/Templates/IONIC/WebIonic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n    <!-- Side Menu -->\n    <side-menu [accordionMode]="true" [options]="sidemenu" (selectOption)="selectOption($event)"></side-menu>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="root" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/root/Templates/IONIC/WebIonic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_metadata__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: __WEBPACK_IMPORTED_MODULE_1__app_metadata__["c" /* DECLARATIONS */],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__app_metadata__["d" /* IMPORTS */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-crop/add-crop.module#AddCropPageModule', name: 'add-crop', segment: 'add-crop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-disease/add-disease.module#AddDiseaseModule', name: 'add-disease', segment: 'add-disease', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-pest/add-pest.module#AddPestModule', name: 'add-pest', segment: 'add-pest', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-stock/add-stock.module#AddStockPageModule', name: 'add-stock', segment: 'add-stock', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-details/order-details.module#OrderDetailsModule', name: 'order-details', segment: 'order-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/complete-orders/complete-orders.module#CompleteOrdersModule', name: 'complete-orders', segment: 'complete-orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardModule', name: 'dashboard', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/disease/disease.module#DiseaseModule', name: 'disease', segment: 'disease', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/disease-details/disease-details.module#DiseaseDetailsModule', name: 'disease-details', segment: 'disease-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enquiries/enquiries.module#EnquiriesModule', name: 'enquiries', segment: 'enquiries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enquiry-details/enquiry-details.module#EnquiryDetailsModule', name: 'enquiry-details', segment: 'enquiry-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/general-report/general-report.module#GeneralReportModule', name: 'general-report', segment: 'general-report', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payments-report/payments-report.module#PaymentsReportModule', name: 'payments-report', segment: 'payments-report', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pests/pests.module#PestsModule', name: 'pests', segment: 'pests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/received-orders/received-orders.module#ReceivedOrdersModule', name: 'received-orders', segment: 'received-orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sales-report/sales-report.module#SalesReportModule', name: 'sales-report', segment: 'sales-report', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stock/stock.module#StockModule', name: 'stock', segment: 'stock', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tips/tips.module#TipsModule', name: 'tips', segment: 'tips', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/weather/weather.module#WeatherPageModule', name: 'weather', segment: 'weather', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: __WEBPACK_IMPORTED_MODULE_1__app_metadata__["a" /* BOOTSTRAP */],
        entryComponents: __WEBPACK_IMPORTED_MODULE_1__app_metadata__["b" /* COMPONENTS */],
        providers: __WEBPACK_IMPORTED_MODULE_1__app_metadata__["e" /* PROVIDERS */]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalProvider = (function () {
    function GlobalProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.api_url = "http://localhost:3000";
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    GlobalProvider.prototype.toast = function (message, style) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: style
        });
        toast.present();
    };
    GlobalProvider.prototype.isLoggedIn = function (page) {
        if (this.role === undefined) {
            return __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        }
        else {
            return page;
        }
    };
    return GlobalProvider;
}());
GlobalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
], GlobalProvider);

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, http, formBuilder, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.global = global;
        this.login = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    }
    LoginPage.prototype.submit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Processing..."
        });
        loader.present();
        new Promise(function (resolve) {
            _this.http.post('/api/login', _this.login.value)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.exist) {
                    loader.dismiss();
                    _this.global.role = data.role;
                    _this.navCtrl.setRoot('dashboard');
                }
                else {
                    loader.dismiss();
                    _this.global.toast("Invalid username or password.", "toast-error");
                }
            }, function (err) {
                loader.dismiss();
                _this.global.toast("Check your internet connection.", "toast-error");
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/root/Templates/IONIC/WebIonic/src/pages/login/login.html"*/'<ion-content padding>\n  <ion-grid fixed>\n    <form [formGroup]="login">\n      <ion-row>\n        <ion-col col-12 text-center>\n          <h1 ion-text color="primary">EzyAgric - Extension</h1>\n        </ion-col>\n        <ion-col col-12>\n          <ion-list inset>\n            <ion-item>\n              <ion-label floating>Username</ion-label>\n              <ion-input type="text" formControlName="username" [(ngModel)]="username"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>Password</ion-label>\n              <ion-input type="password" formControlName="password" [(ngModel)]="password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <button style="height: 5rem" ion-button block type="submit" [disabled]="!login.valid" (click)="submit()">Login</button>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n<ion-footer text-center>\n  <h6>© 2017 Akorion Co LTD     |    Terms and conditions     |   Powered by Akorion</h6>\n</ion-footer>\n'/*ion-inline-end:"/root/Templates/IONIC/WebIonic/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map