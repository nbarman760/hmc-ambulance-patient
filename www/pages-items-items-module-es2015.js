(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-items-items-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/items/items.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/items/items.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>PACKER KOLKATA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"whitebg\">\n    <ion-grid>\n        <ion-row>\n            <ion-col [size]=\"12\">\n                <div class=\"category\">\n                    <div>SELECT ITEM TO SHIFT</div>\n                </div>\n            </ion-col>\n            <ion-col [size]=\"6\">\n                <div class=\"item-category-row\" (click)=\"fillFurniture()\">\n                    <div class=\"cat-content\">\n                    <p class=\"icon-cat furniture\">\n                        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 478.165 478.165\" style=\"enable-background:new 0 0 478.165 478.165;\" xml:space=\"preserve\">\n<g>\n\t<path d=\"M43.678,169.368c14.463,2.806,25.418,15.561,25.418,30.832v41.203H228.93V85.554H52.788c-3.854,0-7.593,1.588-10.258,4.355\n\t\tc-2.421,2.515-3.685,5.735-3.557,9.067c0.507,13.321,2.088,36.973,4.707,70.385L43.678,169.368z\"/>\n\t<path d=\"M440.48,189.084c-6.129,0-11.115,4.986-11.115,11.115v45.392c8.971,5.285,15.008,15.04,15.008,26.183v36.833\n\t\tc0,2.489-0.158,4.948-0.88,7.221c-1.883,5.926-5.773,14.689-15.294,19.616l13.03,49.595c1.197,4.557,5.308,7.572,9.809,7.572\n\t\tc0.853,0,1.721-0.108,2.586-0.336c5.421-1.424,8.661-6.974,7.237-12.394l-15.557-59.211h10.994c6.019,0,10.802-4.992,11.127-11.612\n\t\tc1.297-26.445,9.775-100.909,10.741-109.347c-0.256-5.903-5.139-10.627-11.104-10.627H440.48z\"/>\n\t<path d=\"M11.104,189.084c-5.965,0-10.848,4.724-11.104,10.627c0.965,8.438,9.442,82.902,10.739,109.347\n\t\tc0.325,6.62,5.109,11.612,11.128,11.612h10.992l-15.554,59.211c-1.424,5.421,1.817,10.97,7.237,12.394\n\t\tc0.864,0.227,1.732,0.336,2.586,0.336c4.5,0,8.611-3.016,9.809-7.573l13.028-49.594c-8.813-6.659-14.183-14.397-15.294-19.608\n\t\tc-0.498-2.335-0.882-4.737-0.882-7.23v-36.833c0-11.146,6.039-20.902,15.012-26.186v-45.389c0-6.129-4.986-11.115-11.115-11.115\n\t\tH11.104z\"/>\n\t<path d=\"M409.069,200.199c0-15.268,10.952-28.021,25.412-30.83l-0.002-0.006c2.618-33.412,4.2-57.066,4.707-70.386\n\t\tc0.127-3.333-1.137-6.553-3.559-9.068c-2.664-2.767-6.402-4.354-10.257-4.354H249.228v155.849h159.841V200.199z\"/>\n\t<path d=\"M414.002,261.7H64.158c-5.554,0-10.073,4.519-10.073,10.074v36.833c0,3.35,1.65,6.315,4.174,8.148l0.008-0.001\n\t\tc0.041,0.03,0.076,0.065,0.117,0.095c1.636,1.15,3.626,1.832,5.774,1.832h349.844c2.147,0,4.135-0.68,5.771-1.829\n\t\tc0.042-0.031,0.078-0.068,0.121-0.098l0.009,0.001c2.523-1.832,4.173-4.797,4.173-8.147v-36.833\n\t\tC424.076,266.219,419.557,261.7,414.002,261.7z\"/>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\n                    </p>\n                 <p>FURNITURE</p>\n                        <span class=\"number-item\" *ngIf=\"total_items.furniture > 0\">{{total_items.furniture}} </span>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col [size]=\"6\">\n                <div class=\"item-category-row\" (click)=\"fillElectronics()\">\n                    <div class=\"cat-content\">\n                        <p class=\"icon-cat\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 8v8h-17v-8h17zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6zm-6.501-2h-1.499v-2h1.499c.277 0 .501-.224.501-.5s-.224-.5-.501-.5h-1.499v-1c-5.037 0-4.618 2-6.002 2h-2.998v2h3c1.373 0 1 2 6 2v-1h1.499c.277 0 .501-.224.501-.5s-.224-.5-.501-.5z\"/></svg></p>\n                        <p>ELECTRONICS</p>\n                        <span class=\"number-item\" *ngIf=\"total_items.electronics > 0\">{{total_items.electronics}} </span>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col [size]=\"6\">\n                <div class=\"item-category-row\" (click)=\"fillKitchen()\">\n                    <div class=\"cat-content\">\n                    <p class=\"icon-cat\"> <svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z\"/></svg></p>\n                       <p>KITCHEN</p>\n                        <span class=\"number-item\" *ngIf=\"total_items.kitchen > 0\">{{total_items.kitchen}} </span>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col [size]=\"6\">\n                <div class=\"item-category-row\" (click)=\"fillAccessories()\">\n                    <div class=\"cat-content\">\n                    <p class=\"icon-cat furniture\"> <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 439.324 439.324\" style=\"enable-background:new 0 0 439.324 439.324;\" xml:space=\"preserve\">\n<path d=\"M439.324,288.541c0-35.033-38.063-63.534-84.85-63.534h-29.171c-5.523,0-10,4.477-10,10s4.477,10,10,10h29.171\n\tc35.152,0,64.85,19.936,64.85,43.534c0,10.851-7.098,21.523-19.367,29.633c-6.69-14.422-21.298-24.453-38.214-24.453h-72.876\n\tc-21.953,0-40.026,16.889-41.932,38.354h-26.088c-1.906-21.466-19.979-38.354-41.932-38.354h-72.876\n\tc-16.915,0-31.523,10.031-38.214,24.452c-8.663-5.731-14.856-12.809-17.643-20.27c-1.933-5.174-7.692-7.802-12.867-5.869\n\tc-5.174,1.933-7.801,7.693-5.869,12.867c4.943,13.235,15.597,24.748,30.811,33.292c0.545,0.306,1.116,0.593,1.673,0.891v9.237\n\tc0,23.219,18.89,42.108,42.108,42.108h72.876c21.953,0,40.025-16.889,41.932-38.354h26.088\n\tc1.907,21.465,19.979,38.354,41.932,38.354h72.876c23.219,0,42.108-18.89,42.108-42.108V339.1\n\tC426.131,327.167,439.324,308.476,439.324,288.541z M201.022,348.321c0,12.19-9.918,22.108-22.108,22.108h-72.876\n\tc-12.19,0-22.108-9.918-22.108-22.108v-12.492c0-12.19,9.918-22.108,22.108-22.108h72.876c12.19,0,22.108,9.918,22.108,22.108\n\tV348.321z M383.851,348.321c0,12.19-9.918,22.108-22.108,22.108h-72.876c-12.19,0-22.108-9.918-22.108-22.108v-12.492\n\tc0-12.19,9.918-22.108,22.108-22.108h72.876c12.19,0,22.108,9.918,22.108,22.108V348.321z M374.945,340.508v3.133\n\tc0,5.523-4.477,10-10,10s-10-4.477-10-10v-1.191c-1.107-0.551-3.186-1.197-5.982-1.197h-47.317c-5.523,0-10-4.477-10-10\n\ts4.477-10,10-10h47.317C363.775,321.254,374.945,329.531,374.945,340.508z M177.281,331.254c0,5.523-4.477,10-10,10h-47.317\n\tc-2.797,0-4.875,0.646-5.982,1.197v1.191c0,5.523-4.477,10-10,10s-10-4.477-10-10v-3.133c0-10.977,11.17-19.254,25.982-19.254\n\th47.317C172.804,321.254,177.281,325.731,177.281,331.254z M264.67,279.475c0.777,0.186,1.558,0.276,2.331,0.276\n\tc1.358,0,2.687-0.278,3.912-0.799c2.041-0.868,3.792-2.412,4.898-4.474c0.743-1.385,1.464-2.783,2.164-4.191\n\tc0.123-0.248,0.237-0.5,0.359-0.748c0.576-1.173,1.143-2.351,1.689-3.539c0.094-0.206,0.182-0.415,0.275-0.621\n\tc0.566-1.247,1.12-2.5,1.653-3.762c0.046-0.109,0.088-0.219,0.133-0.327c0.575-1.372,1.132-2.751,1.668-4.14\n\tc0.002-0.004,0.003-0.008,0.005-0.012c2.14-5.549,3.971-11.227,5.463-17.005c0.046-0.177,0.073-0.354,0.109-0.531\n\tc3.202-12.589,4.858-25.614,4.858-38.718c0-83.806-65.986-151.987-147.093-151.987S0,117.076,0,200.882\n\tc0,13.104,1.655,26.129,4.858,38.718c0.036,0.177,0.063,0.354,0.109,0.531c1.492,5.778,3.323,11.456,5.463,17.005\n\tc0.002,0.004,0.003,0.008,0.005,0.012c0.536,1.389,1.093,2.768,1.668,4.14c0.045,0.109,0.088,0.219,0.133,0.327\n\tc0.533,1.263,1.087,2.515,1.653,3.762c0.094,0.206,0.181,0.416,0.275,0.621c0.546,1.188,1.113,2.366,1.689,3.539\n\tc0.122,0.248,0.236,0.5,0.359,0.748c0.701,1.408,1.421,2.806,2.164,4.191c0.537,1,1.225,1.879,2.025,2.618\n\tc2,1.847,4.696,2.818,7.456,2.632c0.552-0.037,1.107-0.121,1.659-0.253c37.066-8.877,76.625-13.378,117.577-13.378\n\tS227.604,270.597,264.67,279.475z M132.411,246.285c-0.132,0.003-0.264,0.008-0.396,0.011c-34.356,0.905-67.699,4.908-99.408,11.942\n\tc-2.044-4.4-3.846-8.915-5.404-13.52c37.639-9.252,77.917-13.938,119.89-13.938s82.252,4.686,119.89,13.938\n\tc-1.558,4.605-3.36,9.12-5.404,13.52c-36.329-8.059-74.801-12.141-114.486-12.141C142.18,246.096,137.285,246.16,132.411,246.285z\n\t M147.093,68.895c70.08,0,127.093,59.209,127.093,131.987c0,8.238-0.756,16.436-2.216,24.481\n\tc-39.265-9.672-81.213-14.584-124.878-14.584s-85.613,4.912-124.878,14.584C20.756,217.318,20,209.12,20,200.882\n\tC20,128.104,77.014,68.895,147.093,68.895z\"/>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n                    </p>\n                  <p>ACCESSORIES</p>\n                        <span class=\"number-item\" *ngIf=\"total_items.accessories > 0\">{{total_items.accessories}} </span>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col [size]=\"6\">\n                <div class=\"item-category-row\" (click)=\"fillMiscellaneous()\">\n                    <div class=\"cat-content\">\n                    <p class=\"icon-cat furniture\"> <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M271.673,94.041c0-8.656-7.018-15.673-15.673-15.673c-8.656,0-15.673,7.018-15.673,15.673h-57.469v31.347h146.286V94.041\n\t\t\tH271.673z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M391.837,125.388V31.347H303c-13.519-10.147-29.985-15.673-47-15.673c-17.014,0-33.481,5.526-47,15.673h-88.837v94.041H0\n\t\t\tv370.939h512V125.388H391.837z M480.653,464.98H31.347V156.735H151.51V62.694h68.97l4.443-3.919\n\t\t\tc8.591-7.58,19.628-11.754,31.077-11.754c11.449,0,22.486,4.174,31.077,11.754l4.443,3.919h68.97v94.041h120.163V464.98z\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path d=\"M62.694,188.082v206.652l60.082,42.41l44.408-31.347l44.408,31.347L256,405.797l44.408,31.347l44.408-31.347\n\t\t\tl44.408,31.347l60.082-42.41V188.082H62.694z M151.51,378.491l-28.735,20.284l-28.735-20.284V219.429h57.469V378.491z\n\t\t\t M240.327,378.491l-28.735,20.284l-28.735-20.284V219.429h57.469V378.491z M329.143,378.491l-28.735,20.284l-28.735-20.284\n\t\t\tV219.429h57.469V378.491z M417.959,378.491l-28.735,20.284l-28.735-20.284V219.429h57.469V378.491z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n                    </p>\n                        <p>MISCELLANEOUS</p>\n                        <span class=\"number-item\" *ngIf=\"total_items.miscellaneous > 0\">{{total_items.miscellaneous}} </span>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col [size]=\"6\">\n                <div class=\"item-category-row\" (click)=\"fillVehicle()\">\n                    <div class=\"cat-content\">\n                    <p class=\"icon-cat\">     <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z\"/></svg></p>\n                        <p>VEHICLES</p>\n                        <span class=\"number-item\" *ngIf=\"total_items.vehicle > 0\">{{total_items.vehicle}} </span>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col [size]=\"12\">\n                <ion-button (click)=\"proceedToaddress()\" [disabled]=\"(total_items.furniture + total_items.electronics + total_items.miscellaneous + total_items.accessories + total_items.vehicle) == 0\" expand=\"block\" color=\"dark\" >Next</ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/category/accessories.ts":
/*!*****************************************!*\
  !*** ./src/app/category/accessories.ts ***!
  \*****************************************/
/*! exports provided: accessoriesJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessoriesJson", function() { return accessoriesJson; });
let accessoriesJson = {
    category: 'Accessories',
    slug: 'accessories',
    items: [
        {
            name: 'Mattress',
            qty: 0,
            price: 30
        },
        {
            name: 'Beddings',
            qty: 0,
            price: 20
        },
        {
            name: 'Clothes C/B',
            qty: 0,
            price: 10
        },
        {
            name: 'Toys C/B',
            qty: 0,
            price: 4
        },
        {
            name: 'Mirror',
            qty: 0,
            price: 20
        },
        {
            name: 'Wall Frames',
            qty: 0,
            price: 10
        },
        {
            name: 'Temple (Stone)',
            qty: 0,
            price: 20
        },
        {
            name: 'Paintings',
            qty: 0,
            price: 5
        },
        {
            name: 'Flower Pots',
            qty: 0,
            price: 4
        },
        {
            name: 'Vase',
            qty: 0,
            price: 10
        }
    ]
};


/***/ }),

