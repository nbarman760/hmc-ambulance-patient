(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-booking-list-booking-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/booking-list/booking-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/booking-list/booking-list.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>booking-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"msg !='' \">\n    <ion-card-content>\n      {{msg}}\n    </ion-card-content>\n  </ion-card>\n  <ion-grid *ngIf=\"orders.length > 0\">\n    <ion-card *ngFor=\"let order of orders\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"status\">\n          <div class=\"salon-img\">\n             <h3>{{order.shift_status | uppercase}}</h3>\n          </div>\n        </ion-col>\n        <ion-col size=\"10\" padding>\n          <ion-card-header>\n            <ion-card-title>{{order.booking_id}}</ion-card-title>\n            <ion-card-subtitle><strong>Pickup date:</strong> {{order.shift_time | date: 'dd MMM, yyyy'}}</ion-card-subtitle>\n            <ion-card-subtitle><strong>Address: </strong> {{order.destination_address | titlecase}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button expand=\"full\"  color=\"dark\" (click)=\"trackStatus(order)\" > Track Order<ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-grid>\n  <div *ngIf=\"orders.length==0\" class=\"wrapper\">\n    <div *ngFor=\"let fake of fakeList\" class='wrapper-cell'>\n      <div class='image'></div>\n      <div class='text'>\n        <div class='text-line'></div>\n        <div class='text-line'></div>\n        <div class='text-line'></div>\n        <div class='text-line'></div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/booking-list/booking-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/booking-list/booking-list.module.ts ***!
  \***********************************************************/
/*! exports provided: BookingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function() { return BookingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booking_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-list.page */ "./src/app/pages/booking-list/booking-list.page.ts");







