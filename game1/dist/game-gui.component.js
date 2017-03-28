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
var GameGuiComponent = (function () {
    function GameGuiComponent() {
        this.name = "Sonic Bombfield";
        this.score = 0;
        this.status = "READY";
    }
    GameGuiComponent.prototype.setStatus = function (status) {
        this.status = status.toUpperCase();
    };
    GameGuiComponent.prototype.addToScore = function (rings) {
        this.score = 10 * rings;
    };
    return GameGuiComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameGuiComponent.prototype, "setStatus", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GameGuiComponent.prototype, "addToScore", null);
GameGuiComponent = __decorate([
    core_1.Component({
        selector: 'game-gui',
        styles: ["\n        .gui-title {\n            display: block;\n            width: 100%;\n            height: 40%;\n            text-align: center;\n            font-size: 2rem;\n        }\n        .game-gui {\n            font-family: 'Press Start 2P', cursive;\n            width: inherit;\n            height: 100px;\n        }\n        .gui-element {\n            width: 50%;\n            font-size: 1rem;\n            color: #a95f24;\n            float: left;\n            margin: 10px 0 10px 0;\n            text-align: center;\n        }\n    "],
        template: "\n        <div class=\"game-gui\">\n            <div class=\"gui-title\">{{name}}</div>\n            <!--hr-->\n            <div class=\"gui-message gui-element\">{{status}}</div>\n            <div class=\"gui-score gui-element\">Score: {{score}}</div>\n        </div>\n    "
    })
], GameGuiComponent);
exports.GameGuiComponent = GameGuiComponent;
//# sourceMappingURL=game-gui.component.js.map