/***/ "./src/app/category/electronic.ts":
/*!****************************************!*\
  !*** ./src/app/category/electronic.ts ***!
  \****************************************/
/*! exports provided: electronicJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "electronicJson", function() { return electronicJson; });
let electronicJson = {
    category: 'Electronics',
    slug: 'electronics',
    items: [
        {
            name: 'T.V Portable',
            qty: 0,
            price: 50
        },
        {
            name: 'T.V Full Size',
            qty: 0,
            price: 50
        },
        {
            name: 'Fridge',
            qty: 0,
            price: 80
        },
        {
            name: 'Washing Machine',
            qty: 0,
            price: 100
        },
        {
            name: 'Music System',
            qty: 0,
            price: 20
        },
        {
            name: 'Computer',
            qty: 0,
            price: 90
        },
        {
            name: 'Printer',
            qty: 0,
            price: 10
        },
        {
            name: 'Invertors',
            qty: 0,
            price: 20
        },
        {
            name: 'UPS',
            qty: 0,
            price: 0
        },
        {
            name: 'Fax machine',
            qty: 0,
            price: 11
        },
        {
            name: 'A/C Window',
            qty: 0,
            price: 20
        },
        {
            name: 'A/C (split)',
            qty: 0,
            price: 20
        },
        {
            name: 'Geysers',
            qty: 0,
            price: 20
        },
        {
            name: 'Ceiling Fans',
            qty: 0,
            price: 20
        },
        {
            name: 'Table Fans',
            qty: 0,
            price: 20
        }
    ]
};


/***/ }),