var routes = [
    {
        path: '',
        component: _booking_list_page__WEBPACK_IMPORTED_MODULE_6__["BookingListPage"]
    }
];
var BookingListPageModule = /** @class */ (function () {
    function BookingListPageModule() {
    }
    BookingListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_booking_list_page__WEBPACK_IMPORTED_MODULE_6__["BookingListPage"]]
        })
    ], BookingListPageModule);
    return BookingListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/booking-list/booking-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/booking-list/booking-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #ebebeb;\n}\nion-content .wrapper {\n  margin: 2px;\n  padding: 10px;\n  background: #fff;\n  width: 100%;\n  height: 640px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\nion-content .wrapper-cell {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 13px;\n  padding: 4%;\n  border: 1px solid #dbdbe84a;\n}\n@-webkit-keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\nion-content .animated-background, ion-content .text-line, ion-content .image {\n  -webkit-animation-duration: 1.25s;\n          animation-duration: 1.25s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n          animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #F6F6F6;\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, #F6F6F6), color-stop(18%, #F0F0F0), color-stop(33%, #F6F6F6));\n  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);\n  background-size: 800px 104px;\n  height: 96px;\n  position: relative;\n}\nion-content .image {\n  height: 60px;\n  width: 60px;\n}\nion-content .text {\n  margin-left: 20px;\n}\nion-content .text-line {\n  height: 10px;\n  width: 230px;\n  margin: 4px 0;\n}\nion-content .status {\n  padding: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluaXN0cmF0b3IvV2Vic3Rvcm1Qcm9qZWN0cy9sb2NhbC1zaGlmdGluZy9zcmMvYXBwL3BhZ2VzL2Jvb2tpbmctbGlzdC9ib29raW5nLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29raW5nLWxpc3QvYm9va2luZy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKO0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0FKO0FESUU7RUFDRTtJQUNFLDZCQUFBO0VDRko7RURJRTtJQUNFLDRCQUFBO0VDRko7QUFDRjtBREpFO0VBQ0U7SUFDRSw2QkFBQTtFQ0ZKO0VESUU7SUFDRSw0QkFBQTtFQ0ZKO0FBQ0Y7QURLRTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzSUFBQTtFQUFBLDJFQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNKSjtBRFNFO0VBQ0UsaUJBQUE7QUNQSjtBRFVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0FDVEo7QURZRTtFQUNFLFdBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmctbGlzdC9ib29raW5nLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlYmViZWI7XG5cbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC53cmFwcGVyLWNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICBwYWRkaW5nOiA0JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmU4NGE7XG4gIH1cblxuICAvLyBBbmltYXRpb25cbiAgQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXIge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxuXG4gIC5hbmltYXRlZC1iYWNrZ3JvdW5kIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBwbGFjZUhvbGRlclNoaW1tZXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjZGNkY2IDglLCAjRjBGMEYwIDE4JSwgI0Y2RjZGNiAzMyUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAvLyBQYWdlIEVsZW1lbnRzXG4gIC5pbWFnZSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIC8vICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgIEBleHRlbmQgLmFuaW1hdGVkLWJhY2tncm91bmQ7XG4gIH1cblxuICAudGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcbiAgfVxuXG4gIC50ZXh0LWxpbmUge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgLy8gIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBAZXh0ZW5kIC5hbmltYXRlZC1iYWNrZ3JvdW5kO1xuICB9XG4gIC5zdGF0dXN7XG4gICAgcGFkZGluZzogNCU7XG4gIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cbmlvbi1jb250ZW50IC53cmFwcGVyIHtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWNvbnRlbnQgLndyYXBwZXItY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDQlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmU4NGE7XG59XG5Aa2V5ZnJhbWVzIHBsYWNlSG9sZGVyU2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xuICB9XG59XG5pb24tY29udGVudCAuYW5pbWF0ZWQtYmFja2dyb3VuZCwgaW9uLWNvbnRlbnQgLnRleHQtbGluZSwgaW9uLWNvbnRlbnQgLmltYWdlIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGJhY2tncm91bmQ6ICNGNkY2RjY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Y2RjZGNiA4JSwgI0YwRjBGMCAxOCUsICNGNkY2RjYgMzMlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAuaW1hZ2Uge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuaW9uLWNvbnRlbnQgLnRleHQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbmlvbi1jb250ZW50IC50ZXh0LWxpbmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAyMzBweDtcbiAgbWFyZ2luOiA0cHggMDtcbn1cbmlvbi1jb250ZW50IC5zdGF0dXMge1xuICBwYWRkaW5nOiA0JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/booking-list/booking-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/booking-list/booking-list.page.ts ***!
  \*********************************************************/
/*! exports provided: BookingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPage", function() { return BookingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/auth/user.service */ "./src/app/provider/auth/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _track_status_track_status_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../track-status/track-status.page */ "./src/app/pages/track-status/track-status.page.ts");





var BookingListPage = /** @class */ (function () {
    function BookingListPage(serviceProvider, modalCtrl, alertController) {
        this.serviceProvider = serviceProvider;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.orders = [];
        this.msg = '';
        this.fakeList = [{}, {}, {}, {}, {}, {}];
    }
    BookingListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceProvider.getBookingList().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(res);
                        this.orders = res.data;
                        if (!(res.data.length == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertController.create({
                                message: 'No Orders Found',
                                buttons: ['Close']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        // await alert.present();
                        this.fakeList = [];
                        this.msg = 'No orders found';
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Server not found',
                            buttons: ['Close']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    BookingListPage.prototype.trackStatus = function (order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _track_status_track_status_page__WEBPACK_IMPORTED_MODULE_4__["TrackStatusPage"],
                            componentProps: { 'order': order },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BookingListPage.ctorParameters = function () { return [
        { type: _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    BookingListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-list',
            template: __webpack_require__(/*! raw-loader!./booking-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/booking-list/booking-list.page.html"),
            providers: [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./booking-list.page.scss */ "./src/app/pages/booking-list/booking-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], BookingListPage);
    return BookingListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-booking-list-booking-list-module-es5.js.map