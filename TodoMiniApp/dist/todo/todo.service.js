"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Created by GilS on 31-Mar-17.
 */
var TodoService = (function () {
    function TodoService() {
        this.counter = 0;
        this.items = [];
    }
    TodoService.prototype.addItem = function (str) {
        this.items.push({
            id: this.counter++,
            text: str
        });
    };
    TodoService.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) {
            if (item.id !== id) {
                return item;
            }
        });
    };
    TodoService.prototype.clear = function () {
        while (this.items.length) {
            this.removeItem(0);
        }
    };
    TodoService.prototype.getItems = function () {
        return this.items;
    };
    TodoService.prototype.getItem = function (id) {
        var results = this.items.filter(function (item) {
            if (item.id === id) {
                return item;
            }
        });
        var result = results.length > 0 ? results[0] : null;
        return result;
    };
    TodoService.prototype.toString = function () {
        return "Items";
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map