/***/ "./src/app/category/furniture.ts":
/*!***************************************!*\
  !*** ./src/app/category/furniture.ts ***!
  \***************************************/
/*! exports provided: furnitureJsopn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "furnitureJsopn", function() { return furnitureJsopn; });
let furnitureJsopn = {
    category: 'Furniture',
    slug: 'furniture',
    items: [
        {
            name: 'Sofa 3 Seater',
            qty: 0,
            price: 100
        },
        {
            name: 'Sofa 2 Seater',
            qty: 0,
            price: 120
        },
        {
            name: 'Sofa Single Seater',
            qty: 0,
            price: 100
        },
        {
            name: 'Sofa Cum Bed',
            qty: 0,
            price: 130
        },
        {
            name: 'Center Table',
            qty: 0,
            price: 80
        },
        {
            name: 'Double Bed (Box)',
            qty: 0,
            price: 130
        },
        {
            name: 'Single Bed',
            qty: 0,
            price: 90
        },
        {
            name: 'Dinning Table',
            qty: 0,
            price: 70
        },
        {
            name: 'Almirah Big',
            qty: 0,
            price: 100
        },
        {
            name: 'Almirah Small',
            qty: 0,
            price: 40
        },
        {
            name: 'Baby Bed',
            qty: 0,
            price: 20
        },
        {
            name: 'Book Rack',
            qty: 0,
            price: 20
        },
        {
            name: 'File Rack',
            qty: 0,
            price: 3
        }
    ]
};


/***/ }),

