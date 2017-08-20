webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: 50px 6fr 60px;\r\n        grid-template-rows: 50px 6fr 60px;\r\n    grid-template-areas: \r\n    \"navigation\"\r\n    \"content\"\r\n    \"footer\";\r\n    height: 100vh;\r\n}\r\n\r\n.header {\r\n    background-color: blue;\r\n    grid-area: header;\r\n}\r\n\r\n.navigation {\r\n    background-color: red;\r\n    grid-area: navigation;\r\n}\r\n\r\n.content {\r\n    background-color: #f1f1f1;\r\n    grid-area: content;\r\n    padding: 5px;\r\n    overflow: auto;\r\n}\r\n\r\n.footer {\r\n    background-color: white;\r\n    grid-area: footer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid\">\r\n    <div class=\"navigation\">\r\n        <navigation></navigation>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <pagefooter class=\"footer\"></pagefooter>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagefooter_pagefooter_component__ = __webpack_require__("../../../../../src/app/pagefooter/pagefooter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__box_box_component__ = __webpack_require__("../../../../../src/app/box/box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pageheading_pageheading_component__ = __webpack_require__("../../../../../src/app/pageheading/pageheading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notificationsbox_notificationsbox_component__ = __webpack_require__("../../../../../src/app/notificationsbox/notificationsbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_weakaura_service__ = __webpack_require__("../../../../../src/app/services/weakaura.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__weakauraview_weakauraview_component__ = __webpack_require__("../../../../../src/app/weakauraview/weakauraview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clickablepanel_clickablepanel_component__ = __webpack_require__("../../../../../src/app/clickablepanel/clickablepanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__weakauraview_titlebar_titlebar_component__ = __webpack_require__("../../../../../src/app/weakauraview/titlebar/titlebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profilepicture_profilepicture_component__ = __webpack_require__("../../../../../src/app/profilepicture/profilepicture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__weakaurabox_weakaurabox_component__ = __webpack_require__("../../../../../src/app/weakaurabox/weakaurabox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__weakauraview_strings_strings_component__ = __webpack_require__("../../../../../src/app/weakauraview/strings/strings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__weakauraview_string_string_component__ = __webpack_require__("../../../../../src/app/weakauraview/string/string.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__weakauraview_comments_comments_component__ = __webpack_require__("../../../../../src/app/weakauraview/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__userview_userview_component__ = __webpack_require__("../../../../../src/app/userview/userview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__searchview_searchview_component__ = __webpack_require__("../../../../../src/app/searchview/searchview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__categories_category_category_component__ = __webpack_require__("../../../../../src/app/categories/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__registerview_registerview_component__ = __webpack_require__("../../../../../src/app/registerview/registerview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__loginview_loginview_component__ = __webpack_require__("../../../../../src/app/loginview/loginview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__imagepreview_imagepreview_component__ = __webpack_require__("../../../../../src/app/imagepreview/imagepreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__newsview_newsview_component__ = __webpack_require__("../../../../../src/app/newsview/newsview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__box_box_component__["a" /* BoxComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pageheading_pageheading_component__["a" /* PageHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_3__pagefooter_pagefooter_component__["a" /* PageFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__weakaurabox_weakaurabox_component__["a" /* WeakauraBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_10__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__notificationsbox_notificationsbox_component__["a" /* NotificationsBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_15__weakauraview_weakauraview_component__["a" /* WeakauraViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__clickablepanel_clickablepanel_component__["a" /* ClickablePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_17__weakauraview_titlebar_titlebar_component__["a" /* TitlebarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__profilepicture_profilepicture_component__["a" /* ProfilepictureComponent */],
            __WEBPACK_IMPORTED_MODULE_21__weakauraview_strings_strings_component__["a" /* StringsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__weakauraview_string_string_component__["a" /* StringComponent */],
            __WEBPACK_IMPORTED_MODULE_23__weakauraview_comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__userview_userview_component__["a" /* UserViewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__searchview_searchview_component__["a" /* SearchViewComponent */],
            __WEBPACK_IMPORTED_MODULE_28__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_29__categories_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_30__registerview_registerview_component__["a" /* RegisterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_31__loginview_loginview_component__["a" /* LoginViewComponent */],
            __WEBPACK_IMPORTED_MODULE_32__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_34__imagepreview_imagepreview_component__["a" /* ImagePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_35__newsview_newsview_component__["a" /* NewsViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_36__angular_http__["a" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_weakaura_service__["a" /* WeakauraService */],
            __WEBPACK_IMPORTED_MODULE_14__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_24__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_33__util_time__["a" /* Time */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/box/box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: black;\r\n    background-color: white;\r\n    margin-top: 5px;\r\n    box-shadow: 1px 1px 1px #888888;\r\n}\r\n\r\n.box-heading {\r\n    padding-left: 5px;\r\n    font-size: 22px;\r\n    background-color: white;\r\n    color:#4099FF;\r\n}\r\n\r\n.box-content {\r\n    padding-left: 5px;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n    padding-right: 5px; \r\n    font-size: 14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/box/box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div class=\"box-heading\">\r\n        {{ heading }}\r\n    </div>\r\n    <div class=\"box-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/box/box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxComponent = (function () {
    function BoxComponent() {
    }
    return BoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "heading", void 0);
BoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'box',
        template: __webpack_require__("../../../../../src/app/box/box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/box/box.component.css")],
    })
], BoxComponent);

//# sourceMappingURL=box.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected-categories {\r\n\r\n\r\n}\r\n\r\n.select-categories {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 3fr 1fr;\r\n        grid-template-columns: 3fr 1fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n.combobox {\r\n    height: 26px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    border-color: #4099FF;\r\n}\r\n\r\n.categories {\r\n    width: 100%;\r\n}\r\n\r\n.add-button {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\r\n    <div class=\"select-categories\">\r\n        <div>\r\n            <select class=\"combobox\" [(ngModel)]=\"selectedCategory\">\r\n                <option *ngFor=\"let category of categories\" [value]=\"category\">{{ category }}</option>\r\n            </select>\r\n        </div>\r\n        <div>\r\n            <input type=\"button\" class=\"btn btn-primary btn-xs add-button\" value=\"Add Categorie\" (click)=\"addCategory()\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"selected-categories\">\r\n        <category *ngFor=\"let category of selectedCategories\" [name]=\"category\" (notify)=\"removeCategory($event)\"></category>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_list__ = __webpack_require__("../../../../../src/app/util/list.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = (function () {
    function CategoriesComponent() {
        this.categories = ["Druid", "Monk", "Warrior"];
        this.selectedCategories = [];
        this.categoryList = new __WEBPACK_IMPORTED_MODULE_1__util_list__["a" /* List */]();
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    CategoriesComponent.prototype.ngOnInit = function () { };
    CategoriesComponent.prototype.addCategory = function () {
        if (!this.categoryList.contains(this.selectedCategory) && this.selectedCategory != "" && this.selectedCategory != undefined) {
            this.categoryList.add(this.selectedCategory);
        }
        this.selectedCategories = this.categoryList.toArray();
        this.notify.emit(this.selectedCategories);
    };
    CategoriesComponent.prototype.removeCategory = function (category) {
        this.categoryList.remove(category);
        this.selectedCategories = this.categoryList.toArray();
        this.notify.emit(this.selectedCategories);
    };
    return CategoriesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], CategoriesComponent.prototype, "notify", void 0);
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'categories',
        template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categories/categories.component.css")],
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

var _a;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/categories/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category {\r\n    padding: 5px;\r\n    background-color: #D9EDF7;\r\n    width: auto;\r\n    border: #BCE8F1 solid 1px;\r\n    color: #6A9BB2;\r\n    float: left;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.category-close {\r\n    margin-left: 5px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"category\">\r\n    {{ name }}\r\n    <span class=\"close category-close\" aria-hidden=\"true\" (click)=\"removeClick()\">&times;</span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/categories/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = (function () {
    function CategoryComponent() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent.prototype.removeClick = function () {
        this.notify.emit(this.name);
    };
    return CategoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CategoryComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], CategoryComponent.prototype, "notify", void 0);
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'category',
        template: __webpack_require__("../../../../../src/app/categories/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categories/category/category.component.css")],
    }),
    __metadata("design:paramtypes", [])
], CategoryComponent);

var _a;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/clickablepanel/clickablepanel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickablepanel {\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: black;\r\n    background-color: white;\r\n    margin-bottom: 5px;\r\n    overflow: hidden;    \r\n    box-shadow: 1px 1px 1px #888888;\r\n}\r\n\r\n.clickablepanel-heading {\r\n    padding-left: 5px;\r\n    font-size: 18px;\r\n    background-color: white;\r\n    color:#4099FF;\r\n}\r\n\r\n.arrow {\r\n    margin-right: 5px;\r\n}\r\n\r\n.panel-content {\r\n    padding-left: 5px;\r\n    padding-bottom: 5px;\r\n    padding-right: 5px; \r\n    font-size: 14px;\r\n    -webkit-animation: fade-in 0.5s linear;\r\n            animation: fade-in 0.5s linear;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clickablepanel/clickablepanel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clickablepanel\">\r\n    <div class=\"clickablepanel-heading\" (click)=\"panelClick()\">\r\n        <div *ngIf=\"!contentVisible\">\r\n            <span class=\"arrow\">&#9658;</span>{{ heading }}\r\n        </div>\r\n        <div *ngIf=\"contentVisible\">\r\n            <span class=\"arrow\">&#9660;</span>{{ heading }}\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-content\" [hidden]=\"!contentVisible\" #content>\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/clickablepanel/clickablepanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickablePanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickablePanelComponent = (function () {
    function ClickablePanelComponent() {
    }
    ClickablePanelComponent.prototype.ngOnInit = function () { };
    ClickablePanelComponent.prototype.panelClick = function () {
        this.contentVisible = !this.contentVisible;
    };
    return ClickablePanelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ClickablePanelComponent.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ClickablePanelComponent.prototype, "contentVisible", void 0);
ClickablePanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'clickablepanel',
        template: __webpack_require__("../../../../../src/app/clickablepanel/clickablepanel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/clickablepanel/clickablepanel.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ClickablePanelComponent);

//# sourceMappingURL=clickablepanel.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" [(ngModel)]=\"url\"/><input type=\"button\" (click)=\"sendRequest()\" value=\"Send Request\">\r\n{{ result.name }}"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_user__ = __webpack_require__("../../../../../src/app/util/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(userService) {
        this.userService = userService;
        this.url = "";
        this.result = new __WEBPACK_IMPORTED_MODULE_2__util_user__["a" /* User */]();
    }
    ContactComponent.prototype.sendRequest = function () {
        var _this = this;
        this.userService.getAllUser().then(function (user) { return _this.result = user[0]; });
    };
    ContactComponent.prototype.ngOnInit = function () {
        //this.result = this.userService.getAllUser();
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    -ms-grid-rows: 223px 3fr;\r\n        grid-template-rows: 223px 3fr;\r\n    grid-template-areas: \r\n    \"latestWeakauras mostPopularWeakauras bestRatedWeakauras\"\r\n    \"news news notifications\";\r\n    grid-gap: 5px;\r\n    height: 99%;\r\n}\r\n\r\n.latestWeakauras {\r\n    grid-area: latestWeakauras;\r\n}\r\n\r\n.bestRatedWeakauras {\r\n    grid-area: bestRatedWeakauras;\r\n}\r\n\r\n.mostPopularWeakauras {\r\n    grid-area: mostPopularWeakauras;\r\n}\r\n\r\n.news {\r\n    grid-area: news;\r\n}\r\n\r\n.notifications {\r\n    grid-area: notifications;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-grid\">\r\n    <div class=\"latestWeakauras\">\r\n        <weakaurabox  [weakauras]=\"latestWeakauras\" heading=\"Latest Weakauras\" searchURL=\"/latestWeakauras\">\r\n        </weakaurabox>\r\n    </div>\r\n\r\n    <div class=\"mostPopularWeakauras\">\r\n        <weakaurabox [weakauras]=\"mostPopularWeakauras\" heading=\"Most Popular Weakauras\" searchURL=\"/latestWeakauras\">\r\n        </weakaurabox>\r\n    </div>\r\n\r\n    <div class=\"bestRatedWeakauras\">\r\n        <weakaurabox [weakauras]=\"bestRatedWeakauras\" heading=\"Best Rated Weakauras\" searchURL=\"/latestWeakauras\">\r\n        </weakaurabox>\r\n    </div>\r\n\r\n    <div class=\"news\">\r\n        <news></news>\r\n    </div>\r\n\r\n    <div class=\"notifications\">\r\n        <notificationsbox></notificationsbox>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weakaura_service__ = __webpack_require__("../../../../../src/app/services/weakaura.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(weakauraService) {
        this.weakauraService = weakauraService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weakauraService.getWeakauras().then(function (weakauras) { return _this.latestWeakauras = weakauras; });
        this.weakauraService.getWeakauras().then(function (weakauras) { return _this.mostPopularWeakauras = weakauras; });
        this.weakauraService.getWeakauras().then(function (weakauras) { return _this.bestRatedWeakauras = weakauras; });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weakaura_service__["a" /* WeakauraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weakaura_service__["a" /* WeakauraService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 0.5fr 1fr;\r\n        grid-template-columns: 1fr 0.5fr 1fr;\r\n    -ms-grid-rows: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-areas: \"top top top\"\r\n    \"left content right\"\r\n    \"bottom bottom bottom\";\r\n    height: 100%;\r\n}\r\n\r\n.error-box {\r\n    grid-area: content;\r\n}\r\n\r\n.content {\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error-grid\">\r\n    <div class=\"error-box\">\r\n        <box heading=\"Error {{ code }}\">\r\n            <div class=\"content\">\r\n                <ng-content></ng-content>\r\n            </div>\r\n        </box>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () { };
    return ErrorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ErrorComponent.prototype, "code", void 0);
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/imagepreview/imagepreview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\r\n   position: fixed;\r\n   left: 0px;\r\n   top: 50px;\r\n   height: 100%;\r\n   width: 100%;\r\n   background-color: black;\r\n   opacity: 0.5;\r\n   z-index: 9999;\r\n}\r\n\r\n.grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 4fr 1fr;\r\n        grid-template-columns: 1fr 4fr 1fr;\r\n    -ms-grid-rows: 50px 1fr;\r\n        grid-template-rows: 50px 1fr;\r\n    grid-template-areas: \"left head close\"\r\n    \"left content right\";\r\n    height: 100%;\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 50px;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 10000;\r\n}\r\n\r\n.content {\r\n    grid-area: content;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 70px 1fr 70px;\r\n        grid-template-columns: 70px 1fr 70px;\r\n    height: 500px;\r\n}\r\n\r\n\r\n.head {\r\n    text-align: center;\r\n    color: #ffffff;\r\n    grid-area: head;\r\n    line-height: 50px;\r\n    height: 50px;\r\n    font-size: 30px;\r\n    display: inline-block;\r\n}\r\n\r\n.arrow-left {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    padding: 5px;\r\n    display: inline-block;\r\n    line-height: 600px;\r\n    height: 600px;\r\n}\r\n\r\n.arrow {\r\n    color: #ffffff;\r\n}\r\n\r\n.arrow:hover {\r\n    color: #286090;\r\n}\r\n\r\n.preview {\r\n    text-align: center;\r\n    line-height: 600px;\r\n    height: 650px;\r\n    display: inline-block;\r\n}\r\n\r\n.preview > img {\r\n    max-width: 100%;\r\n    max-height: 600px;\r\n}\r\n\r\n.arrow-right {\r\n    text-align: center;\r\n    font-size: 50px;\r\n    padding: 5px;\r\n    height: 100%;\r\n    display: inline-block;\r\n    line-height: 645px;\r\n    line-height: 600px;\r\n    height: 600px;\r\n}\r\n\r\n.preview-close {\r\n    grid-area: close;\r\n    text-align: right;\r\n    margin-right: 5px;\r\n}\r\n\r\n.close {\r\n    font-size: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/imagepreview/imagepreview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" *ngIf=\"isVisible\">\r\n\r\n</div>\r\n\r\n<div class=\"grid\" *ngIf=\"isVisible\">\r\n    <div class=\"preview-close\">\r\n        <span class=\"close\" (click)=\"close()\">&times;</span>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"arrow-left\">\r\n            <span class=\"arrow glyphicon glyphicon-menu-left\" (click)=\"previousImage()\"></span>\r\n        </div>\r\n        <div class=\"preview\" *ngIf=\"imageURLs\">\r\n            <img src=\"{{ imageURLs[currentImage] }}\" (click)=\"nextImage()\"/>\r\n            <div class=\"footer\">test</div>\r\n        </div>\r\n        <div class=\"arrow-right\">\r\n            <span class=\"arrow glyphicon glyphicon-menu-right\" (click)=\"nextImage()\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"head\">Image {{ currentImage + 1}} out of {{ imageURLs.length }}</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/imagepreview/imagepreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePreviewComponent = (function () {
    function ImagePreviewComponent() {
        this.currentImage = 0;
        this.isVisible = false;
    }
    ImagePreviewComponent.prototype.ngOnInit = function () { };
    ImagePreviewComponent.prototype.open = function () {
        this.isVisible = true;
    };
    ImagePreviewComponent.prototype.close = function () {
        this.isVisible = false;
    };
    ImagePreviewComponent.prototype.nextImage = function () {
        this.currentImage++;
        if (this.currentImage > this.imageURLs.length - 1) {
            this.currentImage = 0;
        }
    };
    ImagePreviewComponent.prototype.previousImage = function () {
        console.log(this.currentImage);
        if (this.currentImage <= 0) {
            this.currentImage = this.imageURLs.length - 1;
        }
        else {
            this.currentImage--;
        }
    };
    return ImagePreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ImagePreviewComponent.prototype, "imageURLs", void 0);
ImagePreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'imagepreview',
        template: __webpack_require__("../../../../../src/app/imagepreview/imagepreview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/imagepreview/imagepreview.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ImagePreviewComponent);

//# sourceMappingURL=imagepreview.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginview/loginview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-view{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 0.5fr 1fr;\r\n        grid-template-columns: 1fr 0.5fr 1fr;\r\n    -ms-grid-rows: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-areas: \"top top top\"\r\n    \"left content right\"\r\n    \"bottom bottom bottom\";\r\n    height: 100%;\r\n}\r\n\r\n.login-box {\r\n    grid-area: content;\r\n}\r\n\r\n.pass-content{\r\n   \r\n}\r\n\r\n.user-content{\r\n    \r\n}\r\n\r\n.login-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template-areas: \"left right\";\r\n    -ms-grid-columns: 150px 1fr;\r\n        grid-template-columns: 150px 1fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n.login-button {\r\n    width: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginview/loginview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-view\">\r\n    <div class=\"login-box\">\r\n        <box heading=\"Login\">\r\n            <div class=\"login-grid\">\r\n                <div class=\"user-label\">\r\n                    <b>Username:</b></div>\r\n                <div class=\"user-content\">\r\n                    <input class=\"form-element\" [(ngModel)]=\"username\" type=\"text\" name=\"username\">\r\n                </div>\r\n                <div class=\"pass-label\">\r\n                    <b>Password: </b>\r\n                </div>\r\n                <div class=\"pass-content\">\r\n                    <input class=\"form-element\" [(ngModel)]=\"password\" type=\"password\" name=\"password\">\r\n                </div>\r\n                <div></div>\r\n                <div class=\"checkbox\">\r\n                    <label><input type=\"checkbox\" name=\"login\" value=\"remember\" [checked]=\"remember\" (change)=\"checkboxClick()\"/> Remember me</label>\r\n                </div>\r\n            </div>\r\n            <input type=\"submit\" class=\"btn btn-primary btn-sm login-button\" (click)=\"loginClick()\" value=\"Login\">\r\n        </box>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/loginview/loginview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginViewComponent = (function () {
    function LoginViewComponent() {
        this.username = "";
        this.password = "";
        this.remember = true;
    }
    LoginViewComponent.prototype.ngOnInit = function () { };
    LoginViewComponent.prototype.checkboxClick = function () {
        this.remember = !this.remember;
    };
    LoginViewComponent.prototype.loginClick = function () {
    };
    return LoginViewComponent;
}());
LoginViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'loginview',
        template: __webpack_require__("../../../../../src/app/loginview/loginview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginview/loginview.component.css")],
    }),
    __metadata("design:paramtypes", [])
], LoginViewComponent);

//# sourceMappingURL=loginview.component.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMENTS; });
var COMMENTS = [
    {
        author: { name: 'user1', joined: Date.now(), profilePicture: "http://orig01.deviantart.net/12c5/f/2014/085/f/b/kanra_icon__128x128__by_akashizaya-d7bsehd.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: Date.now(),
    },
    {
        author: { name: 'user2', joined: Date.now(), profilePicture: "http://orig01.deviantart.net/12c5/f/2014/085/f/b/kanra_icon__128x128__by_akashizaya-d7bsehd.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: Date.now(),
    },
    {
        author: { name: 'user3', joined: Date.now(), profilePicture: "http://orig01.deviantart.net/12c5/f/2014/085/f/b/kanra_icon__128x128__by_akashizaya-d7bsehd.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: Date.now(),
    },
];
//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/news.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NEWS; });
var NEWS = [
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><img src='http://wow.zamimg.com/images/logos/construction.png'/><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "8Jjd8hj",
    },
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><img src='http://wow.zamimg.com/images/logos/construction.png'/><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "7Jjd8hj",
    },
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "6Jjd8hj",
    },
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "5Jjd8hj",
    },
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "4Jjd8hj",
    },
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "3Jjd8hj",
    },
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "2Jjd8hj",
    },
    {
        title: "This is nice news!", imageURL: "http://wow.zamimg.com/images/logos/construction.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        uploadTime: Date.now(),
        hash: "1Jjd8hj",
    },
];
//# sourceMappingURL=news.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/notification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__ = __webpack_require__("../../../../../src/app/util/notificationtypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__ = __webpack_require__("../../../../../src/app/mockdata/weakauras.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/mockdata/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NOTIFICATIONS; });



var NOTIFICATIONS = [
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE },
    { timestamp: Date.now(), actor1: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][1], actor2: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* USER */][2], weakaura: __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */][1], type: __WEBPACK_IMPORTED_MODULE_0__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA },
];
//# sourceMappingURL=notification.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER; });
var USER = [
    {
        name: 'user1', profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        joined: Date.now(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: 'Suu', profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        joined: Date.now(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: 'user3', profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        joined: Date.now(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: 'user4', profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        joined: Date.now(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/mockdata/weakauras.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEAKAURAS; });
var WEAKAURAS = [
    {
        name: "Kil'jaeden Reflection Assignments", author: 'user2', uploadTime: Date.now() - 5000000, updateTime: Date.now(), hash: "78aDsj82", profilePicture: "http://i.imgur.com/JrPjXBr.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: 'Ironfur Stack Display', author: 'Suu', uploadTime: Date.now() - 500000, updateTime: Date.now(), hash: "78aDsj81", profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://i.imgur.com/JrPjXBr.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: 'Test2', author: 'user2', uploadTime: Date.now() - 50000, updateTime: Date.now(), hash: "78aDsj82", profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: 'Test2', author: 'user2', uploadTime: Date.now() - 5000, updateTime: Date.now(), hash: "78aDsj82", profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: 'Test2', author: 'user2', uploadTime: Date.now() - 500, updateTime: Date.now(), hash: "78aDsj82", profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: 'Test2', author: 'user2', uploadTime: Date.now() - 50, updateTime: Date.now(), hash: "78aDsj82", profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: 'Test2', author: 'user2', uploadTime: Date.now() - 50000, updateTime: Date.now(), hash: "78aDsj82", profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: 'Test2', author: 'user2', uploadTime: Date.now() - 50000, updateTime: Date.now(), hash: "78aDsj82", profilePicture: "http://wow.zamimg.com/images/logos/construction.png",
        strings: [
            { version: "1.2.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.1.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.5", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
            { version: "1.0.0", changes: "Added a feature x", string: "d4MevaqjLqQgLuvCkPu1QOsvVsjLAwsPYTuLYUuf(fvkAysLJjOLPe9mPkttPY1ufTnPQ6BsrghPKohPuRtje19ucvDqQuPfsk8qPGMOQKCrPaBKucFujPmsLK0jjfvRKkLEPQentLe1nvc2PI(PuOHQKilLuuEkXuL4QkPIVQKaJvjLCwLKQ5QKkTx0FPsgSQ6WKSyLQESknzQ4YI2mPQplWOjvonKvlLsVwkfZMIBtj7wOFlPHtPwov9COMo46kSDLsFxPOXRu48sjRxjHA)QyatvPYbwsvpyjuCHLuydRsv(WuvkoXQKQxSkPmJPQK6gtvPQHSeQSKLu0tQsHRmvLsFzjeSNLqshAjKYKwsqBQuenQQuXQkfPBTkvSRLqIHnvLONTKetBjezClHqRBvQQ3vkcZBQkj3BQkHjVekD5sjAZRs4ZRsLg9sc50trndzHIffhkyklF07r3JokBQcQA(ROmdxgBBdRRalkoSqj3WwfDshUNY20Jr1iNHuqou0YvOM(If11)UlUfZBn7gRVzn1DOSrJ61JtGZ36xR7O4GWTDeVaABsrzmu8zaQglTStkb(6WMI6cOTzXJccs)cvNKZ3c7OGtJ(vQIIafnASuACHvUbArHYWBOOdaB8ISB6MBQcQpqv3CgUm22gwxbwUziftv5WcfV6MSqXAyaeleiqXbPxp6omqlwOynmaIfceOmWPRRrHXua)iP4RMKfkwddGyHabk6vxavJSqXAyaeleiq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkTAuVECcC(wyiL4WQ4rbbPhZzibkB5mC3Yqkxw4mKfkBICaDCgg(KcYHsZUX6BwtDN3DXTyOa5gWWNuq3AeVURAQmGUvZu3NVTxDBtGVoIopUbkkoiCBhXlG2MuugdfFgGQXsl7KcKBadFsXuvoSqXbPxp6omqlwOynmaIfceOOxDbunYcfRHbqSqGaLboDHTZl1GY1OWywOGrXatszHgNVKafqzYiWcfRHbqSqGafV6MSqXAyaeleiqbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceOyV1guMmcSqXAyaeleiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKIEVYkfWRafN9tXxbfKCpfWJccspluUdmuTCPd5KuaKv6qbAzNuWGcgykdC6Aera1GItUFOxFPLDszvDxnBbTyDwzkrLvIzHZqkRO(cnHw((AYMFVx)fV2QW5skl2fX3rlFFnzZV3R)IxBv4ShLM7B671Y3xt28796V41wfcugXCBgbkQbujqrxIc0bCgg(KsCyv8OGG0J5mKaNlzHsRg1RhNaNlPSjYb0X5ZokojwbdVcsQbLB1u9SWziNDCUKZUhpdBQ)Dn19uRADzVN94ShNDp0Q2DHA3FxtADxVWEnX5oodjqXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkQiYsbOAKfkwkuKfkql7KITpXjqX2N4eOypm4KabkQlG2Mfpkii9luDsoFlSJckIax3QLTjH0HZqk7nz0zHQtsXDF1ROa5gWWNuq3AeVUxDOOA5JBGIIEVYkfWRafNpPyQkhwO4G0RhDhgOfluSggaXcbcu0RUaQgzHI1WaiwiqGYaNUW25LAq5AuymluWOyGjPSqJZxsGcOmzeyHI1WaiwiqGIxDtwOynmaIfceOGTZlluWOyGj5mKaLboDDnkmMAqXxnjluSggaXcbcuS3AdktgbwOynmaIfceiqb8OGG0ZcfOLDsbdkyGPmWPRrebudk3bgQwU0HCskaYkDOmI52mcuudOsGIVcki5EkXHvXJccspMZqk6suGoGZNDuqouA2nwpbo7XcLwnQxpoboFluRp6666619mSPNnPvk1byqXKszv18g(YgxNYkR5ZgqXjXky4vqY9uuooiavJkJlWJccspMfcu0xJaLfBF1kulxuwLx032xQLVZIafFgGQXsl7KcKBauurKLcq1iluSuOiluUvt17UCgszdo7OmWPlWRIyJcsUNslo7OOm26uC2r5wnv)QXziLB1u9AgNHuUvt1RbNHuWxLj3GZqkGxfXgfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEyTA35JbLhw92D(oPbuRv7oFN0aQvV9h3E(N)5F(N)5BQxL58vXatE(l(Z32xd8jgF(U)8xE(U)8TuGUh2OJBp)Z)8p)Z)89jm8XZhdkpSwN)AF(9X2xd8jgF(U)8DsdOwRZ39NVLc094wX9rfdmz7BF7oFmO8WQF(R953hBFnWNy857(Z3jnGA1pF3F(wkq3dmk2hvmWKTV9h3E(N)5F(z0542Z)8PGVkt2IZqkdC6YxbfKCpfBFItGI9WGtkodVcq1iLWok(kOGS0YoPSzD)EtsXxbfKCg20okql7KITpXjqXxbfKAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8n1RYC(QyGjp)f)5B7Rb(eJpF3F(lpF3F(wkq3dB0XTN)5F(NVpHHpE(yq5HZFTpFlfO7bgf7JkgyY2F(U)8DsdOoU98p)Z)8ZOZXTN)5tb8Qi2OGS0YoPGTrELHafmO8aluGw2jfBFItGITpXjqbRZJITHaf9OicRJfkql7KITpXjqX2N4eOG15rX2qGafWJccspluUdmuTCPd5KuaKv6qbRRUzJrkyD1nBm2WA14u3mszeZTzeOOgqLIpvgXonMPYkP8IfjnXkArRVR51ynPmWPlSDAmtLvsnOKBZiqPH1Odcq1iMsuzLyw4mKsZUX6BwtDNMxJ1KafSDAmtLvYzyO2p16skdC6cRRUzJrQbLboDnIiGAqGcon6xPkkcuAydMLgOzuWa62MwVA4vaQg5EkwiVV65EkyqDBdUH1iOqrRmcu08PO5VQbu8vqbj1GIUefOd4mC5JUUUUWE9EgUBhfhe22OAjG62gmLfDBkBICaDCUm8rxxxxxt9Vu7EA)KcYHsZUX6BwtDNMxJ188FrF96FxnX7C(lP4GWTDeVaABsrzmu0xJGwyubyknUoLvwZNnGsBhyaPVfLg2GzPbAgL9Mm6Sq1jP4UV6vuudOsnO4GWxFcPlFfuaQg5SJIEVYkfWRafN9tbDRrQbfuebUUvlBtcPdNHuGCdy4tkOBnIx3fQX246AuySl0TgFCduugrWJccspluW2PXmvwjNHHA)uRljqzfxRwC2rXxbfGQro7OGIBtpo5EkMQYHfkdC6kMBtp3tzGtxBtDORjxhe3trV6cOAKfkwddGyHabkdC6cBNxQbLboDzNWEfaMK7PaktgbwOynmaIfceO4v3KfkwddGyHabkdC6ABQdDnj3tbBNxwOGrXatYzibkdC66Auym1GIVAswOynmaIfceO4G0RhDhgOfluSggaXcbcuUgfgZcfmkgyskl048LeOyV1guMmcSqXAyaeleiqGcgu32GxPkkcuAydMLgOzuuxaTnlEuqq6xO6KC(wyhfi3aAy1u9SWziNHCUKZUh96c1U)UM06UEH9AQhN94S7rxxtADxVWEnT85oT7wY5oodjqjoSkEuqq6XCgsX2xd8jgVs(8IWOAKZok3QP6zHZqo7ESBxVWEnT85oT7c1UFoxYz3JD76f2RPLp3PDxO29Zzpo7ESBxVWEnT85oT7c1UFce4Chlu2e5a64S)NuqouM5MNFpkqUbm8jf0TgXR7QMkdOB1m195BbELdkJaf9ELvkGxbko3rXbHB7iEb02KIYyO4ZaunwAzNuGCdy4tkMQYHfkoi96r3HbAXcfRHbqSqGaf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGaf7T2GYKrGfkwddGyHabcuuxaTnlEuqq6xO6KC(wyhfuebUUvlBtcPdNHuapkii9SqbAzNuWGcgykdC6Aera1GYDGHQLlDiNKcGSshkJyUnJaf1aQeO4RGcsUNYTAQEw4mKZooxYzhN94SJZDC29qRDDDDDDHHAVSt7EeOOlrb6ao7)jL4WQ4rbbPhZziboFYcLwnQxpoboFsztKdOJZD7EOT2AR9YEn11F3ZNuu2iUNIYXbbOAuzCbEuqq6XSqGIdc32r8cOTjfLXqXNbOAS0YoPyvDsdfvezPaunYcflfkYcLboDPm26uCpbkyq5bwOCRMQ3D5mKYgC2rXz4vaQgPe(Kslo7OGVktUbNHuWxLjBXzifFfuqYzhLboDPm26uudk3QP6xnodPOm26uAXiEPC(N)5F((eg(45RFeVaQg7JTVg4tmUDNpguEODNVtAav7pU98p)Z)8p)Z3NWWhpFmO8W5V2NFFS91aFIXNV7pFN0aQ2FC75F(N)5NrNJBp)ZNIYyRtXzhfOLDs5oWq1IYTAQEnJZqk3QP61GZqkkJTovPLDsbdEfkqhqGIEueH1XcfOLDsX2N4eOy7tCcuW68OyBiqGI6cOTzXJccs)cvNKZ3c7OGIiW1TAzBsiD4mKsCyv8OGG0J5mKIEVYkfWRafN7OyvDsJRwC29OhLnAuVECcC(wVhDDDD7E2ut93R)MwsXQ6KgxRyo7E0pfKdLzU55VJI6cOAeZcfmO8aluCQUUdmuT4EceOyQkhwOmWPRyUn9Cpf9QlGQrwOynmaIfceOmWPlSDEPguUgfgZcfmkgyskl048LeOaktgbwOynmaIfceO4v3KfkwddGyHabky78YcfmkgysodjqzGtxxJcJPgu8vtYcfRHbqSqGafhKE9O7WaTyHI1WaiwiqGI9wBqzYiWcfRHbqSqGabkGhfeKEwOevwjMfodP0SBS(M1u3P51ynjqPUzSXOPf1GYDGHQLlDiNKcGSshcu0LOaDaNpx(qBT1w7N7wUSx)96rXQ6Kgx2kqhfSDAmy3C)y)Et6cBNgZdRLeiqrXcbcKa" },
        ],
        images: [
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
            "http://wow.zamimg.com/images/logos/construction.png",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];
//# sourceMappingURL=weakauras.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default {\r\n  background-color: #286090;\r\n  border: none;\r\n  border-radius: 0px;\r\n}\r\n.navbar-default .navbar-brand {\r\n  color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-text {\r\n  color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #ffffff;\r\n  background-color: #5299ff;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #ffffff;\r\n  background-color: #5299ff;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: #5299ff;\r\n}\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #5299ff;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-link {\r\n  color: #ecf0f1;\r\n}\r\n.navbar-default .navbar-link:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #ecf0f1;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #ffffff;\r\n    background-color: #5299ff;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n            <a class=\"navbar-brand\" href=\"#\">WeakLib</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/search\">Search</a></li>\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/contact\">Contact</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span>Register</a></li>\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")],
    })
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news {\r\n    overflow: auto;\r\n    box-shadow: 1px 1px 1px #888888;\r\n}\r\n\r\n.news-content{\r\n    \r\n}\r\n\r\n.news-entry {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 0.5fr 2fr;\r\n        grid-template-columns: 0.5fr 2fr;\r\n    -ms-grid-rows: 0.1fr 0.1fr 1fr;\r\n        grid-template-rows: 0.1fr 0.1fr 1fr;\r\n    grid-template-areas: \"image title\"\r\n    \"image time\"\r\n    \"image content\";\r\n    margin-bottom: 10px;\r\n    box-shadow: \r\n         0px 11px 8px -10px #CCC;\r\n    margin-right: 5px;\r\n}\r\n\r\n.news-image {\r\n    grid-area: image;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n\r\n.news-image > img {\r\n    max-width: 1fr;\r\n}\r\n\r\n.news-title {\r\n    grid-area: title;\r\n    font-size: 28px;\r\n}\r\n\r\n.news-time {\r\n    grid-area: time;\r\n    color: gray;\r\n}\r\n\r\n.news-content {\r\n    grid-area: content;\r\n    padding-top: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"news\">\r\n    <box heading=\"News\">\r\n        <div class=\"news-content\" *ngIf=\"news\">\r\n            <div class=\"news-entry\" *ngFor=\"let newsEntry of news\">\r\n                <div class=\"news-title\">\r\n                    <a routerLink=\"/news/{{ newsEntry.hash }}\">{{ newsEntry.title }}</a>\r\n                </div>\r\n                <div class=\"news-time\">\r\n                    {{ time.difference(newsEntry.uploadTime) }}\r\n                </div>\r\n                <div class=\"news-image\">\r\n                    <a routerLink=\"/news/{{ newsEntry.hash }}\"><img src=\"{{ newsEntry.imageURL }}\" /></a>\r\n                </div>\r\n                <div class=\"news-content\">\r\n                    {{ newsEntry.content }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </box>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
    function NewsComponent(newsService, time) {
        this.newsService = newsService;
        this.time = time;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNews().then(function (news) { return _this.news = news; });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */]) === "function" && _b || Object])
], NewsComponent);

var _a, _b;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/newsview/newsview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news-view {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 2fr 1fr;\r\n        grid-template-columns: 1fr 2fr 1fr;\r\n    -ms-grid-rows: 300px 1fr;\r\n        grid-template-rows: 300px 1fr;\r\n    grid-template-areas: \"left picture right\"\r\n    \"left content right\";\r\n    grid-gap: 10px;\r\n}\r\n\r\n.picture {\r\n    grid-area: picture;\r\n    text-align: center;\r\n}\r\n\r\n.picture-helper {\r\n    height: 300px;\r\n    line-height: 300px;\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n}\r\n\r\n.picture-helper > img {\r\n    max-height: 300px;\r\n}\r\n\r\n.text {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.news {\r\n    grid-area: content;\r\n}\r\n\r\n.title {\r\n    color: #286090;\r\n    padding-left: 5px;\r\n    font-size: 36px;\r\n}\r\n\r\n.timestamp {\r\n    font-size: 12px;\r\n    padding-left: 5px;\r\n    color: #888888;\r\n}\r\n\r\n.news-content {\r\n    padding: 5px;\r\n}\r\n\r\n.comments {\r\n    margin-top: 10px;\r\n    background-color: #ffffff;\r\n    padding: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newsview/newsview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"news-view\" *ngIf=\"news\">\r\n    <div class=\"picture\">\r\n        <div class=\"picture-helper\">\r\n            <img src=\"{{ news.imageURL }}\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"news\">\r\n        <div class=\"text\">\r\n            <div class=\"title\">\r\n                {{ news.title }}\r\n            </div>\r\n            <div class=\"timestamp\">\r\n                {{ time.difference(news.uploadTime ) }}\r\n            </div>\r\n            <div class=\"news-content\">\r\n                {{ news.content }}\r\n            </div>\r\n        </div>\r\n        <div class=\"comments\">\r\n            <comments [source]=\"news\"></comments>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/newsview/newsview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsViewComponent = (function () {
    function NewsViewComponent(newsService, route, time) {
        this.newsService = newsService;
        this.route = route;
        this.time = time;
    }
    NewsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var hash = params['hash'];
            _this.newsService.getNewsWithHash(hash).then(function (news) { return _this.news = news; });
        });
    };
    return NewsViewComponent;
}());
NewsViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'newsview',
        template: __webpack_require__("../../../../../src/app/newsview/newsview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newsview/newsview.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */]) === "function" && _c || Object])
], NewsViewComponent);

