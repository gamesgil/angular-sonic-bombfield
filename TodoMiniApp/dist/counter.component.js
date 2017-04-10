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
var CounterComponent = (function () {
    function CounterComponent() {
        this._max = 3;
        this._min = 0;
        this._curValue = 0;
    }
    CounterComponent.prototype.add = function () {
        if (this._curValue < this._max) {
            this.curValue++;
        }
    };
    CounterComponent.prototype.dec = function () {
        if (this._curValue > this._min) {
            this.curValue--;
        }
    };
    CounterComponent.prototype.isOdd = function () {
        return this.curValue % 2 !== 0;
    };
    Object.defineProperty(CounterComponent.prototype, "curValue", {
        get: function () {
            return this._curValue;
        },
        set: function (value) {
            this._curValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    return CounterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CounterComponent.prototype, "curValue", null);
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter-component',
        styles: ["\n      .counter{\n          width: 500px;\n          height: 500px;\n      }\n      .default{\n          font-size: 2em;\n          text-align: center;\n          border: 1px black solid;\n      }\n      .default, button{\n          width: 50px;\n          height: 50px;\n          float: left;\n      }\n      .odd{\n          background-color: palevioletred;\n      }\n      .even{\n          background-color: lightblue;\n      }\n  "],
        template: "\n<div class=\"counter\" [class.odd]=\"isOdd()\">\n    <button class=\"\" (click)=\"dec()\">-</button>\n    <div class=\"default\">{{curValue}}</div>\n    <button class=\"\" (click)=\"add()\">+</button>\n</div>\n"
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map