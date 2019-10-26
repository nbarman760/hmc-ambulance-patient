(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-car-book-car-book-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/car-book/car-book.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/car-book/car-book.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>car book</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"whitebg\">\n\n    <!--<ion-item>-->\n      <!--<ion-label>Location</ion-label>-->\n    <!--</ion-item>-->\n        <ion-grid class=\"carbook\">\n            <ion-row>\n                <ion-col [size]=\"12\">\n                    <div class=\"source\">\n                        <ion-row>\n                            <ion-label>PICKUP FROM</ion-label>\n                            <ion-searchbar  (click)=\"getPickUpLocation('pickup')\" #pickup=\"ngModel\" name=\"pickup\" [(ngModel)]=\"location.pickup\" placeholder=\"Pickup location\"></ion-searchbar>\n                        </ion-row>\n                    </div>\n                </ion-col>\n                <ion-col [size]=\"12\">\n                    <div class=\"source\">\n                        <ion-row>\n                            <ion-label>DROP LOCATION</ion-label>\n                            <ion-searchbar  (click)=\"getPickUpLocation('drop')\" name=\"dropoff\" #dropoff=\"ngModel\" [(ngModel)]=\"location.dropoff\" placeholder=\"Drop location\"></ion-searchbar>\n                        </ion-row>\n                    </div>\n                </ion-col>\n                <ion-col [size]=\"12\">\n                    <div class=\"source\">\n\n                            <ion-label>Pickup Date</ion-label>\n\n                            <ion-card>\n                            <ion-datetime  name=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"datetime\" placeholder=\"Pickup Date\"></ion-datetime>\n                            </ion-card>\n                    </div>\n                </ion-col>\n                <ion-col [size]=\"12\">\n                    <ion-button expand=\"block\" color=\"dark\"  [disabled]=\"(pickup == '' || dropoff == '')\" (click)=\"next()\">Book Now {{ price | currency: '₹' }} </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/car-book/car-book.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/car-book/car-book.module.ts ***!
  \***************************************************/
/*! exports provided: CarBookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookPageModule", function() { return CarBookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _car_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-book.page */ "./src/app/pages/car-book/car-book.page.ts");







const routes = [
    {
        path: '',
        component: _car_book_page__WEBPACK_IMPORTED_MODULE_6__["CarBookPage"]
    }
];
let CarBookPageModule = class CarBookPageModule {
};
CarBookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_car_book_page__WEBPACK_IMPORTED_MODULE_6__["CarBookPage"]]
    })
], CarBookPageModule);



/***/ }),

/***/ "./src/app/pages/car-book/car-book.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/car-book/car-book.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-searchbar {\n  --background: none;\n}\n\nion-label {\n  color: #444;\n  margin: 8px;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.source-list {\n  z-index: 99999;\n  position: fixed;\n  width: 85%;\n  height: 201px;\n  overflow-y: scroll;\n}\n\nion-item {\n  --background: #b7a49d;\n  padding: 2px;\n  color: #fff;\n}\n\n.carbook {\n  font-size: 14px;\n}\n\n.carbook ion-label {\n  font-size: 12px !important;\n  display: block;\n  width: 100%;\n}\n\n.carbook input {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluaXN0cmF0b3IvV2Vic3Rvcm1Qcm9qZWN0cy9sb2NhbC1zaGlmdGluZy9zcmMvYXBwL3BhZ2VzL2Nhci1ib29rL2Nhci1ib29rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyLWJvb2svY2FyLWJvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTUY7O0FESkE7RUFDRSwwQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyLWJvb2svY2FyLWJvb2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItc2VhcmNoYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tbGFiZWx7XG4gIGNvbG9yOiAjNDQ0O1xuICBtYXJnaW46IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc291cmNlLWxpc3R7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMjAxcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6ICNiN2E0OWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyYm9va3tcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmJvb2sgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJib29rIGlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59IiwiLnRvb2xiYXItc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc291cmNlLWxpc3Qge1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDIwMXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYjdhNDlkO1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyYm9vayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmJvb2sgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmJvb2sgaW5wdXQge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/car-book/car-book.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/car-book/car-book.page.ts ***!
  \*************************************************/
/*! exports provided: CarBookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookPage", function() { return CarBookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/select-location/select-location.page */ "./src/app/component/select-location/select-location.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../provider/auth/user.service */ "./src/app/provider/auth/user.service.ts");







