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
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
        this.onTen = new core_1.EventEmitter();
    }
    Object.defineProperty(HelloWorldComponent.prototype, "msg", {
        get: function () { return this._msg; },
        set: function (value) {
            this._msg = value;
            this.onTen.emit(value.length);
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HelloWorldComponent.prototype, "onTen", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HelloWorldComponent.prototype, "msg", null);
HelloWorldComponent = __decorate([
    core_1.Component({
        selector: 'hello-world',
        styles: [],
        template: "\n<div>\n  <h3>test {{msg}}</h3>\n</div>\n"
    })
], HelloWorldComponent);
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=hello-world.component.js.map