/***/ "./src/app/category/kitchen.ts":
/*!*************************************!*\
  !*** ./src/app/category/kitchen.ts ***!
  \*************************************/
/*! exports provided: kitchenJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kitchenJson", function() { return kitchenJson; });
let kitchenJson = {
    category: 'Kitchen',
    slug: 'kitchen',
    items: [
        {
            name: 'Gas Stove',
            qty: 0,
            price: 2
        },
        {
            name: 'Dish Washer',
            qty: 0,
            price: 20
        },
        {
            name: 'Kitchen Rack',
            qty: 0,
            price: 20
        },
        {
            name: 'Water Filter',
            qty: 0,
            price: 20
        },
        {
            name: 'Micro Oven',
            qty: 0,
            price: 21
        },
        {
            name: 'Aqua Guard',
            qty: 0,
            price: 21
        }
    ]
};


/***/ }),

/***/ "./src/app/category/miscellaneous.ts":
/*!*******************************************!*\
  !*** ./src/app/category/miscellaneous.ts ***!
  \*******************************************/
/*! exports provided: miscellaneousJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miscellaneousJson", function() { return miscellaneousJson; });
let miscellaneousJson = {
    category: 'Miscellaneous',
    slug: 'miscellaneous',
    items: [
        {
            name: 'Suitcases',
            qty: 0,
            price: 40
        },
        {
            name: 'Bags',
            qty: 0,
            price: 50
        },
        {
            name: 'Crockery',
            qty: 0,
            price: 20
        },
        {
            name: 'Trunk Box',
            qty: 0,
            price: 20
        },
        {
            name: 'Miscellaneous C/B',
            qty: 0,
            price: 20
        },
        {
            name: 'Drum',
            qty: 0,
            price: 20
        },
        {
            name: 'Aquarium',
            qty: 0,
            price: 20
        },
        {
            name: 'Bean Bag',
            qty: 0,
            price: 20
        },
        {
            name: 'Trade Mill',
            qty: 0,
            price: 51
        },
        {
            name: 'Exercise Cycle',
            qty: 0,
            price: 49
        },
        {
            name: 'Sewing Machine',
            qty: 0,
            price: 45
        },
        {
            name: 'Books (Cartoon Box)',
            qty: 0,
            price: 20
        }
    ]
};


/***/ }),

