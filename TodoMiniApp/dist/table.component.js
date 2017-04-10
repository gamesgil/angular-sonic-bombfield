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
var TableComponent = (function () {
    function TableComponent() {
        this.currentPos = { x: 0, y: 0 };
        this.array = Array(10);
    }
    TableComponent.prototype.isCurPos = function (x, y) {
        return this.currentPos.x === x &&
            this.currentPos.y === y;
    };
    Object.defineProperty(TableComponent.prototype, "size", {
        set: function (value) {
            this.array = Array(value);
        },
        enumerable: true,
        configurable: true
    });
    return TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TableComponent.prototype, "size", null);
TableComponent = __decorate([
    core_1.Component({
        selector: 'game-table',
        styles: [],
        template: "\n<div>\n  <table>\n      <tr *ngFor=\"let y of array;index as j\">\n          <td *ngFor=\"let x of array;index as i\"></td>\n      </tr>\n  </table>\n</div>\n"
    })
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map