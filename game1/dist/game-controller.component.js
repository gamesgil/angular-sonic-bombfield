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
var core_1 = require("@angular/core");
var GameControllerComponent = (function () {
    function GameControllerComponent() {
        this.onMove = new core_1.EventEmitter();
    }
    GameControllerComponent.prototype.onClick = function (dir) {
        this.onMove.emit(dir);
    };
    GameControllerComponent.prototype.keyboardInput = function (e) {
        switch (e.keyCode) {
            case 37:
                this.onClick("left");
                break;
            case 38:
                this.onClick("up");
                break;
            case 39:
                this.onClick("right");
                break;
            case 40:
                this.onClick("down");
                break;
        }
    };
    return GameControllerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GameControllerComponent.prototype, "onMove", void 0);
__decorate([
    core_1.HostListener("window:keyup", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], GameControllerComponent.prototype, "keyboardInput", null);
GameControllerComponent = __decorate([
    core_1.Component({
        selector: "game-controller",
        styles: ["\n        .game-controller{\n            clear: both;\n            width: 150px;\n            height: 100px;\n            float: left;\n        }\n        \n        .game-controller button{\n            width: 50px;\n            height: 20px;\n            position: relative;\n        }\n\n        .game-controller button:nth-child(1){\n            background: red;\n        }\n\n        .game-controller button:nth-child(2){\n            background: green;\n            float: left;\n            top: 50px;\n        }\n\n        .game-controller button:nth-child(3){\n            background: blue;\n            float: right;\n            top: 50px;\n        }\n\n        .game-controller button:nth-child(4){\n            background: yellow;\n            top: 100px;\n            left: 50px;\n        }\n    "],
        template: "\n        <div class=\"game-controller\">\n            <button (click)=\"onClick('up')\">up</button>\n            <button (click)=\"onClick('left')\">left</button>\n            <button (click)=\"onClick('right')\">right</button>\n            <button (click)=\"onClick('down')\">down</button>\n        </div>\n    "
    })
], GameControllerComponent);
exports.GameControllerComponent = GameControllerComponent;
//# sourceMappingURL=game-controller.component.js.map