let CarBookPage = class CarBookPage {
    constructor(modalController, router, route, toastController, loadingController, alertController, serviceProvider) {
        this.modalController = modalController;
        this.router = router;
        this.route = route;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.serviceProvider = serviceProvider;
        this.autocompleteItems = [];
        this.autocomplete = {
            input: ''
        };
        this.location = {
            pickup: '',
            dropoff: '',
            pickuppoints: {},
            droppoints: {}
        };
        this.price = 0;
        this.datetime = new Date();
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); //Be careful! January is 0 not 1
        var year = currentDate.getFullYear();
        this.minDate = year + "-" + (month + 1) + "-" + date;
    }
    getPickUpLocation(locfor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('get here');
            const modal = yield this.modalController.create({
                component: _component_select_location_select_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectLocationPage"],
                componentProps: {
                    location: this.location.pickup,
                    locfor: locfor
                }
            });
            modal.onDidDismiss().then((passData) => {
                if (passData.data.isPoint) {
                    if (locfor == 'pickup') {
                        this.location.pickup = passData.data.location;
                        this.location.pickuppoints = passData.data.points;
                    }
                    else if (locfor == 'drop') {
                        this.location.dropoff = passData.data.location;
                        this.location.droppoints = passData.data.points;
                    }
                }
                console.log(passData);
            });
            return yield modal.present();
        });
    }
    next() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.location);
            if (this.location.pickup === '' || this.location.dropoff === '') {
                const toast = yield this.toastController.create({
                    message: 'Both pickup and drop location is available',
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            }
            else {
                let userID = JSON.parse(localStorage.getItem('userData')).ID;
                let params = {
                    shift_items: JSON.stringify(this.items),
                    destination_lat: this.location.droppoints.latitude,
                    destination_long: this.location.droppoints.longitude,
                    destination_address: this.location.dropoff,
                    pickup_address: this.location.pickup,
                    pickup_lat: this.location.pickuppoints.latitude,
                    pickup_long: this.location.pickuppoints.longitude,
                    shift_cost: this.price,
                    user_id: +userID,
                    shift_time: this.datetime
                };
                console.log(params);
                let loading = yield this.loadingController.create();
                loading.present();
                this.serviceProvider.bookNow(params).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    loading.dismiss();
                    if (res.status == 'success') {
                        const alert = yield this.alertController.create({
                            message: res.msg,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: (blah) => {
                                        // console.log('Confirm Cancel: blah');
                                        this.route.navigate(['/booking-list']);
                                    }
                                }
                            ]
                        });
                        // await alert.present();
                        const toast = yield this.toastController.create({
                            message: res.msg,
                            position: 'middle',
                            duration: 3000
                        });
                        toast.present();
                        this.route.navigate(['/booking-list']);
                    }
                    else {
                        const alert = yield this.alertController.create({
                            message: 'Server Went Wrong',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: (blah) => {
                                        console.log(blah);
                                    }
                                }
                            ]
                        });
                        yield alert.present();
                    }
                }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    loading.dismiss();
                    const alert = yield this.alertController.create({
                        message: 'Server Went Wrong',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'cancel',
                                cssClass: 'danger',
                                handler: (blah) => {
                                    console.log('Confirm Cancel: blah');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }));
            }
        });
    }
    ngOnInit() {
        this.router.params.subscribe((params) => {
            this.items = JSON.parse(params['categories']);
            this.calculatePrice();
            console.log(JSON.parse(params['categories']));
        });
    }
    calculatePrice() {
        for (let key in this.items) {
            console.log(key);
            let keyItems = this.items[key].items;
            let prices = lodash__WEBPACK_IMPORTED_MODULE_5__["map"](keyItems, (d) => {
                return (d.qty * d.price);
            });
            this.price = this.price + lodash__WEBPACK_IMPORTED_MODULE_5__["sum"](prices);
        }
        if (this.price < 1000) {
            this.price = this.price + 1000;
        }
        console.log(this.price);
    }
};
CarBookPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
CarBookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-book',
        template: __webpack_require__(/*! raw-loader!./car-book.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/car-book/car-book.page.html"),
        providers: [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
        styles: [__webpack_require__(/*! ./car-book.page.scss */ "./src/app/pages/car-book/car-book.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], CarBookPage);



/***/ })

}]);
//# sourceMappingURL=pages-car-book-car-book-module-es2015.js.map