var _a, _b, _c;
//# sourceMappingURL=newsview.component.js.map

/***/ }),

/***/ "../../../../../src/app/notificationsbox/notificationsbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notification {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 30px 2fr 0.5fr 2fr 2fr;\r\n        grid-template-columns: 30px 2fr 0.5fr 2fr 2fr;\r\n    grid-gap: 5px;\r\n}\r\n\r\n.picture > img {\r\n    height: 25px;\r\n}\r\n\r\n.time {\r\n    text-align: center;\r\n}\r\n\r\n.actor {\r\n    display: inline-block;\r\n    line-height: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.actor > span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.actor > span {\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notificationsbox/notificationsbox.component.html":
/***/ (function(module, exports) {

module.exports = "<box heading=\"Notifications\">\r\n    <div *ngIf=\"notifications; else noNotifications\">\r\n        <div class=\"notification\" *ngFor=\"let notification of notifications\">\r\n            <div class=\"picture\">\r\n                <img src=\"{{ getImage(notification.type) }}\" />\r\n            </div>\r\n\r\n            <div class=\"actor\">\r\n                <span><a routerLink=\"/user/{{ notification.actor1.name }}\">{{ notification.actor1.name }}</a></span>\r\n            </div>\r\n\r\n            <div class=\"arrow\">\r\n                &rarr;\r\n            </div>\r\n\r\n            <div class=\"actor\">\r\n                <span><a routerLink=\"/weakaura/{{ notification.weakaura.hash }}\">{{ notification.weakaura.name }}</a></span>\r\n            </div>\r\n\r\n            <div class=\"time\">\r\n                {{ time.difference(notification.timestamp) }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-template #noNotifications>You have no notifications :(</ng-template>\r\n</box>"

/***/ }),

