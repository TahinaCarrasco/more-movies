(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pages></app-pages>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-validator */ "./node_modules/class-validator/index.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            providers: [
                class_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'pages',
        loadChildren: function () { return _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__["PagesModule"]; }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-avaliacao-filmes \">\n  <h1>Aqui virá a parte de avaliação de filmes</h1>\n</section>"

/***/ }),

/***/ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-avaliacao-filmes {\n  position: absolute;\n  width: 90%;\n  height: 80%;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: #ffffffe6;\n  box-shadow: 5px 11px 8px 2px rgba(30, 30, 30, 0.7);\n  border-radius: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.ts ***!
  \**********************************************************************/
/*! exports provided: AvaliacaoFilmesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliacaoFilmesComponent", function() { return AvaliacaoFilmesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvaliacaoFilmesComponent = /** @class */ (function () {
    function AvaliacaoFilmesComponent() {
    }
    AvaliacaoFilmesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avaliacao-filmes',
            template: __webpack_require__(/*! ./avaliacao-filmes.component.html */ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.html"),
            styles: [__webpack_require__(/*! ./avaliacao-filmes.component.scss */ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AvaliacaoFilmesComponent);
    return AvaliacaoFilmesComponent;
}());



/***/ }),

/***/ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/avaliacao-filmes/avaliacao-filmes.module.ts ***!
  \*******************************************************************/
/*! exports provided: AvaliacaoFilmesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliacaoFilmesModule", function() { return AvaliacaoFilmesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _avaliacao_filmes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avaliacao-filmes.component */ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvaliacaoFilmesModule = /** @class */ (function () {
    function AvaliacaoFilmesModule() {
    }
    AvaliacaoFilmesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _avaliacao_filmes_component__WEBPACK_IMPORTED_MODULE_3__["AvaliacaoFilmesComponent"]
            ],
            exports: [_avaliacao_filmes_component__WEBPACK_IMPORTED_MODULE_3__["AvaliacaoFilmesComponent"]],
        })
    ], AvaliacaoFilmesModule);
    return AvaliacaoFilmesModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-cadastro\">\n  <h1>Insira seus dados</h1>\n  <span class=\"informativo-cadastro\">\n    Todos os dados aqui inseridos seram armazenados em nossa base de dados para futuras pesquisas e recomendações\n  </span>\n  <form (ngSubmit)=\"onSubmit(refForm)\" #refForm=\"ngForm\" class=\"formulario-cadastro\">\n    <section class=\"primeiro-passo\">\n      <span>1º</span>\n      <div class=\"form-group\">\n        <label for=\"form-control\">Nome Completo</label>\n        <input\n          name=\"nomeCompleto\"\n          type=\"text\"\n          class=\"form-control\"\n          id=\"nomeCompleto\"\n          placeholder=\"João da Silva\"\n          required\n          [(ngModel)]=\"usuario.nomeCompleto\">\n        <label for=\"nomeCompleto\" class=\"error\" *ngIf=\"!usuario.nomeCompleto && submit\">\n          Campo Obrigatório*\n        </label>\n      </div>\n      <div class=\"checkbox-sexo\" id=\"tipo-sexo\">\n          <div class=\"form-check\">\n            <input\n              class=\"form-check-input\"\n              type=\"radio\"\n              name=\"exampleRadios\"\n              id=\"exampleRadios1\"\n              value=\"feminino\"\n              #feminino\n              (click)= \"setSexoSelecionado(feminino.value)\"\n              required>\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\n              Feminino\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input\n              class=\"form-check-input\" \n              type=\"radio\"\n              name=\"exampleRadios\"\n              id=\"exampleRadios2\"\n              value=\"masculino\"\n              #masculino\n              (click)= \"setSexoSelecionado(masculino.value)\">\n            <label class=\"form-check-label\" for=\"exampleRadios2\">\n              Masculino\n            </label>\n          </div>\n          <label for=\"tipo-sexo\" class=\"error msg-sexo\" *ngIf=\"!usuario.sexo && submit\">\n            Campo Obrigatório*\n          </label>\n        </div>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInputDate\">Data de Nascimento</label>\n        <input\n          type=\"date\"\n          class=\"form-control\"\n          id=\"formGroupExampleInputDate\"\n          name=\"dataNascimento\"\n          [(ngModel)]=\"usuario.dtNasc\"\n          required>\n          <label for=\"formGroupExampleInputDate\" class=\"error msg-sexo\" *ngIf=\"!usuario.dtNasc && submit\">\n            Campo Obrigatório*\n          </label>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInputEmail\">E-mail</label>\n        <input\n          name=\"email\"\n          type=\"email\"\n          class=\"form-control\"\n          id=\"formGroupExampleInputEmail\"\n          placeholder=\"email@example.com\"\n          [(ngModel)]=\"usuario.email\"\n          required\n          email>\n        <label for=\"formGroupExampleInputEmail\" class=\"error\" *ngIf=\"!usuario.email && submit\">\n          Campo Obrigatório*\n        </label>\n      </div>\n    </section>\n    <section class=\"segundo-passo\">\n      <span>2º</span>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput\">Cadastre um ID</label>\n        <div class=\"input-group mb-3\">\n          <input\n            type=\"text\"\n            id=\"idUsuario\"\n            class=\"form-control\"\n            placeholder=\"joao_silva\"\n            aria-label=\"Recipient's username\"\n            aria-describedby=\"button-addon2\"\n            name=\"idUsuario\"\n            [(ngModel)]=\"usuario.login\"\n            required>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Verificar</button>\n          </div>\n          <label for=\"idUsuario\" class=\"error\" *ngIf=\"!usuario.login && submit\">\n            Campo Obrigatório*\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInputSenha\">Cadastre uma Senha</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"formGroupExampleInputSenha\"\n          name=\"senha\"\n          [(ngModel)]=\"usuario.senha\"\n          required>\n        <small id=\"passwordHelpInline\" class=\"text-muted\">\n          Deve ter 8 a 20 caracteres.\n        </small>\n        <label for=\"formGroupExampleInputSenha\" class=\"error\" *ngIf=\"!usuario.senha && submit\">\n          Campo Obrigatório*\n        </label>\n      </div>\n      <span>Selecione ao menos 3 generos</span>\n      <section class=\"container-genero\">\n        <ul class=\"selecione-generos\">\n          <li class=\"form-check\" *ngFor=\"let genero of generos\">\n            <input\n              class=\"form-check-input\"\n              type=\"checkbox\"\n              value=\"\"\n              id=\"generosFilmes\"\n              (click)=\"setGenero(genero)\"\n              required>\n            <label class=\"form-check-label\" for=\"generosFilmes\">\n              {{genero}}\n            </label>\n          </li>\n        </ul>\n        <label for=\"generosFilmes\" class=\"error\" *ngIf=\"(!usuario.genero || usuario.genero.length < 3) && submit\">\n          Escolha no mínimo 3\n        </label>\n      </section>\n    </section>\n    <button type=\"submit\" id=\"proxima-etapa\" class=\"fas fa-arrow-right\"></button>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-cadastro {\n  position: absolute;\n  width: 90%;\n  height: 80%;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: #ffffffe6;\n  box-shadow: 5px 11px 8px 2px rgba(30, 30, 30, 0.7);\n  border-radius: 20px; }\n  .container-cadastro h1 {\n    padding: 10px; }\n  .container-cadastro .informativo-cadastro {\n    color: #56a6dc;\n    font-size: 16px; }\n  .container-cadastro .formulario-cadastro {\n    display: flex;\n    justify-content: space-around;\n    height: 80%;\n    margin-top: 1%; }\n  .container-cadastro .formulario-cadastro .primeiro-passo {\n      width: 50%;\n      height: inherit;\n      border-right: 2px solid #56a6dc;\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin-left: 5%; }\n  .container-cadastro .formulario-cadastro .segundo-passo {\n      width: 50%;\n      height: inherit;\n      -ms-grid-row-align: center;\n          align-self: center;\n      margin-left: 5%; }\n  .container-cadastro .formulario-cadastro .form-group {\n      padding-top: 2%;\n      width: 90%;\n      align-items: center; }\n  .container-cadastro .formulario-cadastro span {\n      bottom: 10%;\n      color: #56a6dc;\n      padding-right: 10%; }\n  .container-cadastro .formulario-cadastro .error {\n      font-size: 10px;\n      color: red; }\n  .container-cadastro .formulario-cadastro .error.msg-sexo {\n        -ms-grid-row-align: center;\n            align-self: center; }\n  .container-cadastro .checkbox-sexo {\n    display: flex;\n    margin-left: 20%; }\n  .container-cadastro .checkbox-sexo div {\n      margin-right: 15px; }\n  .container-cadastro .container-genero {\n    border-top: 1px solid #BABABA;\n    margin-right: 10%; }\n  .container-cadastro .container-genero .selecione-generos {\n      display: flex;\n      flex-wrap: wrap;\n      width: 100%;\n      padding: 10px 0; }\n  .container-cadastro .container-genero .selecione-generos .form-check {\n        width: 50%;\n        text-align: start; }\n  .container-cadastro .container-genero .selecione-generos .form-check:nth-of-type(1) {\n          background: rgba(186, 186, 186, 0.3); }\n  .container-cadastro .container-genero .selecione-generos .form-check:nth-of-type(2) {\n          background: rgba(186, 186, 186, 0.3); }\n  .container-cadastro .container-genero .selecione-generos .form-check:nth-of-type(3) {\n          background: rgba(255, 255, 255, 0.3); }\n  .container-cadastro .container-genero .selecione-generos .form-check:nth-of-type(4) {\n          background: rgba(255, 255, 255, 0.3); }\n  .container-cadastro .container-genero .selecione-generos .form-check:nth-of-type(5) {\n          background: rgba(186, 186, 186, 0.3); }\n  .container-cadastro .container-genero .selecione-generos .form-check:nth-of-type(6) {\n          background: rgba(186, 186, 186, 0.3); }\n  #proxima-etapa {\n  position: absolute;\n  height: 5%;\n  bottom: 20px;\n  right: 2%;\n  color: #56a6dc !important;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.component.ts ***!
  \******************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-validator */ "./node_modules/class-validator/index.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/usuario.model */ "./src/app/pages/models/usuario.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(http, validator, router) {
        this.http = http;
        this.validator = validator;
        this.router = router;
        this.generos = [
            'Ação',
            'Aventura',
            'Comédia',
            'Comédia Romântica',
            'Drama',
            'Ficção Científica'
        ];
        this.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
        this.formValid = false;
        this.submit = false;
    }
    CadastroComponent.prototype.ngOnInit = function () {
        if (this.validator.isEmpty(this.usuario.genero)) {
            this.usuario.genero = new Array();
        }
    };
    CadastroComponent.prototype.setSexoSelecionado = function (sexo) {
        this.usuario.sexo = sexo;
    };
    CadastroComponent.prototype.setGenero = function (genero) {
        this.usuario.genero.push(genero);
    };
    CadastroComponent.prototype.enviarDadosCadastrados = function () {
        var url = "https://more-movies.000webhostapp.com/ajax/cadastro_save.php";
        this.http.post(url, JSON.stringify(this.usuario))
            .subscribe(function (dados) { return console.log('sucesso', dados); });
    };
    CadastroComponent.prototype.onSubmit = function (form) {
        this.formValid = form.valid;
        this.submit = true;
        if (this.isFormValid) {
            this.enviarDadosCadastrados();
            this.router.navigate(['/avaliacao-filmes']);
        }
    };
    Object.defineProperty(CadastroComponent.prototype, "isFormValid", {
        get: function () {
            return (this.formValid && this.usuario.genero.length >= 3);
        },
        enumerable: true,
        configurable: true
    });
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/pages/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.scss */ "./src/app/pages/cadastro/cadastro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            class_validator__WEBPACK_IMPORTED_MODULE_3__["Validator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.module.ts ***!
  \***************************************************/
