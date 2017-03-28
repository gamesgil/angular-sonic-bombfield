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
        this.onNewGame = new core_1.EventEmitter();
    }
    GameControllerComponent.prototype.onClick = function (dir) {
        this.onMove.emit(dir);
    };
    GameControllerComponent.prototype.onClickNewGame = function () {
        this.onNewGame.emit();
    };
    GameControllerComponent.prototype.keyboardInput = function (e) {
        switch (e.keyCode) {
            case 32:
                this.onNewGame.emit();
                break;
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
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GameControllerComponent.prototype, "onNewGame", void 0);
__decorate([
    core_1.HostListener("window:keyup", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], GameControllerComponent.prototype, "keyboardInput", null);
GameControllerComponent = __decorate([
    core_1.Component({
        selector: "game-controller",
        styles: ["\n        .game_controller{\n            clear: both;\n            width: 600px;\n            height: 118px;\n            float: left;\n            background-image: url(assets/gamepad.png);\n            background-repeat: no-repeat;\n            margin-left: 200px;\n        }\n        \n        .gamepad_btn {\n            position: relative;\n            width: 30px;\n            height: 30px;\n            background-color: yellow;\n            border: 1px solid black;\n            cursor: pointer;\n            opacity: 0;\n        }\n\n        .gamepad_btn:nth-child(1){\n            left: 43px;\n            top: 10px;\n        }\n\n        .gamepad_btn:nth-child(2){\n            float: left;\n            top: 10px;\n            left: 14px;\n        }\n\n        .gamepad_btn:nth-child(3){\n            float: left;\n            top: 10px;\n            left: 37px;\n        }\n\n        .gamepad_btn:nth-child(4){\n            float: left;\n            top: 40px;\n            left: -21px;\n        }\n\n        .gamepad_btn:nth-child(5){\n            float: left;\n            top: -15px;\n            left: 29px;\n        }\n\n        .gamepad_btn:nth-child(6){\n            float: left;\n            top: -15px;\n            left: 56px;\n        }\n    "],
        template: "\n        <div class=\"game_controller\">\n            <div class=\"gamepad_btn\" (click)=\"onClick('up')\">up</div>\n            <div class=\"gamepad_btn\" (click)=\"onClick('left')\">left</div>\n            <div class=\"gamepad_btn\" (click)=\"onClick('right')\">right</div>\n            <div class=\"gamepad_btn\" (click)=\"onClick('down')\">down</div>\n            <div class=\"gamepad_btn\" (click)=\"onClickNewGame()\">new game</div>\n            <div class=\"gamepad_btn\" (click)=\"onClickNewGame()\">new game</div>\n        </div>\n    "
    })
], GameControllerComponent);
exports.GameControllerComponent = GameControllerComponent;
//# sourceMappingURL=game-controller.component.js.map