/***/ "../../../../../src/app/notificationsbox/notificationsbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_notificationtypes__ = __webpack_require__("../../../../../src/app/util/notificationtypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsBoxComponent = (function () {
    function NotificationsBoxComponent(notificationService, time) {
        this.notificationService = notificationService;
        this.time = time;
        this.NotificationType = __WEBPACK_IMPORTED_MODULE_2__util_notificationtypes__["a" /* NotificationType */];
    }
    NotificationsBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.getNotifications().then(function (notifications) { return _this.notifications = notifications; });
    };
    NotificationsBoxComponent.prototype.getImage = function (notificationType) {
        switch (notificationType) {
            case __WEBPACK_IMPORTED_MODULE_2__util_notificationtypes__["a" /* NotificationType */].USER_NEW_WEAKAURA:
                return "assets/img/plus.png";
            case __WEBPACK_IMPORTED_MODULE_2__util_notificationtypes__["a" /* NotificationType */].WEAKAURA_UPDATE:
                return "assets/img/edit.png";
        }
        return "";
    };
    return NotificationsBoxComponent;
}());
NotificationsBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'notificationsbox',
        template: __webpack_require__("../../../../../src/app/notificationsbox/notificationsbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notificationsbox/notificationsbox.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__util_time__["a" /* Time */]) === "function" && _b || Object])
], NotificationsBoxComponent);