/*! exports provided: CadastroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroModule", function() { return CadastroModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.component */ "./src/app/pages/cadastro/cadastro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroModule = /** @class */ (function () {
    function CadastroModule() {
    }
    CadastroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]
            ],
            exports: [_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]],
        })
    ], CadastroModule);
    return CadastroModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div *ngFor=\"let books of filmes$ | async\">\n  home works!\n</div> -->\n<section class=\"container-home\">\n   <h1>Aqui vira a home </h1>\n</section>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-home {\n  position: absolute;\n  width: 90%;\n  height: 80%;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: #ffffffe6;\n  box-shadow: 5px 11px 8px 2px rgba(30, 30, 30, 0.7);\n  border-radius: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    // filmes$: Observable<any>;
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.filmes$ = this.httpClient.get('/users');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/pages.routing.module */ "./src/app/pages/pages.routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                src_app_pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-login\">\n  \n  <div class=\"login-usuario\">\n\n    <span class=\"text-login\">\n      Faça login em sua conta More Movies\n      <i class=\"fas fa-film\"></i>\n    </span>\n\n    <form (ngSubmit)=\"onSubmit(formLogin)\" #formLogin=\"ngForm\" class=\"form-group\">\n\n      <a class=\"link-cadastro\" routerLink=\"/cadastro\">\n        Se cadastrar\n        <i class=\"far fa-address-card\"></i>\n      </a>\n\n      <section class=\"inputs-login\">\n        <div class=\"form-inline\">\n          <label for=\"idUsuario\">ID</label>\n          <input\n            class=\"form-control mx-sm-3\"\n            id=\"idUsuario\"\n            type=\"text\"\n            placeholder=\"Usuario\"\n            autocomplete=\"off\"\n            name=\"login\"\n            [(ngModel)]=\"usuario.login\"\n            required>\n            <label for=\"idUsuario\" class=\"error\" *ngIf=\"!usuario.login && formLogin.submitted\">\n              Campo obrigatório*\n            </label>\n        </div>\n  \n        <div class=\"form-inline\">    \n          <label for=\"senhaUsuario\">Senha</label>\n          <input\n            type=\"password\"\n            id=\"senhaUsuario\"\n            class=\"form-control mx-sm-3\"\n            aria-describedby=\"passwordHelpInline\"\n            autocomplete=\"off\"\n            name=\"senha\"\n            [(ngModel)]=\"usuario.senha\"\n            required>\n          <small id=\"passwordHelpInline\" class=\"text-muted\">\n            Deve ter 8 a 20 caracteres.\n          </small>\n          <label for=\"senhaUsuario\" class=\"error\" *ngIf=\"!usuario.senha && formLogin.submitted\">\n            Campo obrigatório*\n          </label>\n        </div>\n      </section>\n\n      <footer class=\"acesso-conta\">\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" >\n          Entrar\n        </button>\n        <a routerLink=\"/##\">Esqueci minha senha</a>\n      </footer>\n\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-login {\n  position: absolute;\n  width: 40%;\n  height: 70%;\n  top: 60%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center; }\n  .container-login .text-login {\n    position: relative;\n    bottom: 10px;\n    z-index: 10;\n    font-size: 1.2em;\n    font-family: \"Roboto-Light\", sans-serif;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: black;\n    top: 10px; }\n  .container-login .login-usuario {\n    position: absolute;\n    width: 100%;\n    height: 80%;\n    background-color: #ffffffe6;\n    box-shadow: 5px 11px 8px 2px rgba(30, 30, 30, 0.7);\n    border-radius: 20px; }\n  .container-login .login-usuario .form-group {\n      padding-top: 5%;\n      height: 80%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n  .container-login .login-usuario .inputs-login {\n      padding: 0 25px 0 15px; }\n  .container-login .login-usuario .inputs-login::after {\n        content: '';\n        display: table;\n        clear: both; }\n  .container-login .login-usuario .inputs-login .form-inline {\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n        margin-bottom: 15px; }\n  .container-login .login-usuario .inputs-login .form-inline label {\n          justify-content: flex-end;\n          margin-right: 10px; }\n  .container-login .login-usuario .inputs-login .form-inline input {\n          width: 80%;\n          margin: 0 !important; }\n  .container-login .login-usuario .inputs-login .error {\n        font-size: 10px;\n        color: red; }\n  .container-login .acesso-conta {\n    text-align: center; }\n  .container-login .acesso-conta a {\n      display: block;\n      font-size: 0.8em;\n      cursor: pointer; }\n  .container-login .acesso-conta button {\n      display: inline-block;\n      width: 50%; }\n  .link-cadastro {\n  margin-right: 10px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/usuario.model */ "./src/app/pages/models/usuario.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (!this.usuario) {
            this.usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_3__["Usuario"]();
        }
    };
    LoginComponent.prototype.onSubmit = function (form) {
        if (form.valid && !this.postLogin()) {
            this.postLogin();
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.postLogin = function () {
        var url = "https://more-movies.000webhostapp.com/ajax/login.php";
        // Solução temporaria até a API trazer as repostas certas e se sucesses ou não, apresentei no alert para ficar mais visivel.
        return this.http.post(url, JSON.stringify(this.usuario)).subscribe(function (response) { return alert(JSON.stringify(response)); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages.routing.module */ "./src/app/pages/pages.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"]
            ],
            declarations: [
                src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            exports: [src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu>\n  <header class=\"header-menu\">\n    <h1>More Movies\n      <i class=\"fas fa-film\"></i>\n    </h1>\n    <div *ngIf=\"exibir\" class=\"pesquisa-filmes\">\n      <input\n        class=\"campo-busca\"\n        type=\"text\"\n        placeholder=\"Buscar por titulo, genero, diretor ou ator\"\n        maxlength=\"50\"\n        #textoParaBusca>\n      <button (click)=\"buscaFilmes(textoParaBusca.value)\">\n          <i class=\"icon fas fa-search\"></i>\n      </button>\n    </div>\n  </header>\n  <div *ngIf=\"exibir\" class=\"link-menu\">\n    <a>Home</a>\n    <a>Filmes</a>\n    <a>Perfil</a>\n  </div>\n</menu>"

/***/ }),

/***/ "./src/app/pages/menu/menu.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/menu/menu.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-menu {\n  background-color: black;\n  display: flex;\n  padding-top: 2%; }\n  .header-menu h1 {\n    color: #DCDCDC;\n    font-size: 233%;\n    font-family: sans-serif;\n    margin-left: 41%;\n    width: 80%; }\n  .header-menu .pesquisa-filmes {\n    position: absolute;\n    height: 6vh;\n    width: 30vw;\n    left: 74%; }\n  .header-menu .pesquisa-filmes button {\n      position: relative;\n      top: 1vh;\n      right: 3vw;\n      border: 0;\n      background: none;\n      cursor: pointer;\n      color: #969797;\n      font-size: 1rem; }\n  .header-menu .pesquisa-filmes .campo-busca {\n      transition: all .5s ease;\n      border: 0;\n      border-radius: 50em;\n      padding: 2%;\n      width: 23vw;\n      height: 5vh;\n      color: #969797;\n      font-size: 0.8em;\n      background: rgba(30, 30, 30, 0.7); }\n  .link-menu {\n  width: 100vw;\n  height: 7vh;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: space-around; }\n  .link-menu a {\n    color: white;\n    font-family: \"Roboto-Light\", sans-serif;\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    -ms-grid-row-align: center;\n        align-self: center; }\n"

/***/ }),

/***/ "./src/app/pages/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.exibir = false;
    };
    MenuComponent.prototype.buscaFilmes = function (textoParaBusca) {
        console.log('vai voltar os filmes', textoParaBusca);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/pages/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/pages/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "./src/app/pages/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
            exports: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/pages/models/usuario.model.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/models/usuario.model.ts ***!
  \***********************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-validator */ "./node_modules/class-validator/index.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Usuario.prototype, "nomeCompleto", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsEmail"])(),
        __metadata("design:type", String)
    ], Usuario.prototype, "email", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Usuario.prototype, "sexo", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsDate"])(),
        __metadata("design:type", Date)
    ], Usuario.prototype, "dtNasc", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Usuario.prototype, "login", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsString"])(),
        __metadata("design:type", String)
    ], Usuario.prototype, "senha", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsArray"])(),
        __metadata("design:type", Array)
    ], Usuario.prototype, "genero", void 0);
    return Usuario;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-menu></app-menu>\n</header>\n<main class=\"main-pages\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-pages {\n  position: absolute;\n  font-size: 120%;\n  text-align: center;\n  width: 100vw;\n  height: 100vh; }\n\n.main-pages:before {\n  content: '';\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  left: 0;\n  background: url('Filmes-MCU.png') no-repeat;\n  background-size: cover;\n  opacity: 0.7; }\n\nheader {\n  position: fixed;\n  width: 100vw;\n  height: 10vh;\n  z-index: 10; }\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_pages_login_login_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var _avaliacao_filmes_avaliacao_filmes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avaliacao-filmes/avaliacao-filmes.module */ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.module.ts");
