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
    AppComponent.prototype.ngOnInit = function () {
        this.onStartGame();
    };
    AppComponent.prototype.onStartGame = function () {
        this.audTitle.nativeElement.currentTime = 0;
        this.audTitle.nativeElement.play();
    };
    AppComponent.prototype.onCollect = function () {
        this.audCollect.nativeElement.play();
    };
    AppComponent.prototype.onWin = function () {
        this.audTitle.nativeElement.pause();
        this.audWin.nativeElement.play();
    };
    AppComponent.prototype.onExplode = function () {
        this.audTitle.nativeElement.pause();
        this.audExplosion.nativeElement.play();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild("audioMusic"),
    __metadata("design:type", Object)
], AppComponent.prototype, "audTitle", void 0);
__decorate([
    core_1.ViewChild("audioCollect"),
    __metadata("design:type", Object)
], AppComponent.prototype, "audCollect", void 0);
__decorate([
    core_1.ViewChild("audioExplosion"),
    __metadata("design:type", Object)
], AppComponent.prototype, "audExplosion", void 0);
__decorate([
    core_1.ViewChild("audioWin"),
    __metadata("design:type", Object)
], AppComponent.prototype, "audWin", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        styles: ["\n        .my-app{\n                background-color: aliceblue;\n                width: 640px;\n                height: 600px;\n            }\n        h1 { color: red; }\n        "],
        template: "\n        <div class=\"my-app\">\n            <game-gui           #gui></game-gui>\n            \n            <game-grid          #grid       (onPrize)=\"gui.addToScore($event);onCollect($event)\"\n                                            (onCollectedAll)=\"gui.setStatus($event);onWin($event)\"\n                                            (onExplode)=\"onExplode($event)\"></game-grid>\n\n            <game-controller    #controller (onMove)=\"grid.move($event)\" (onNewGame)=\"grid.reset($event);onStartGame($event)\"></game-controller>\n        </div>\n        <audio #audioMusic src=\"assets/title.ogg\"></audio>\n        <audio #audioCollect src=\"assets/collect.mp3\"></audio>\n        <audio #audioExplosion src=\"assets/explosion.mp3\"></audio>\n        <audio #audioWin src=\"assets/win.mp3\"></audio>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map