/***/ "./src/app/category/vehicles.ts":
/*!**************************************!*\
  !*** ./src/app/category/vehicles.ts ***!
  \**************************************/
/*! exports provided: vehicleJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleJson", function() { return vehicleJson; });
let vehicleJson = {
    category: 'Vehicle',
    slug: 'vehicle',
    items: [
        {
            name: 'Bike',
            qty: 0,
            price: 100
        },
        {
            name: 'Scooter/Scooty',
            qty: 0,
            price: 100
        },
        {
            name: 'Car (Mid-range)',
            qty: 0,
            price: 500
        },
        {
            name: 'Car Big',
            qty: 0,
            price: 1000
        }
    ]
};


/***/ }),

/***/ "./src/app/pages/items/items.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.module.ts ***!
  \*********************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items.page */ "./src/app/pages/items/items.page.ts");







const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]
    }
];
let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
    })
], ItemsPageModule);



/***/ }),

/***/ "./src/app/pages/items/items.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-category-row .icon-cat {\n  display: block !important;\n}\n\n.item-category-row ion-button {\n  display: block;\n  height: 100px;\n  white-space: normal;\n}\n\n.button-inner {\n  display: block !important;\n}\n\nion-content {\n  --background: #eaeaea;\n}\n\nion-button span {\n  --flex: none;\n  --display: block !important;\n}\n\nion-content ion-button {\n  --flex-direction: column !important;\n  --display: block !important;\n}\n\n.category {\n  font-size: 14px;\n}\n\nion-content .button-inner {\n  --display: block !important;\n  --flex-direction: column !important;\n}\n\n.item-category-row {\n  background: #fff;\n  height: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n}\n\n.item-category-row p {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n}\n\n.cat-content {\n  display: block;\n  width: 100%;\n}\n\n.number-item {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  right: 20px;\n  background: #f2c811;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 20px;\n  font-size: 14px;\n}\n\n.furniture svg {\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWluaXN0cmF0b3IvV2Vic3Rvcm1Qcm9qZWN0cy9sb2NhbC1zaGlmdGluZy9zcmMvYXBwL3BhZ2VzL2l0ZW1zL2l0ZW1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaXRlbXMvaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FEREE7RUFDRSwyQkFBQTtFQUNBLG1DQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0csa0JBQUE7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BO0VBRUUsV0FBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbXMvaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tY2F0ZWdvcnktcm93IC5pY29uLWNhdCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG5cbn1cblxuLml0ZW0tY2F0ZWdvcnktcm93IGlvbi1idXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLmJ1dHRvbi1pbm5lcntcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG5pb24tYnV0dG9uIHNwYW4ge1xuICAtLWZsZXg6IG5vbmU7XG4gIC0tZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1idXR0b24ge1xuICAtLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgLS1kaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmNhdGVnb3J5e1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuaW9uLWNvbnRlbnQgLmJ1dHRvbi1pbm5lciB7XG4gIC0tZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgLS1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1jYXRlZ29yeS1yb3d7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaXRlbS1jYXRlZ29yeS1yb3cgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXQtY29udGVudHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm51bWJlci1pdGVte1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJjODExO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOjIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mdXJuaXR1cmUgc3Zne1xuXG4gIHdpZHRoOiAyNHB4O1xuXG59IiwiLml0ZW0tY2F0ZWdvcnktcm93IC5pY29uLWNhdCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWNhdGVnb3J5LXJvdyBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5idXR0b24taW5uZXIge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2VhZWFlYTtcbn1cblxuaW9uLWJ1dHRvbiBzcGFuIHtcbiAgLS1mbGV4OiBub25lO1xuICAtLWRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IGlvbi1idXR0b24ge1xuICAtLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgLS1kaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1jb250ZW50IC5idXR0b24taW5uZXIge1xuICAtLWRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIC0tZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1jYXRlZ29yeS1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXRlbS1jYXRlZ29yeS1yb3cgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhdC1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubnVtYmVyLWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmM4MTE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZ1cm5pdHVyZSBzdmcge1xuICB3aWR0aDogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/items/items.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/items/items.page.ts ***!
  \*******************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _category_furniture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category/furniture */ "./src/app/category/furniture.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_fill_items_fill_items_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/fill-items/fill-items.page */ "./src/app/component/fill-items/fill-items.page.ts");
