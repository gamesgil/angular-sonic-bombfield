"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by student14 on 26/03/2017.
 */
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.move = function (dir) {
        //console.log("on move " + dir)
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "move", null);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        styles: ["            \n            .my-app{\n                background-color: lightgray;\n                width: 640px;\n                height: 600px;\n            }\n            h1 { color: red; }\n        "],
        template: "\n        <div class=\"my-app\">\n            <game-gui></game-gui>\n            <game-controller (onMove)=\"grid.move($event)\"></game-controller>\n            <game-grid #grid></game-grid>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map