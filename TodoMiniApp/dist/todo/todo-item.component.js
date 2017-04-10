/**
 * Created by GilS on 31-Mar-17.
 */
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
var todo_service_1 = require("./todo.service");
var TodoItemComponent = (function () {
    function TodoItemComponent(todoService) {
        this.todoService = todoService;
        this.item = { id: -1, text: "nothing" };
    }
    TodoItemComponent.prototype.remove = function () {
        this.todoService.removeItem(this.item.id);
    };
    Object.defineProperty(TodoItemComponent.prototype, "source", {
        set: function (item) {
            this.item = item;
        },
        enumerable: true,
        configurable: true
    });
    return TodoItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TodoItemComponent.prototype, "source", null);
TodoItemComponent = __decorate([
    core_1.Component({
        selector: 'todo-item',
        styles: ["\n        .todo-item{\n            width: 120px;\n            height: 20px;\n            border: 2px solid darkblue;\n            -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;\n            margin: 4px;\n            \n        }\n        \n        .todo-item > div{\n            width: 70%;\n            height: inherit;\n            overflow: hidden;\n            float: left;\n        }\n        \n        .todo-item > button{\n            float: right;\n        }\n    "],
        template: "\n        <div class=\"todo-item\"><div>{{item.id}}/{{item.text}}</div><button (click)=\"remove()\">X</button></div>\n    "
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoItemComponent);
exports.TodoItemComponent = TodoItemComponent;
//# sourceMappingURL=todo-item.component.js.map