/* harmony import */ var _category_electronic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../category/electronic */ "./src/app/category/electronic.ts");
/* harmony import */ var _category_kitchen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../category/kitchen */ "./src/app/category/kitchen.ts");
/* harmony import */ var _category_accessories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../category/accessories */ "./src/app/category/accessories.ts");
/* harmony import */ var _category_miscellaneous__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../category/miscellaneous */ "./src/app/category/miscellaneous.ts");
/* harmony import */ var _category_vehicles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../category/vehicles */ "./src/app/category/vehicles.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











;
let ItemsPage = class ItemsPage {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.furniture = _category_furniture__WEBPACK_IMPORTED_MODULE_2__["furnitureJsopn"];
        this.electronics = _category_electronic__WEBPACK_IMPORTED_MODULE_5__["electronicJson"];
        this.kitchen = _category_kitchen__WEBPACK_IMPORTED_MODULE_6__["kitchenJson"];
        this.accessories = _category_accessories__WEBPACK_IMPORTED_MODULE_7__["accessoriesJson"];
        this.miscellaneous = _category_miscellaneous__WEBPACK_IMPORTED_MODULE_8__["miscellaneousJson"];
        this.vehicle = _category_vehicles__WEBPACK_IMPORTED_MODULE_9__["vehicleJson"];
        this.total_items = {
            furniture: 0,
            electronics: 0,
            kitchen: 0,
            accessories: 0,
            miscellaneous: 0,
            vehicle: 0
        };
    }
    fillFurniture() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _component_fill_items_fill_items_page__WEBPACK_IMPORTED_MODULE_4__["FillItemsPage"],
                componentProps: {
                    category: this.furniture
                }
            });
            modal.onDidDismiss().then((passData) => {
                this.furniture = passData.data.category;
                this.total_items.furniture = 0;
                for (let i = 0; i < this.furniture.items.length; i++) {
                    this.total_items.furniture = this.total_items.furniture + (+this.furniture.items[i].qty);
                }
            });
            return yield modal.present();
        });
    }
    fillElectronics() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _component_fill_items_fill_items_page__WEBPACK_IMPORTED_MODULE_4__["FillItemsPage"],
                componentProps: {
                    category: this.electronics
                }
            });
            modal.onDidDismiss().then((passData) => {
                this.electronics = passData.data.category;
                this.total_items.electronics = 0;
                for (let i = 0; i < this.electronics.items.length; i++) {
                    this.total_items.electronics = this.total_items.electronics + (+this.electronics.items[i].qty);
                }
            });
            return yield modal.present();
        });
    }
    fillKitchen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _component_fill_items_fill_items_page__WEBPACK_IMPORTED_MODULE_4__["FillItemsPage"],
                componentProps: {
                    category: this.kitchen
                }
            });
            modal.onDidDismiss().then((passData) => {
                this.total_items.kitchen = 0;
                this.kitchen = passData.data.category;
                for (let i = 0; i < this.kitchen.items.length; i++) {
                    this.total_items.kitchen = this.total_items.kitchen + (+this.kitchen.items[i].qty);
                }
            });
            return yield modal.present();
        });
    }
    fillAccessories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _component_fill_items_fill_items_page__WEBPACK_IMPORTED_MODULE_4__["FillItemsPage"],
                componentProps: {
                    category: this.accessories
                }
            });
            modal.onDidDismiss().then((passData) => {
                this.accessories = passData.data.category;
                this.total_items.accessories = 0;
                for (let i = 0; i < this.accessories.items.length; i++) {
                    this.total_items.accessories = this.total_items.accessories + (+this.accessories.items[i].qty);
                }
            });
            return yield modal.present();
        });
    }
    fillMiscellaneous() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _component_fill_items_fill_items_page__WEBPACK_IMPORTED_MODULE_4__["FillItemsPage"],
                componentProps: {
                    category: this.miscellaneous
                }
            });
            modal.onDidDismiss().then((passData) => {
                this.miscellaneous = passData.data.category;
                this.total_items.miscellaneous = 0;
                for (let i = 0; i < this.miscellaneous.items.length; i++) {
                    this.total_items.miscellaneous = this.total_items.miscellaneous + (+this.miscellaneous.items[i].qty);
                }
            });
            return yield modal.present();
        });
    }
    fillVehicle() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _component_fill_items_fill_items_page__WEBPACK_IMPORTED_MODULE_4__["FillItemsPage"],
                componentProps: {
                    category: this.vehicle
                }
            });
            modal.onDidDismiss().then((passData) => {
                this.vehicle = passData.data.category;
                this.total_items.vehicle = 0;
                for (let i = 0; i < this.vehicle.items.length; i++) {
                    this.total_items.vehicle = this.total_items.vehicle + (+this.vehicle.items[i].qty);
                }
            });
            return yield modal.present();
        });
    }
    proceedToaddress() {
        let jsonItems = {
            furniture: this.furniture,
            kitchen: this.kitchen,
            electronics: this.electronics,
            accessories: this.accessories,
            miscellaneous: this.miscellaneous,
            vehicle: this.vehicle
        };
        this.router.navigate(['/car-book', { categories: JSON.stringify(jsonItems) }]);
    }
    ngOnInit() {
        this.total_items.vehicle = 0;
        for (let i = 0; i < this.vehicle.items.length; i++) {
            this.total_items.vehicle = this.total_items.vehicle + (+this.vehicle.items[i].qty);
        }
        this.total_items.furniture = 0;
        for (let i = 0; i < this.furniture.items.length; i++) {
            this.total_items.furniture = this.total_items.furniture + (+this.furniture.items[i].qty);
        }
        this.total_items.accessories = 0;
        for (let i = 0; i < this.accessories.items.length; i++) {
            this.total_items.accessories = this.total_items.accessories + (+this.accessories.items[i].qty);
        }
        this.total_items.kitchen = 0;
        for (let i = 0; i < this.kitchen.items.length; i++) {
            this.total_items.kitchen = this.total_items.kitchen + (+this.kitchen.items[i].qty);
        }
        this.total_items.miscellaneous = 0;
        for (let i = 0; i < this.miscellaneous.items.length; i++) {
            this.total_items.miscellaneous = this.total_items.miscellaneous + (+this.miscellaneous.items[i].qty);
        }
    }
};
ItemsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
ItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: __webpack_require__(/*! raw-loader!./items.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/items/items.page.html"),
        styles: [__webpack_require__(/*! ./items.page.scss */ "./src/app/pages/items/items.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], ItemsPage);



/***/ })

}]);
//# sourceMappingURL=pages-items-items-module-es2015.js.map