/* harmony import */ var _cadastro_cadastro_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.module */ "./src/app/pages/cadastro/cadastro.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/pages/home/home.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/pages/menu/menu.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.routing.module */ "./src/app/pages/pages.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__["MenuModule"],
                _cadastro_cadastro_module__WEBPACK_IMPORTED_MODULE_4__["CadastroModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PagesRoutingModule"],
                _avaliacao_filmes_avaliacao_filmes_module__WEBPACK_IMPORTED_MODULE_3__["AvaliacaoFilmesModule"],
                src_app_pages_login_login_module__WEBPACK_IMPORTED_MODULE_2__["LoginModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"],
            ],
            exports: [
                _pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages.routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/cadastro/cadastro.component */ "./src/app/pages/cadastro/cadastro.component.ts");
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _avaliacao_filmes_avaliacao_filmes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avaliacao-filmes/avaliacao-filmes.component */ "./src/app/pages/avaliacao-filmes/avaliacao-filmes.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pageRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'cadastro',
        component: src_app_pages_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_2__["CadastroComponent"],
    },
    {
        path: 'avaliacao-filmes',
        component: _avaliacao_filmes_avaliacao_filmes_component__WEBPACK_IMPORTED_MODULE_4__["AvaliacaoFilmesComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pageRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tahina/filmesAngular/more-movies/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map