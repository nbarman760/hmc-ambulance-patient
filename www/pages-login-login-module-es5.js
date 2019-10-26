(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"outer\">\n        <div class=\"middle\">\n            <div class=\"inner\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col [size]=\"12\">\n                        <div class=\"logo-login\" text-center=\"\">\n                            <img src=\"../../../assets/icon/logo.jpeg\" width=\"50\"/>\n                        </div>\n                    </ion-col>\n                    <ion-col [size]=\"12\">\n                        <div >\n                            <ion-item class=\"login-icon\">\n                                <ion-icon name=\"phone-portrait\"></ion-icon>\n                                <span class=\"ccode\">(+91)</span>\n                                <ion-input type=\"tel\" name=\"phone\" #phone=\"ngModel\" maxlength=\"10\" minlength=\"10\" [(ngModel)]=\"user.phone\" placeholder=\"Enter mobile number\" text-center></ion-input>\n                            </ion-item>\n                        </div>\n                    </ion-col>\n                    <ion-col [size]=\"12\">\n                        <div >\n                            <!--<div class=\"content\" text-center>-->\n                            <!--To continue you may receive an SMS for verification-->\n                            <!--</div>-->\n                            <div>\n\n                                <ion-button color=\"dark\" (click)=\"sentOtp()\" expand=\"block\">Proceed <ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\n                                <!--<ion-icon ios=\"ios-arrow-round-forward\" md=\"md-arrow-round-forward\"></ion-icon>-->\n\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n\n\n            </div>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #fed229;\n}\n\n.logo {\n  text-align: center;\n  margin-top: 30%;\n}\n\nion-item {\n  --background: #fff;\n  margin-bottom: 5px;\n}\n\n.next {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.next .content {\n  width: 60%;\n  font-family: fantasy;\n  color: #444;\n}\n\n.next-btn {\n  width: 30%;\n}\n\n.next-btn a {\n  padding: 20px;\n  background: #000;\n  text-align: center;\n  border-radius: 50%;\n  color: #ffffff;\n}\n\n.form-login {\n  margin-top: 35%;\n}\n\n.outer {\n  display: table;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.middle {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.inner {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  /*whatever width you want*/\n}\n\nion-item {\n  --min-height: 38px;\n  position: relative;\n  --padding-start: 0px;\n  --highlight-color-valid: #fed229;\n}\n\n.login-icon ion-icon {\n  position: absolute;\n  background: #000;\n  top: 0;\n  left: 0px;\n  color: #fff;\n  padding: 10px 8px;\n}\n\n.ccode {\n  position: absolute;\n  left: 50px;\n}\n\nion-input {\n  --padding-start: 50px !important;\n  font-size: 14px;\n  color: #333;\n}\n\nion-button {\n  --border-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluaXN0cmF0b3IvV2Vic3Rvcm1Qcm9qZWN0cy9sb2NhbC1zaGlmdGluZy9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtBQ0lGOztBREZBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREhBO0VBQ0UsVUFBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDUUY7O0FETEE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDUUY7O0FETEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUFZLDBCQUFBO0FDU2Q7O0FETkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDVUY7O0FEUkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNXRjs7QURUQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNZRjs7QURUQTtFQUVFLDZCQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmVkMjI5O1xufVxuLmxvZ297XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuaW9uLWl0ZW17XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm5leHR7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLm5leHQgLmNvbnRlbnR7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICBjb2xvcjogIzQ0NDtcbn1cbi5uZXh0LWJ0bntcbiAgd2lkdGg6IDMwJTtcbn1cbi5uZXh0LWJ0biBhe1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZm9ybS1sb2dpbntcbiAgbWFyZ2luLXRvcDogMzUlO1xufVxuXG4ub3V0ZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWlkZGxlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6MTAwJTsgLyp3aGF0ZXZlciB3aWR0aCB5b3Ugd2FudCovXG59XG5cbmlvbi1pdGVte1xuICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjZmVkMjI5O1xufVxuLmxvZ2luLWljb24gaW9uLWljb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgdG9wOjA7XG4gIGxlZnQ6IDBweDtcbiAgY29sb3I6I2ZmZjtcbiAgcGFkZGluZzogMTBweCA4cHg7XG59XG4uY2NvZGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTBweDtcbn1cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogNTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiMzMzM7XG59XG5cbmlvbi1idXR0b257XG5cbiAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG5cbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZlZDIyOTtcbn1cblxuLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm5leHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLm5leHQgLmNvbnRlbnQge1xuICB3aWR0aDogNjAlO1xuICBmb250LWZhbWlseTogZmFudGFzeTtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5uZXh0LWJ0biB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5uZXh0LWJ0biBhIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZm9ybS1sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDM1JTtcbn1cblxuLm91dGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1pZGRsZSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICAvKndoYXRldmVyIHdpZHRoIHlvdSB3YW50Ki9cbn1cblxuaW9uLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjZmVkMjI5O1xufVxuXG4ubG9naW4taWNvbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbn1cblxuLmNjb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MHB4O1xufVxuXG5pb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDUwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/auth/user.service */ "./src/app/provider/auth/user.service.ts");
/* harmony import */ var _component_otp_validate_otp_validate_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/otp-validate/otp-validate.page */ "./src/app/component/otp-validate/otp-validate.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(userProvider, toastController, loadingController, modalCtrl, alertController, router) {
        this.userProvider = userProvider;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.router = router;
        this.user = {
            phone: ''
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        localStorage.setItem('userLogged', 'no');
        //this.router.navigate(['/login']);
    };
    LoginPage.prototype.sentOtp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var phoneno, loading_1, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phoneno = /^\d{10}$/;
                        if (!this.user.phone.match(phoneno)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading_1 = _a.sent();
                        loading_1.present();
                        this.userProvider.sentOtp(this.user).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var modal;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        loading_1.dismiss();
                                        if (!(res.status == 'success')) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.modalCtrl.create({
                                                component: _component_otp_validate_otp_validate_page__WEBPACK_IMPORTED_MODULE_4__["OtpValidatePage"],
                                                componentProps: this.user,
                                            })];
                                    case 1:
                                        modal = _a.sent();
                                        modal.onDidDismiss().then(function (passData) {
                                            if (passData.data.isValidOtp === 'yes') {
                                                localStorage.setItem('userLogged', 'yes');
                                                localStorage.setItem('phone', _this.user.phone);
                                                _this.router.navigate(['/user-details']);
                                            }
                                        });
                                        return [4 /*yield*/, modal.present()];
                                    case 2: return [2 /*return*/, _a.sent()];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        loading_1.dismiss();
                                        return [4 /*yield*/, this.alertController.create({
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
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.toastController.create({
                            message: 'Invalid mobile number',
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _provider_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            providers: [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map