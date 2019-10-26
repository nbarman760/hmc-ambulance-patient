(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emergency-book-emergency-book-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergency-book/emergency-book.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergency-book/emergency-book.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>What happend?</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n     <ion-col [size]=\"6\" *ngFor=\"let diease of dieases; index as i\" [ngClass]=\"diease.selected? 'selected': ''\" (click)=\"makeSelection(diease, i)\">\n       <div class=\"item-category-row\" >\n         <div class=\"cat-content\">\n             <p>{{diease.name | titlecase}}</p>\n         </div>\n       </div>\n     </ion-col>\n  </ion-row>\n\n\n  <ion-button (click)=\"bookAmbulance()\" expand=\"block\"  color=\"dark\" class=\"fixed-btn\">\n    Book Ambulance\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/emergency-book/emergency-book.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/emergency-book/emergency-book.module.ts ***!
  \***************************************************************/
/*! exports provided: EmergencyBookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyBookPageModule", function() { return EmergencyBookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _emergency_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergency-book.page */ "./src/app/pages/emergency-book/emergency-book.page.ts");







const routes = [
    {
        path: '',
        component: _emergency_book_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyBookPage"]
    }
];
let EmergencyBookPageModule = class EmergencyBookPageModule {
};
EmergencyBookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_emergency_book_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyBookPage"]]
    })
], EmergencyBookPageModule);



/***/ }),

/***/ "./src/app/pages/emergency-book/emergency-book.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/emergency-book/emergency-book.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-category-row .icon-cat {\n  display: block !important;\n}\n\n.item-category-row ion-button {\n  display: block;\n  height: 100px;\n  white-space: normal;\n}\n\n.button-inner {\n  display: block !important;\n}\n\nion-content {\n  --background: #eaeaea;\n}\n\nion-button span {\n  --flex: none;\n  --display: block !important;\n}\n\nion-content ion-button {\n  --flex-direction: column !important;\n  --display: block !important;\n}\n\n.category {\n  font-size: 14px;\n}\n\nion-content .button-inner {\n  --display: block !important;\n  --flex-direction: column !important;\n}\n\n.item-category-row {\n  background: #fff;\n  height: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n}\n\n.item-category-row p {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n}\n\n.cat-content {\n  display: block;\n  width: 100%;\n}\n\n.number-item {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  right: 20px;\n  background: #f2c811;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 20px;\n  font-size: 14px;\n}\n\n.furniture svg {\n  width: 24px;\n}\n\n.fixed-btn {\n  bottom: -4px !important;\n  width: 100%;\n  position: fixed;\n  height: 50px;\n  z-index: 999;\n  width: 100%;\n}\n\nion-row {\n  margin-bottom: 11%;\n}\n\n.selected .item-category-row {\n  background: #445678;\n  color: #fff;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluaXN0cmF0b3IvV2Vic3Rvcm1Qcm9qZWN0cy9sb2NhbC1zaGlmdGluZy9zcmMvYXBwL3BhZ2VzL2VtZXJnZW5jeS1ib29rL2VtZXJnZW5jeS1ib29rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZW1lcmdlbmN5LWJvb2svZW1lcmdlbmN5LWJvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FEREE7RUFDRSwyQkFBQTtFQUNBLG1DQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BO0VBRUUsV0FBQTtBQ1FGOztBRExBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1FGOztBRExBO0VBQ0Usa0JBQUE7QUNRRjs7QURMQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbWVyZ2VuY3ktYm9vay9lbWVyZ2VuY3ktYm9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jYXRlZ29yeS1yb3cgLmljb24tY2F0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcblxufVxuXG4uaXRlbS1jYXRlZ29yeS1yb3cgaW9uLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uYnV0dG9uLWlubmVye1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogI2VhZWFlYTtcbn1cbmlvbi1idXR0b24gc3BhbiB7XG4gIC0tZmxleDogbm9uZTtcbiAgLS1kaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIC0tZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAtLWRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnl7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5pb24tY29udGVudCAuYnV0dG9uLWlubmVyIHtcbiAgLS1kaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAtLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbn1cbi5pdGVtLWNhdGVnb3J5LXJvd3tcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5pdGVtLWNhdGVnb3J5LXJvdyBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhdC1jb250ZW50e1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubnVtYmVyLWl0ZW17XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2YyYzgxMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDoyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZnVybml0dXJlIHN2Z3tcblxuICB3aWR0aDogMjRweDtcblxufVxuLmZpeGVkLWJ0bntcbiAgYm90dG9tOiAtNHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXJvd3tcbiAgbWFyZ2luLWJvdHRvbTogMTElO1xufVxuXG4uc2VsZWN0ZWQgLml0ZW0tY2F0ZWdvcnktcm93e1xuICBiYWNrZ3JvdW5kOiAjNDQ1Njc4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iLCIuaXRlbS1jYXRlZ29yeS1yb3cgLmljb24tY2F0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tY2F0ZWdvcnktcm93IGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmJ1dHRvbi1pbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWFlYWVhO1xufVxuXG5pb24tYnV0dG9uIHNwYW4ge1xuICAtLWZsZXg6IG5vbmU7XG4gIC0tZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIC0tZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAtLWRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNvbnRlbnQgLmJ1dHRvbi1pbm5lciB7XG4gIC0tZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgLS1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWNhdGVnb3J5LXJvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWNhdGVnb3J5LXJvdyBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2F0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5udW1iZXItaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2YyYzgxMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZnVybml0dXJlIHN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uZml4ZWQtYnRuIHtcbiAgYm90dG9tOiAtNHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDExJTtcbn1cblxuLnNlbGVjdGVkIC5pdGVtLWNhdGVnb3J5LXJvdyB7XG4gIGJhY2tncm91bmQ6ICM0NDU2Nzg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/emergency-book/emergency-book.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/emergency-book/emergency-book.page.ts ***!
  \*************************************************************/
