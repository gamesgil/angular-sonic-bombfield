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
            '.box{background-color: aqua;}',
            'h1 { color: red; }'
        ],
        template: "\n        <div>\n            <h1>Hello World, " + core_1.VERSION.full + "</h1>\n            <game-table></game-table>\n            <counter-component></counter-component>\n            <hello-world \n                    (onTen)=\"onEvent($event)\"\n                    [msg]=\"inputMsg\">\n            </hello-world>\n            <!--hello-world bind-msg=\"inputMsg\"></hello-world-->\n            <button (click)=\"changeMsg()\">Change</button>\n            <div \n                    [class.box]=\"inputMsg.length > 10\"\n                    [style.border]=\"'5px solid green'\"\n                    [innerHTML]=\"'<h1>' + inputMsg + '</h1><br>' + text\">\n            </div>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map