var _a, _b;
//# sourceMappingURL=notificationsbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/pagefooter/pagefooter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagefooter/pagefooter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=footer>Ich bin der footer</div>"

/***/ }),

/***/ "../../../../../src/app/pagefooter/pagefooter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageFooterComponent = (function () {
    function PageFooterComponent() {
    }
    return PageFooterComponent;
}());
PageFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pagefooter',
        template: __webpack_require__("../../../../../src/app/pagefooter/pagefooter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pagefooter/pagefooter.component.css")],
    })
], PageFooterComponent);

//# sourceMappingURL=pagefooter.component.js.map

/***/ }),

/***/ "../../../../../src/app/pageheading/pageheading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pageheading/pageheading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    ICH BIN DER HEADER\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pageheading/pageheading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageHeadingComponent = (function () {
    function PageHeadingComponent() {
    }
    return PageHeadingComponent;
}());
PageHeadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'pageheading',
        template: __webpack_require__("../../../../../src/app/pageheading/pageheading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pageheading/pageheading.component.css")],
    })
], PageHeadingComponent);

//# sourceMappingURL=pageheading.component.js.map

/***/ }),

/***/ "../../../../../src/app/profilepicture/profilepicture.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-picture {\r\n    text-align: center;\r\n    background-color: white;\r\n    border-style: solid;\r\n    border-width: 0px;\r\n    border-color: black;\r\n    padding: 10px;\r\n    box-shadow: 1px 1px 1px #888888;\r\n}\r\n\r\n.profile-picture > img {\r\n    max-width: 75%;\r\n    height: auto;\r\n    padding-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profilepicture/profilepicture.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <div *ngIf=\"profilePicture\" class=\"profile-picture\">\r\n    <img src=\"{{ profilePicture }}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profilepicture/profilepicture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilepictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilepictureComponent = (function () {
    function ProfilepictureComponent() {
    }
    return ProfilepictureComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ProfilepictureComponent.prototype, "profilePicture", void 0);
ProfilepictureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'profilepicture',
        template: __webpack_require__("../../../../../src/app/profilepicture/profilepicture.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profilepicture/profilepicture.component.css")],
    })
], ProfilepictureComponent);

//# sourceMappingURL=profilepicture.component.js.map

/***/ }),

/***/ "../../../../../src/app/registerview/registerview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-content {\r\n    grid-area: content;\r\n}\r\n\r\n.register-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 150px 1fr;\r\n        grid-template-columns: 150px 1fr;\r\n    grid-gap: 5px;\r\n    grid-template-areas: \"left right\";\r\n}\r\n\r\n.content-view {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 0.5fr 1fr;\r\n        grid-template-columns: 1fr 0.5fr 1fr;\r\n    -ms-grid-rows: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-areas: \"top top top\"\r\n    \"left content right\"\r\n    \"bottom bottom bottom\";\r\n    grid-gap: 10px;\r\n    height: 100%;\r\n}\r\n\r\n.register {\r\n    margin-top: 10px;\r\n}\r\n\r\n.register-button {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registerview/registerview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-view\">\r\n    <div class=\"register-content\">\r\n        <box heading=\"Register\">\r\n            <div class=\"register-grid\">\r\n                <div class=\"username-label\">\r\n                    <b>Username:</b>\r\n                </div>\r\n                <div class=\"username-content\">\r\n                    <input class=\"form-element\" [(ngModel)]=\"username\" type=\"text\" />\r\n                </div>\r\n                <div class=\"email-label\">\r\n                    <b>Email:</b>\r\n                </div>\r\n                <div class=\"email-content\">\r\n                    <input class=\"form-element\" [(ngModel)]=\"email\" type=\"text\" />\r\n                </div>\r\n                <div class=\"password-label\">\r\n                    <b>Password:</b>\r\n                </div>\r\n                <div class=\"password-content\">\r\n                    <input class=\"form-element\" [(ngModel)]=\"password\" type=\"password\" />\r\n                </div>\r\n                <div class=\"password-repeat-label\">\r\n                    <b>Repeat Password:</b>\r\n                </div>\r\n                <div class=\"password-repeat-content\">\r\n                    <input class=\"form-element\" [(ngModel)]=\"passwordRepeat\" type=\"password\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"register\">\r\n                <input type=\"button\" class=\"btn btn-primary btn-sm register-button\" value=\"Register\" (click)=\"register()\" />\r\n            </div>\r\n        </box>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/registerview/registerview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterViewComponent = (function () {
    function RegisterViewComponent() {
        this.username = "";
        this.password = "";
        this.passwordRepeat = "";
        this.email = "";
    }
    RegisterViewComponent.prototype.ngOnInit = function () { };
    RegisterViewComponent.prototype.register = function () {
    };
    return RegisterViewComponent;
}());
RegisterViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'registerview',
        template: __webpack_require__("../../../../../src/app/registerview/registerview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registerview/registerview.component.css")],
    }),
    __metadata("design:paramtypes", [])
], RegisterViewComponent);

