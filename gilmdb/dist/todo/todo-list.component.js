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
 * Created by GilS on 31-Mar-17.
 */
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.message = "Item name";
        this.border = "";
    }
    TodoListComponent.prototype.reset = function () {
        this.border = "";
        this.message = "Item name";
    };
    TodoListComponent.prototype.getItems = function () {
        return this.todoService.getItems();
    };
    TodoListComponent.prototype.getItem = function (id) {
        return this.todoService.getItem(id);
    };
    TodoListComponent.prototype.addItem = function (text) {
        if (text) {
            this.todoService.addItem(text);
            this.reset();
        }
        else {
            this.message = "Item name missing!";
            this.border = "2px solid red";
        }
    };
    return TodoListComponent;
}());
__decorate([
    core_1.ViewChild("input"),
    __metadata("design:type", core_1.ElementRef)
], TodoListComponent.prototype, "el", void 0);
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        styles: [
            "\n            .normal{\n                \n            }\n            \n            .error{\n                border: 2px solid red;\n            }\n        "
        ],
        template: "\n            <h1>List1</h1>\n            <button (click)=\"addItem(input.value)\">Add item</button>\n            <input #input type=\"text\" (focus)=\"reset()\" [placeholder]=\"message\" [style.border]=\"border\">\n            <todo-item *ngFor=\"let item of getItems();index as j\" [source]=\"getItem(item.id)\"></todo-item>\n        ",
        providers: [todo_service_1.TodoService]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map