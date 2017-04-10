"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by student14 on 26/03/2017.
 */
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.inputMsg = "Hello Gil";
    }
    AppComponent.prototype.changeMsg = function () {
        this.inputMsg += "!";
    };
    AppComponent.prototype.onEvent = function (num) {
        this.text = num + " chars";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        styles: [
            "\n            \n            .box{background-color: aqua;}\n            h1 { color: red; }\n        "
        ],
        template: "\n        <div>\n            <h1>Hello World, " + core_1.VERSION.full + "</h1>\n            <observ></observ>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map