//# sourceMappingURL=registerview.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weakauraview_weakauraview_component__ = __webpack_require__("../../../../../src/app/weakauraview/weakauraview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userview_userview_component__ = __webpack_require__("../../../../../src/app/userview/userview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__searchview_searchview_component__ = __webpack_require__("../../../../../src/app/searchview/searchview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registerview_registerview_component__ = __webpack_require__("../../../../../src/app/registerview/registerview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loginview_loginview_component__ = __webpack_require__("../../../../../src/app/loginview/loginview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newsview_newsview_component__ = __webpack_require__("../../../../../src/app/newsview/newsview.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'weakaura/:hash', component: __WEBPACK_IMPORTED_MODULE_4__weakauraview_weakauraview_component__["a" /* WeakauraViewComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_5__userview_userview_component__["a" /* UserViewComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__searchview_searchview_component__["a" /* SearchViewComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__registerview_registerview_component__["a" /* RegisterViewComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__loginview_loginview_component__["a" /* LoginViewComponent */] },
    { path: 'news/:hash', component: __WEBPACK_IMPORTED_MODULE_9__newsview_newsview_component__["a" /* NewsViewComponent */] },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/searchview/searchview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchview {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 2fr 1fr;\r\n        grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-areas: \"left content right\"\r\n}\r\n\r\n.content {\r\n    grid-area: content;\r\n}\r\n\r\n.filter {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 150px 1fr;\r\n        grid-template-columns: 150px 1fr;\r\n    grid-gap: 5px;\r\n    grid-template-areas: \"left right\"\r\n}\r\n\r\n.table{\r\n\r\n}\r\n\r\n.picture {\r\n    width: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.weakaura-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 150px 1fr;\r\n        grid-template-columns: 150px 1fr;\r\n    -ms-grid-rows: 30px 25px 100px;\r\n        grid-template-rows: 30px 25px 100px;\r\n    grid-template-areas: \"image name\"\r\n    \"image meta\"\r\n    \"image description\";\r\n}\r\n\r\n.picture-container {\r\n    position: relative;\r\n    -webkit-transform: translate(0px, -50%);\r\n            transform: translate(0px, -50%);\r\n    top: 50%;\r\n}\r\n\r\n.weakaura-picture {\r\n    grid-area: image;\r\n    margin-right: 10px;\r\n}\r\n\r\n.weakaura-name {\r\n    grid-area: name;\r\n    font-size: 22px;\r\n}\r\n\r\n.weawkaura-meta {\r\n    grid-area: meta;\r\n}\r\n\r\n.weakaura-description {\r\n    grid-area: description;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searchview/searchview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searchview\">\r\n    <div class=\"content\">\r\n        <clickablepanel heading=\"Filter\" [contentVisible]=\"true\" #filterPanel>\r\n            <div class=\"filter\">\r\n                <div class=\"name-title\">\r\n                    <b>Name:</b>\r\n                </div>\r\n                <div class=\"name-content\">\r\n                    <input class=\"form-element\" type=\"text\" [(ngModel)]=\"name\" (keydown)=\"checkReturnKey($event)\">\r\n                </div>\r\n                <div class=\"author-title\">\r\n                    <b>Author:</b>\r\n                </div>\r\n                <div class=\"author-content\">\r\n                    <input class=\"form-element\" type=\"text\" [(ngModel)]=\"author\" (keydown)=\"checkReturnKey($event)\">\r\n                </div>\r\n                <div class=\"categories-title\">\r\n                    <b>Categories:</b>\r\n                </div>\r\n                <div class=\"categories-content\">\r\n                    <categories (notify)=\"categoriesChanged($event)\"></categories>\r\n                </div>\r\n                <div></div>\r\n                <div class=\"search\">\r\n                    <input class=\"btn btn-primary btn-sm\" type=\"submit\" value=\"Search\" (click)=\"searchSubmit()\" />\r\n                </div>\r\n            </div>\r\n        </clickablepanel>\r\n        <clickablepanel heading=\"Results\" [contentVisible]=\"false\" #resultPanel>\r\n            <div *ngIf=\"hasResult(); else noResults\">\r\n            <table class=\"table\">\r\n                <tr *ngFor=\"let weakaura of searchResult\">\r\n                    <td>\r\n                        <div class=\"weakaura-grid\">\r\n                            <div class=\"weakaura-picture\">\r\n                                <div class=\"picture-container\">\r\n                                    <img src=\"{{ weakaura.profilePicture }}\" class=\"picture\" />\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"weakaura-name\">\r\n                                <a routerLink=\"/weakaura/{{ weakaura.hash }}\">{{ weakaura.name }}</a>\r\n                            </div>\r\n\r\n                            <div class=\"weakaura-meta\">\r\n                                <img src=\"assets/img/user.png\" class=\"icon\" /><b>Author: </b><a routerLink=\"/user/{{ weakaura.author }}\">{{ weakaura.author }}</a>\r\n                                <img src=\"assets/img/clock.png\" class=\"icon\" /><b>Upload: </b>{{ time.difference(weakaura.uploadTime) }}\r\n                                <img src=\"assets/img/clock.png\" class=\"icon\" /><b>Update: </b>{{ time.difference(weakaura.updateTime) }}\r\n                            </div>\r\n\r\n                            <div class=\"weakaura-description\">\r\n                                {{ weakaura.description }}\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            </div>\r\n            <ng-template #noResults>No results :(</ng-template>\r\n        </clickablepanel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/searchview/searchview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weakaura_service__ = __webpack_require__("../../../../../src/app/services/weakaura.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchViewComponent = (function () {
    function SearchViewComponent(weakauraService, time) {
        this.weakauraService = weakauraService;
        this.time = time;
        this.name = "";
        this.author = "";
        this.searchResult = [];
    }
    SearchViewComponent.prototype.ngOnInit = function () { };
    SearchViewComponent.prototype.searchSubmit = function () {
        this.searchResult = this.weakauraService.searchWeakaura(this.name, this.author, this.categories);
        this.filterPanel.contentVisible = true;
        this.resultPanel.contentVisible = true;
    };
    SearchViewComponent.prototype.categoriesChanged = function (categories) {
        this.categories = categories;
    };
    SearchViewComponent.prototype.hasResult = function () {
        return this.searchResult.length > 0;
    };
    SearchViewComponent.prototype.checkReturnKey = function (event) {
        if (event.key == "Enter") {
            this.searchSubmit();
        }
    };
    return SearchViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('filterPanel'),
    __metadata("design:type", Object)
], SearchViewComponent.prototype, "filterPanel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('resultPanel'),
    __metadata("design:type", Object)
], SearchViewComponent.prototype, "resultPanel", void 0);
SearchViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'searchview',
        template: __webpack_require__("../../../../../src/app/searchview/searchview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/searchview/searchview.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weakaura_service__["a" /* WeakauraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weakaura_service__["a" /* WeakauraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */]) === "function" && _b || Object])
], SearchViewComponent);

var _a, _b;
//# sourceMappingURL=searchview.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_comment__ = __webpack_require__("../../../../../src/app/mockdata/comment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommentService = (function () {
    function CommentService() {
    }
    CommentService.prototype.getComments = function (source) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mockdata_comment__["a" /* COMMENTS */]);
    };
    return CommentService;
}());
CommentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], CommentService);

//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_news__ = __webpack_require__("../../../../../src/app/mockdata/news.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NewsService = (function () {
    function NewsService() {
    }
    NewsService.prototype.getNews = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mockdata_news__["a" /* NEWS */]);
    };
    NewsService.prototype.getNewsWithLatency = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getNews()); }, 2000);
        });
    };
    NewsService.prototype.getNewsWithHash = function (hash) {
        for (var _i = 0, NEWS_1 = __WEBPACK_IMPORTED_MODULE_1__mockdata_news__["a" /* NEWS */]; _i < NEWS_1.length; _i++) {
            var tmp = NEWS_1[_i];
            if (tmp.hash == hash) {
                return Promise.resolve(tmp);
            }
        }
        return null;
    };
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], NewsService);

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_notification__ = __webpack_require__("../../../../../src/app/mockdata/notification.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.getNotifications = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mockdata_notification__["a" /* NOTIFICATIONS */]);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weaklib_service__ = __webpack_require__("../../../../../src/app/services/weaklib.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.getUser = function (userName) {
        return this.http.get(this.baseURL + "/api/user?name=" + userName)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    UserService.prototype.getAllUser = function () {
        return this.http.get(this.baseURL + "/api/user")
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return err; });
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_1__weaklib_service__["a" /* WeaklibService */]));
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/weakaura.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__ = __webpack_require__("../../../../../src/app/mockdata/weakauras.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeakauraService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WeakauraService = (function () {
    function WeakauraService() {
    }
    WeakauraService.prototype.getWeakauras = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */]);
    };
    WeakauraService.prototype.getWeakaurasWithLatency = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getWeakauras()); }, 2000);
        });
    };
    WeakauraService.prototype.getWeakauraWithHash = function (hash) {
        for (var _i = 0, WEAKAURAS_1 = __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */]; _i < WEAKAURAS_1.length; _i++) {
            var weakaura = WEAKAURAS_1[_i];
            if (weakaura.hash == hash) {
                return weakaura;
            }
        }
        return null;
    };
    WeakauraService.prototype.getWeakaurasFromUser = function (username) {
        var tmp = [];
        for (var _i = 0, WEAKAURAS_2 = __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */]; _i < WEAKAURAS_2.length; _i++) {
            var weakaura = WEAKAURAS_2[_i];
            if (weakaura.author == username) {
                tmp.push(weakaura);
            }
        }
        return tmp;
    };
    WeakauraService.prototype.searchWeakaura = function (name, author, categories) {
        var tmp = [];
        for (var _i = 0, WEAKAURAS_3 = __WEBPACK_IMPORTED_MODULE_1__mockdata_weakauras__["a" /* WEAKAURAS */]; _i < WEAKAURAS_3.length; _i++) {
            var weakaura = WEAKAURAS_3[_i];
            if (weakaura.name.includes(name) && weakaura.author.includes(author)) {
                tmp.push(weakaura);
            }
        }
        return tmp;
    };
    return WeakauraService;
}());
WeakauraService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WeakauraService);

//# sourceMappingURL=weakaura.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/weaklib.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaklibService; });
var WeaklibService = (function () {
    function WeaklibService() {
        this.baseURL = "/backend/";
    }
    return WeaklibService;
}());

//# sourceMappingURL=weaklib.service.js.map

/***/ }),

