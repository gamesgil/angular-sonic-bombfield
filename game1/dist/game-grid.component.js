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
var utils_1 = require("./utils");
var GameGridComponent = GameGridComponent_1 = (function () {
    function GameGridComponent() {
        this.status = GameGridComponent_1.READY;
        this.currentPos = { x: 0, y: 0 };
        this.gridSize = { x: 5, y: 5 };
        this.grid = [];
        var numOfMines = Math.floor(Math.random() * 5);
        var potentials = utils_1.default.generateRange(1, this.gridSize.x * this.gridSize.y - 1);
        var specialIdxs = utils_1.default.generateRandomNumbers(potentials, GameGridComponent_1.NUM_OF_BOMBS + GameGridComponent_1.NUM_OF_RINGS); // reserve the last 3 for the rings
        for (var y = 0; y < this.gridSize.y; y++) {
            this.grid.push([]);
            for (var x = 0; x < this.gridSize.x; x++) {
                this.grid[y].push(GameGridComponent_1.EMPTY);
            }
        }
        for (var i = 0; i < specialIdxs.length; i++) {
            var gridPos = utils_1.default.idxToGrid(specialIdxs[i], this.gridSize.x);
            var icon = i < specialIdxs.length - GameGridComponent_1.NUM_OF_RINGS ? GameGridComponent_1.BOMB : GameGridComponent_1.RING;
            this.grid[gridPos.y][gridPos.x] = icon;
        }
    }
    GameGridComponent.prototype.isCurPos = function (x, y) {
        return this.currentPos.x === x &&
            this.currentPos.y === y;
    };
    GameGridComponent.prototype.getImage = function (x, y) {
        var result = "";
        if (x === this.currentPos.x && y === this.currentPos.y) {
            result = this.status === GameGridComponent_1.READY ? "url(assets/sonic.png)" : "url(assets/sonic-glow.png)";
        }
        else {
            switch (this.grid[y][x]) {
                case GameGridComponent_1.EMPTY:
                    result = "";
                    break;
                case GameGridComponent_1.BOMB:
                    result = "url(assets/bomb.png)";
                    break;
                case GameGridComponent_1.RING:
                    result = "url(assets/ring.png)";
                    break;
                case GameGridComponent_1.BOOM:
                    result = "url(assets/boom.png)";
                    break;
            }
        }
        return result;
    };
    GameGridComponent.prototype.move = function (dir) {
        if (this.status !== GameGridComponent_1.READY) {
            return;
        }
        var nextX = this.currentPos.x;
        var nextY = this.currentPos.y;
        switch (dir) {
            case "right":
                nextX++;
                break;
            case "left":
                nextX--;
                break;
            case "down":
                nextY++;
                break;
            case "up":
                nextY--;
                break;
        }
        if (nextX >= 0 && nextX < this.gridSize.x) {
            this.currentPos.x = nextX;
        }
        if (nextY >= 0 && nextY < this.gridSize.y) {
            this.currentPos.y = nextY;
        }
        this.checkForMine();
        if (this.status !== GameGridComponent_1.LOSE) {
            this.checkForPrize();
        }
    };
    GameGridComponent.prototype.checkForPrize = function () {
        if (this.grid[this.currentPos.y][this.currentPos.x] === GameGridComponent_1.RING) {
            this.grid[this.currentPos.y][this.currentPos.x] = GameGridComponent_1.EMPTY;
        }
    };
    GameGridComponent.prototype.checkForMine = function () {
        if (this.grid[this.currentPos.y][this.currentPos.x] === GameGridComponent_1.BOMB) {
            this.grid[this.currentPos.y][this.currentPos.x] = GameGridComponent_1.BOOM;
            this.currentPos.x = -1;
            this.currentPos.y = -1;
            this.status = GameGridComponent_1.LOSE;
        }
    };
    return GameGridComponent;
}());
GameGridComponent.EMPTY = 0;
GameGridComponent.BOMB = 1;
GameGridComponent.RING = 2;
GameGridComponent.BOOM = 3;
GameGridComponent.READY = "ready";
GameGridComponent.WIN = "win";
GameGridComponent.LOSE = "lose";
GameGridComponent.NUM_OF_BOMBS = 5;
GameGridComponent.NUM_OF_RINGS = 3;
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameGridComponent.prototype, "move", null);
GameGridComponent = GameGridComponent_1 = __decorate([
    core_1.Component({
        selector: 'game-grid',
        styles: ["\n      .game-grid{\n          width: 350px;\n          height: 300px;\n          float: right;\n      }\n      .game-grid td{\n        width: 64px;\n        height: 64px;\n        border: black 2px solid;\n        background-repeat: no-repeat;\n          background-position-x: 50%;\n          background-position-y: 50%;\n    } \n  "],
        template: "\n<div class=\"game-grid\">\n  <table>\n      <tr *ngFor=\"let y of grid;index as i\">\n          <td *ngFor=\"let x of grid[i];index as j\" [style.background-image]=\"getImage(j, i)\"></td>\n      </tr>\n  </table>\n</div>\n"
    }),
    __metadata("design:paramtypes", [])
], GameGridComponent);
exports.GameGridComponent = GameGridComponent;
var GameGridComponent_1;
//# sourceMappingURL=game-grid.component.js.map