/*! exports provided: EmergencyBookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyBookPage", function() { return EmergencyBookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../provider/auth/user.service */ "./src/app/provider/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _route_map_route_map_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../route-map/route-map.page */ "./src/app/pages/route-map/route-map.page.ts");









let EmergencyBookPage = class EmergencyBookPage {
    constructor(geolocation, toastController, alertController, modalCtrl, httpService, loadingController, router, nativeGeocoder) {
        this.geolocation = geolocation;
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.loadingController = loadingController;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
        this.dieases = [
            {
                name: 'Heart Attack',
                icon: '',
                slug: 'heart-attack',
                selected: false
            },
            {
                name: 'Animal Bite',
                icon: '',
                slug: 'animal-bite',
                selected: false
            },
            {
                name: 'Bleeding',
                icon: '',
                slug: 'bleeding',
                selected: false
            },
            {
                name: 'Accident',
                icon: '',
                slug: 'accident',
                selected: false
            },
            {
                name: 'Hypertonic Syndrome',
                icon: '',
                slug: 'hypertonic-syndrom',
                selected: false
            },
            {
                name: 'Ana Pythik shock',
                icon: '',
                slug: 'anapythic-shock',
                selected: false
            },
            {
                name: 'Pregnanncy',
                icon: '',
                slug: 'pregnancy',
                selected: false
            },
            {
                name: 'Other',
                icon: '',
                slug: 'other',
                selected: false
            }
        ];
        this.bookingInfo = {
            userid: JSON.parse(localStorage.getItem('userData')).ID,
            points: {
                latitude: null,
                longitude: null
            },
            diseases: []
        };
        this.points = {
            latitude: null,
            longitude: null
        };
    }
    makeSelection(dieses, i) {
        this.dieases[i].selected = !this.dieases[i].selected;
    }
    bookAmbulance() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.bookingInfo.points = this.points;
            this.bookingInfo.diseases = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.dieases, (d) => {
                return d.selected;
            });
            if (this.bookingInfo.diseases.length > 0) {
                let loading = yield this.loadingController.create();
                loading.present();
                this.httpService.bookAmbulance(this.bookingInfo).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    loading.dismiss();
                    if (res.status == 'success') {
                        this.notifyAmbulance(res.data);
                        const modal = yield this.modalCtrl.create({
                            component: _route_map_route_map_page__WEBPACK_IMPORTED_MODULE_8__["RouteMapPage"],
                            componentProps: { 'ambulance': res.data },
                        });
                        return yield modal.present();
                    }
                    else {
                        const alert = yield this.alertController.create({
                            message: res.msg,
                            buttons: ['Close']
                        });
                        yield alert.present();
                    }
                }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const alert = yield this.alertController.create({
                        message: 'Server is busy. Please find a car to reach him/her to hospital',
                        buttons: ['Close']
                    });
                    yield alert.present();
                    loading.dismiss();
                }));
            }
            else {
                const toast = yield this.toastController.create({
                    message: 'Please select atleast one diease',
                    position: 'top',
                    duration: 3000
                });
                toast.present();
            }
            console.log(this.bookingInfo);
        });
    }
    notifyAmbulance(ambulance) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let params = {
                notification: {
                    title: "Emergency Patient",
                    body: "An accident has been happened at..",
                    sound: "default",
                    click_action: "FCM_PLUGIN_ACTIVITY",
                    icon: "fcm_push_icon"
                },
                data: {
                    'bookingInfo': this.bookingInfo,
                    'order': ambulance
                },
                to: "/topics/all",
                priority: "high",
                restricted_package_name: ""
            };
            this.httpService.alertAmbulance(params).then((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });
        });
    }
    ngOnInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log("Latitude and longitude", resp.coords.latitude, resp.coords.longitude);
            this.points = {
                longitude: resp.coords.longitude,
                latitude: resp.coords.latitude
            };
        });
    }
};
EmergencyBookPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] }
];
EmergencyBookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emergency-book',
        template: __webpack_require__(/*! raw-loader!./emergency-book.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergency-book/emergency-book.page.html"),
        providers: [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
        styles: [__webpack_require__(/*! ./emergency-book.page.scss */ "./src/app/pages/emergency-book/emergency-book.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]])
], EmergencyBookPage);



/***/ })

}]);
//# sourceMappingURL=pages-emergency-book-emergency-book-module-es2015.js.map