/***/ "../../../../../src/app/userview/userview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-view {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 2fr 1fr;\r\n        grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-areas: \"left content right\";\r\n    grid-gap: 10px;\r\n}\r\n\r\n.profilepicture {\r\n    grid-area: right;\r\n    text-align: center;\r\n}\r\n\r\n.content {\r\n    grid-area: content;\r\n}\r\n\r\n.weakaura-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 5px;\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    padding: 5px;\r\n}\r\n\r\n.follow-button {\r\n    width: 140px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.heading {\r\n    color:#4099FF;\r\n}\r\n\r\n.icon {\r\n    width: 20px;\r\n    height: auto;\r\n    padding-right: 5px;\r\n}\r\n\r\n.weakaura {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 140px 20px 18px;\r\n        grid-template-rows: 140px 20px 18px;\r\n    grid-template-areas: \"picture\"\r\n    \"title\"\r\n    \"date\";\r\n    border: 1px dotted gray;\r\n    padding: 5px;\r\n}\r\n\r\n.picture {\r\n    grid-area: picture;\r\n    text-align: center;\r\n}\r\n\r\n.picture > a > img {\r\n    height: 100%;\r\n}\r\n\r\n.title {\r\n    grid-area: title;\r\n    text-align: center;\r\n}\r\n\r\n.weakaura-date {\r\n    grid-area: date;\r\n    text-align: center;\r\n    color: grey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userview/userview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-view\" *ngIf=\"user.name != undefined; else noUser\">\r\n    <div class=\"profilepicture\">\r\n        <profilepicture profilePicture=\"{{ user.profilePicture }}\">\r\n                <div><h1 class=\"heading\">{{ user.name }}</h1></div>\r\n                <input type=\"button\" class=\"btn btn-primary btn-sm follow-button\" value=\"Follow\" (click)=\"follow()\"/>\r\n                <div><img src=\"assets/img/clock.png\" class=\"icon\"/><b>Joined: </b>{{ time.difference(user.joined) }}</div>\r\n        </profilepicture>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"description\">\r\n            <clickablepanel heading=\"Description\" [contentVisible]=\"true\">\r\n                {{ user.description }}\r\n            </clickablepanel>\r\n        </div>\r\n        <div class=\"weakauras\">\r\n            <clickablepanel heading=\"Weakauras\" [contentVisible]=\"true\">\r\n                <div class=\"weakaura-grid\">\r\n                    <div *ngFor=\"let weakaura of weakauras\" class=\"weakaura\">\r\n                        <div class=\"picture\">\r\n                            <a routerLink=\"/weakaura/{{ weakaura.hash }}\"><img src=\"{{weakaura.profilePicture}}\" /></a>\r\n                        </div>\r\n                        <div class=\"title\">\r\n                            <a routerLink=\"/weakaura/{{ weakaura.hash }}\">{{ weakaura.name }}</a>\r\n                        </div>\r\n                        <div class=\"weakaura-date\">\r\n                            {{ time.difference(weakaura.uploadTime) }}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </clickablepanel>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #noUser><error code=\"404\">That user does not exist!</error></ng-template>"

/***/ }),

/***/ "../../../../../src/app/userview/userview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weakaura_service__ = __webpack_require__("../../../../../src/app/services/weakaura.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserViewComponent = (function () {
    function UserViewComponent(weakauraService, userService, route, time) {
        this.weakauraService = weakauraService;
        this.userService = userService;
        this.route = route;
        this.time = time;
    }
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var username = params['username'];
            _this.userService.getUser(username).then(function (user) { return _this.user = user; });
            _this.weakauras = _this.weakauraService.getWeakaurasFromUser(username);
        });
    };
    UserViewComponent.prototype.follow = function () {
    };
    return UserViewComponent;
}());
UserViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'userview',
        template: __webpack_require__("../../../../../src/app/userview/userview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userview/userview.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_weakaura_service__["a" /* WeakauraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_weakaura_service__["a" /* WeakauraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__util_time__["a" /* Time */]) === "function" && _d || Object])
], UserViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=userview.component.js.map

/***/ }),

/***/ "../../../../../src/app/util/list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
var List = (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(value);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    List.prototype.contains = function (value) {
        var i;
        for (i = 0; i < this.size(); i++) {
            if (this.get(i) == value) {
                return true;
            }
        }
        return false;
    };
    List.prototype.remove = function (value) {
        var i;
        var assign = 0;
        for (i = 0; i < this.size(); i++) {
            if (value == this.get(i)) {
                assign = 1;
            }
            this.items[i] = this.items[i + assign];
        }
        this.items.length = this.items.length - 1;
    };
    List.prototype.toArray = function () {
        return this.items;
    };
    return List;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ "../../../../../src/app/util/notificationtypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationType; });
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["WEAKAURA_UPDATE"] = 0] = "WEAKAURA_UPDATE";
    NotificationType[NotificationType["USER_NEW_WEAKAURA"] = 1] = "USER_NEW_WEAKAURA";
})(NotificationType || (NotificationType = {}));
//# sourceMappingURL=notificationtypes.js.map

/***/ }),

/***/ "../../../../../src/app/util/time.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Time; });
var Time = (function () {
    function Time() {
    }
    Time.prototype.difference = function (previous) {
        var current = Date.now();
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' second(s) ago';
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minute(s) ago';
        }
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hour(s) ago';
        }
        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' day(s) ago';
        }
        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' month(s) ago';
        }
        else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' year(s) ago';
        }
    };
    return Time;
}());

//# sourceMappingURL=time.js.map

/***/ }),

/***/ "../../../../../src/app/util/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/util/weakaura.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weakaura; });
var Weakaura = (function () {
    function Weakaura() {
    }
    return Weakaura;
}());

//# sourceMappingURL=weakaura.js.map

/***/ }),

/***/ "../../../../../src/app/util/weakauraversion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeakauraVersion; });
var WeakauraVersion = (function () {
    function WeakauraVersion() {
    }
    return WeakauraVersion;
}());

//# sourceMappingURL=weakauraversion.js.map

/***/ }),

/***/ "../../../../../src/app/weakaurabox/weakaurabox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".more {\r\n    text-align: right;\r\n}\r\n\r\n.weakaurabox {\r\n    padding: 5px;\r\n}\r\n\r\n.weakauraTime {\r\n    float: right;\r\n}\r\n\r\n.weakauraName {\r\n    text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weakaurabox/weakaurabox.component.html":
/***/ (function(module, exports) {

module.exports = "<box [heading]=\"heading\">\r\n    <div *ngIf=\"weakauras\">\r\n        <div *ngFor=\"let weakaura of weakauras\">\r\n            <span class=\"weakauraName\"><a routerLink=\"/weakaura/{{ weakaura.hash }}\">{{weakaura.name}}</a></span>\r\n            <span class=\"weakauraTime\">{{ time.difference(weakaura.uploadTime) }}</span>\r\n        </div>\r\n        <div class=\"more\">\r\n            <a href=\"{{ searchURL }}\">more...</a>\r\n        </div>\r\n    </div>\r\n</box>"

/***/ }),

/***/ "../../../../../src/app/weakaurabox/weakaurabox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeakauraBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeakauraBoxComponent = (function () {
    function WeakauraBoxComponent(time) {
        this.time = time;
    }
    return WeakauraBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], WeakauraBoxComponent.prototype, "weakauras", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WeakauraBoxComponent.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WeakauraBoxComponent.prototype, "searchURL", void 0);
WeakauraBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'weakaurabox',
        template: __webpack_require__("../../../../../src/app/weakaurabox/weakaurabox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weakaurabox/weakaurabox.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_time__["a" /* Time */]) === "function" && _a || Object])
], WeakauraBoxComponent);

var _a;
//# sourceMappingURL=weakaurabox.component.js.map

/***/ }),

/***/ "../../../../../src/app/weakauraview/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comments {\r\n    text-align: center;\r\n    padding: 5px;\r\n}\r\n\r\n.textarea {\r\n    width: 100%;\r\n    border-color: #33AFFF;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none; /* Safari/Chrome, other WebKit */    /* Firefox, other Gecko */\r\n    box-sizing: border-box;         /* Opera/IE 8+ */\r\n    margin-top: 5px;\r\n    height: 25px;\r\n    overflow: hidden;\r\n    resize: none;\r\n}\r\n\r\n.textarea:focus {\r\n    outline: none;\r\n}\r\n\r\n.send-button {\r\n  margin-top: 5px;\r\n}\r\n\r\n.comment {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 140px 4fr;\r\n        grid-template-columns: 140px 4fr;\r\n    -ms-grid-rows: 20px 120px;\r\n        grid-template-rows: 20px 120px;\r\n    grid-template-areas: \"profilePicture title\"\r\n    \"profilePicture comment\";\r\n    grid-gap: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.comment-profile-picture {\r\n    grid-area: profilePicture;\r\n}\r\n\r\n.comment-profile-picture > img {\r\n    width: 100%;\r\n}\r\n\r\n.comment-title {\r\n    grid-area: title;\r\n    text-align: left;\r\n    font-size: 16px;\r\n}\r\n\r\n.comment-content {\r\n    grid-area: comment;\r\n    text-align: left;\r\n}\r\n\r\n.comments-box {\r\n    margin-top: 5px;\r\n}\r\n\r\n.timestamp {\r\n    color: gray;\r\n    font-size: 14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weakauraview/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comments\">\r\n    <textarea class=\"textarea\" placeholder=\"Write your comment here...\" (keydown)=\"textAreaAdjust()\" (keyup)=\"textAreaAdjust()\" #comment></textarea>\r\n    <div class=\"sendbutton\">\r\n        <button class=\"btn btn-primary btn-sm send-button\" (click)=\"sendComment()\">Send</button>\r\n    </div>\r\n\r\n    <div class=\"comments-box\">\r\n        <div *ngIf=\"comments; else noComments\">\r\n            <div *ngFor=\"let comment of comments\">\r\n                <div class=\"comment\">\r\n                    <div class=\"comment-profile-picture\">\r\n                        <img src=\"{{ comment.author.profilePicture }}\" />\r\n                    </div>\r\n                    <div class=\"comment-title\">\r\n                        <a routerLink=\"/user/{{ comment.author.name }}\">{{ comment.author.name }}</a>\r\n                        <span class=\"timestamp\">{{ time.difference(comment.timestamp) }}</span>\r\n                    </div>\r\n                    <div class=\"comment-content\">\r\n                        {{ comment.comment }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-template #noComments>There are no comments for this weakaura yet. Be the first to write one!</ng-template>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/weakauraview/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = (function () {
    function CommentsComponent(commentService, time) {
        this.commentService = commentService;
        this.time = time;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getComments(this.source).then(function (comments) { return _this.comments = comments; });
    };
    CommentsComponent.prototype.sendComment = function () {
    };
    CommentsComponent.prototype.textAreaAdjust = function () {
        this.comment.nativeElement.style.height = "1px";
        this.comment.nativeElement.style.height = (1 + this.comment.nativeElement.scrollHeight) + "px";
    };
    return CommentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('comment'),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "comment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "source", void 0);
CommentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'comments',
        template: __webpack_require__("../../../../../src/app/weakauraview/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weakauraview/comments/comments.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */]) === "function" && _b || Object])
], CommentsComponent);

var _a, _b;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/weakauraview/string/string.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textarea {\r\n    width: 100%; /* Safari/Chrome, other WebKit */    /* Firefox, other Gecko */\r\n     box-sizing: border-box;         /* Opera/IE 8+ */\r\n     margin-top: 5px;\r\n     resize: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weakauraview/string/string.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"string\">\r\n    <clickablepanel heading=\"{{ weakauraVersion.version }}\">\r\n        <p>{{ weakauraVersion.changes }}</p>\r\n        <input type=\"button\" class=\"btn btn-primary btn-sm\" value=\"Copy to Clipboard\" (click)=\"copyClick()\"/>\r\n        <textarea class=\"textarea\">{{ weakauraVersion.string }}</textarea>\r\n    </clickablepanel>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/weakauraview/string/string.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_weakauraversion__ = __webpack_require__("../../../../../src/app/util/weakauraversion.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StringComponent = (function () {
    function StringComponent() {
    }
    StringComponent.prototype.ngOnInit = function () { };
    StringComponent.prototype.copyClick = function () {
        var textArea = document.createElement("textarea");
        textArea.style.position = 'fixed';
        textArea.value = String(this.weakauraVersion.string);
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        }
        catch (err) {
        }
        document.body.removeChild(textArea);
    };
    return StringComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_weakauraversion__["a" /* WeakauraVersion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_weakauraversion__["a" /* WeakauraVersion */]) === "function" && _a || Object)
], StringComponent.prototype, "weakauraVersion", void 0);
StringComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'weakaurastring',
        template: __webpack_require__("../../../../../src/app/weakauraview/string/string.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weakauraview/string/string.component.css")],
    }),
    __metadata("design:paramtypes", [])
], StringComponent);

var _a;
//# sourceMappingURL=string.component.js.map

/***/ }),

/***/ "../../../../../src/app/weakauraview/strings/strings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weakauraview/strings/strings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"strings\">\r\n    <div *ngIf=\"weakaura\">\r\n        <div *ngFor=\"let string of weakaura.strings\">\r\n            <weakaurastring [weakauraVersion]=\"string\"></weakaurastring>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/weakauraview/strings/strings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_weakaura__ = __webpack_require__("../../../../../src/app/util/weakaura.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StringsComponent = (function () {
    function StringsComponent() {
    }
    StringsComponent.prototype.ngOnInit = function () { };
    return StringsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_weakaura__["a" /* Weakaura */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_weakaura__["a" /* Weakaura */]) === "function" && _a || Object)
], StringsComponent.prototype, "weakaura", void 0);
StringsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'strings',
        template: __webpack_require__("../../../../../src/app/weakauraview/strings/strings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weakauraview/strings/strings.component.css")],
    }),
    __metadata("design:paramtypes", [])
], StringsComponent);

var _a;
//# sourceMappingURL=strings.component.js.map

/***/ }),

/***/ "../../../../../src/app/weakauraview/titlebar/titlebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.weakaura-view{\r\n    \r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: black;\r\n    background-color:lightslategray;\r\n    height: 100%;\r\n    font-size: 22px;\r\n    color: whitesmoke;\r\n    word-spacing: 1rem;\r\n    background-image: C\\Benutzer\\Marc\\Desktop(\"SS\");\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weakauraview/titlebar/titlebar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"weakaura-view\">\r\n    <div *ngIf=\"weakaura\">\r\n     Weakaura:   {{ weakaura.name }} Author: {{weakaura.author}} UploadTime:{{weakaura.uploadTime}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/weakauraview/titlebar/titlebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_weakaura__ = __webpack_require__("../../../../../src/app/util/weakaura.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitlebarComponent = (function () {
    function TitlebarComponent() {
    }
    return TitlebarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_weakaura__["a" /* Weakaura */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_weakaura__["a" /* Weakaura */]) === "function" && _a || Object)
], TitlebarComponent.prototype, "weakaura", void 0);
TitlebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'titlebar',
        template: __webpack_require__("../../../../../src/app/weakauraview/titlebar/titlebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weakauraview/titlebar/titlebar.component.css")],
    })
], TitlebarComponent);

var _a;
//# sourceMappingURL=titlebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/weakauraview/weakauraview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".weakaura-view {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 2fr 1fr;\r\n        grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-areas: \"left content right\";\r\n    grid-gap: 10px;\r\n}\r\n\r\n.follow-button {\r\n    width: 140px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.heading {\r\n    color:#4099FF;\r\n}\r\n\r\n.profilepicture {\r\n    grid-area: right;\r\n    text-align: center;\r\n}\r\n\r\n.content {\r\n    grid-area: content;\r\n}\r\n\r\n.image-grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-gap: 5px;\r\n    -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    padding: 5px;\r\n}\r\n\r\n.picture {\r\n    border: 1px dotted gray;\r\n    text-align: center;\r\n    padding: 5px;\r\n}\r\n\r\n.picture > img{\r\n    height: 140px;\r\n    cursor: pointer;\r\n}\r\n\r\n.images {\r\n\r\n}\r\n\r\n.comments {\r\n\r\n}\r\n\r\n.strings {\r\n\r\n}\r\n\r\n.code-viewer {\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weakauraview/weakauraview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"weakaura-view\"  *ngIf=\"weakaura; else noWeakaura\">\r\n    <div class=\"profilepicture\">\r\n        <profilepicture profilePicture=\"{{ weakaura.profilePicture }}\">\r\n            <div>\r\n                <div><h1 class=\"heading\">{{ weakaura.name }}</h1></div>\r\n                <input type=\"button\" class=\"btn btn-primary btn-sm follow-button\" value=\"Follow\" (click)=\"follow()\"/>\r\n                <div><img src=\"assets/img/user.png\" class=\"icon\"/>Author: <a routerLink=\"/user/{{ weakaura.author }}\">{{ weakaura.author }}</a></div>\r\n                <div><img src=\"assets/img/clock.png\" class=\"icon\"/><b>Upload: </b>{{ time.difference(weakaura.uploadTime) }}</div>\r\n                <div><img src=\"assets/img/clock.png\" class=\"icon\"/><b>Update: </b>{{ time.difference(weakaura.uploadTime) }}</div>\r\n                <div><img src=\"assets/img/eye.png\" class=\"icon\"/>Views: 2</div>\r\n            </div>\r\n        </profilepicture>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"description\">\r\n            <clickablepanel heading=\"Description\" [contentVisible]=\"true\">\r\n                {{ weakaura.description }}\r\n            </clickablepanel>\r\n        </div>\r\n        <div class=\"images\">\r\n            <clickablepanel heading=\"Images\" [contentVisible]=\"true\">\r\n                <div class=\"image-grid\">\r\n                    <div *ngFor=\"let images of weakaura.images; let i = index\" class=\"picture\">\r\n                        <img src=\"{{images}}\" name=\"{{i}}\" (click)=\"openImagePreview($event)\"/>\r\n                    </div>\r\n                </div>\r\n            </clickablepanel>\r\n        </div>\r\n        <div class=\"strings\">\r\n            <clickablepanel heading=\"Strings\">\r\n                <strings [weakaura]=\"weakaura\"></strings>\r\n            </clickablepanel>\r\n        </div>\r\n        <div class=\"code-viewer\">\r\n            <clickablepanel heading=\"Code Viewer\">\r\n            </clickablepanel>\r\n        </div>\r\n        <div class=\"comments\">\r\n            <clickablepanel heading=\"Comments\" [contentVisible]=\"true\">\r\n                <comments [source]=\"weakaura\"></comments>\r\n            </clickablepanel>\r\n        </div>\r\n    </div>\r\n    <imagepreview [imageURLs]=\"weakaura.images\" #imagePreview></imagepreview>\r\n</div>\r\n<ng-template #noWeakaura><error code=\"404\">That weakaura does not exist!</error></ng-template>"

/***/ }),

/***/ "../../../../../src/app/weakauraview/weakauraview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_time__ = __webpack_require__("../../../../../src/app/util/time.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_weakaura_service__ = __webpack_require__("../../../../../src/app/services/weakaura.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeakauraViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeakauraViewComponent = (function () {
    function WeakauraViewComponent(weakauraService, route, time) {
        this.weakauraService = weakauraService;
        this.route = route;
        this.time = time;
    }
    WeakauraViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var hash = params['hash'];
            _this.weakaura = _this.weakauraService.getWeakauraWithHash(hash);
        });
    };
    WeakauraViewComponent.prototype.follow = function () {
    };
    WeakauraViewComponent.prototype.openImagePreview = function (event) {
        this.imagePreview.currentImage = +event.srcElement.name;
        this.imagePreview.open();
    };
    return WeakauraViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('imagePreview'),
    __metadata("design:type", Object)
], WeakauraViewComponent.prototype, "imagePreview", void 0);
WeakauraViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'weakauraview',
        template: __webpack_require__("../../../../../src/app/weakauraview/weakauraview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weakauraview/weakauraview.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_weakaura_service__["a" /* WeakauraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_weakaura_service__["a" /* WeakauraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_time__["a" /* Time */]) === "function" && _c || Object])
], WeakauraViewComponent);

var _a, _b, _c;
//# sourceMappingURL=weakauraview.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map