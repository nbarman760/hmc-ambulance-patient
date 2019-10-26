(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-details-user-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Basic Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"whitebg blackbg\">\n  <div class=\"profile-row\">\n  <div class=\"profile-img\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z\"/></svg>\n    <!--<ion-icon name=\"person\"></ion-icon>-->\n  </div>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <form class=\"basic-information\" (ngSubmit)=\"saveDetails()\">\n\n          <div class=\"form-row\">\n            <!--<ion-label>Name *</ion-label>-->\n            <ion-item>\n              <div class=\"ion-icon-content\"><ion-icon name=\"person\"></ion-icon></div>\n              <ion-input name=\"name\" [(ngModel)]=\"userDetails.name\" #name=\"ngModel\" placeholder=\"Your name\" ></ion-input>\n            </ion-item>\n          </div>\n          <div class=\"form-row\">\n            <!--<ion-label>Phone *</ion-label>-->\n          <ion-item>\n            <div class=\"ion-icon-content\"> <ion-icon name=\"phone-portrait\"></ion-icon></div>\n            <ion-input name=\"phone\" [(ngModel)]=\"userDetails.phone\" #phone=\"ngModel\" placeholder=\"Mobile no\" readonly disabled></ion-input>\n          </ion-item>\n          </div>\n          <div class=\"form-row\">\n            <!--<ion-label>Email *</ion-label>-->\n          <ion-item>\n            <div class=\"ion-icon-content\"><ion-icon name=\"mail\"></ion-icon></div>\n            <ion-input name=\"email\" [(ngModel)]=\"userDetails.email\" #email=\"ngModel\" placeholder=\"user@email.in\"></ion-input>\n          </ion-item>\n          </div>\n          <div class=\"form-row select-drop\">\n          <ion-item>\n            <div class=\"ion-icon-content\"><ion-icon name=\"transgender\"></ion-icon></div>\n            <!--<ion-label>Sex *</ion-label>-->\n            <ion-select name=\"sex\" [(ngModel)]=\"userDetails.sex\"  #sex=\"ngModel\" placeholder=\"Gender\">\n              <ion-select-option value=\"male\">Male</ion-select-option>\n              <ion-select-option value=\"female\">Female</ion-select-option>\n              <ion-select-option value=\"other\">Others</ion-select-option>\n            </ion-select>\n          </ion-item>\n          </div>\n          <div class=\"form-row\">\n          <ion-button type=\"submit\" expand=\"full\" color=\"dark\">Save </ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.module.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");







const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]
    }
];
let UserDetailsPageModule = class UserDetailsPageModule {
};
UserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]]
    })
], UserDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer {\n  display: table;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.middle {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.inner {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  /*whatever width you want*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluaXN0cmF0b3IvV2Vic3Rvcm1Qcm9qZWN0cy9sb2NhbC1zaGlmdGluZy9zcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUFZLDBCQUFBO0FDRWQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5taWRkbGUge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaW5uZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDoxMDAlOyAvKndoYXRldmVyIHdpZHRoIHlvdSB3YW50Ki9cbn0iLCIub3V0ZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWlkZGxlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIC8qd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/auth/user.service */ "./src/app/provider/auth/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserDetailsPage = class UserDetailsPage {
    constructor(userProvider, loadingController, alertController, toastController, router) {
        this.userProvider = userProvider;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.userDetails = {
            name: '',
            phone: '',
            email: '',
            sex: 'male'
        };
    }
    ngOnInit() {
        if (localStorage.getItem('phone') !== undefined) {
            this.userDetails.phone = localStorage.getItem('phone');
            this.userProvider.getUserDetails(+this.userDetails.phone).then((res) => {
                this.userDetails = res.data;
            });
        }
    }
    saveDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage.getItem('phone') != undefined) {
                this.userDetails.phone = localStorage.getItem('phone');
                let loading = yield this.loadingController.create({
                    duration: 5000
                });
                loading.present();
                this.userProvider.saveUserdetails(this.userDetails).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res.status === 'success') {
                        const toast = yield this.toastController.create({
                            message: 'Your details has been updated',
                            position: 'bottom',
                            duration: 3000
                        });
                        toast.present();
                        this.router.navigate(['/emergency-book']);
                    }
                    else {
                        const alert = yield this.alertController.create({
                            message: res.msg,
                            buttons: ['Close']
                        });
                        yield alert.present();
                    }
                    loading.dismiss();
                }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    loading.dismiss();
                    const alert = yield this.alertController.create({
                        message: 'Server not found',
                        buttons: ['Close']
                    });
                    yield alert.present();
                }));
            }
        });
    }
};
UserDetailsPage.ctorParameters = () => [
    { type: _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html"),
        providers: [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
        styles: [__webpack_require__(/*! ./user-details.page.scss */ "./src/app/pages/user-details/user-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UserDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-details-user-details-module-es2015.js.map