"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by GilS on 01-Apr-17.
 */
var core_1 = require("@angular/core");
var observ_component_1 = require("./observ.component");
var browser_1 = require("@angular/platform-browser/src/browser");
var http_1 = require("@angular/http");
var ObservModule = (function () {
    function ObservModule() {
    }
    return ObservModule;
}());
ObservModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule],
        exports: [observ_component_1.ObservComponent],
        declarations: [observ_component_1.ObservComponent],
        providers: [browser_1.BrowserModule],
    })
], ObservModule);
exports.ObservModule = ObservModule;
//# sourceMappingURL=observ.module.js.map