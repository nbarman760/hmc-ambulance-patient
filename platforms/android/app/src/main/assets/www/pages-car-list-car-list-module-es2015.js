(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-car-list-car-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/car-list/car-list.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/car-list/car-list.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>car-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/car-list/car-list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/car-list/car-list.module.ts ***!
  \***************************************************/
/*! exports provided: CarListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPageModule", function() { return CarListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _car_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-list.page */ "./src/app/pages/car-list/car-list.page.ts");







const routes = [
    {
        path: '',
        component: _car_list_page__WEBPACK_IMPORTED_MODULE_6__["CarListPage"]
    }
];
let CarListPageModule = class CarListPageModule {
};
CarListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_car_list_page__WEBPACK_IMPORTED_MODULE_6__["CarListPage"]]
    })
], CarListPageModule);



/***/ }),

/***/ "./src/app/pages/car-list/car-list.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/car-list/car-list.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhci1saXN0L2Nhci1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/car-list/car-list.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/car-list/car-list.page.ts ***!
  \*************************************************/
/*! exports provided: CarListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPage", function() { return CarListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarListPage = class CarListPage {
    constructor() { }
    ngOnInit() {
    }
};
CarListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-list',
        template: __webpack_require__(/*! raw-loader!./car-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/car-list/car-list.page.html"),
        styles: [__webpack_require__(/*! ./car-list.page.scss */ "./src/app/pages/car-list/car-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarListPage);



/***/ })

}]);
//# sourceMappingURL=pages-car-list-car-list-module-es2015.js.map