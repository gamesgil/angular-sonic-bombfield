"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by GilS on 31-Mar-17.
 */
var core_1 = require("@angular/core");
var todo_list_component_1 = require("./todo-list.component");
var browser_1 = require("@angular/platform-browser/src/browser");
var TodoModule = (function () {
    function TodoModule() {
    }
    return TodoModule;
}());
TodoModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [todo_list_component_1.TodoListComponent],
        declarations: [todo_list_component_1.TodoListComponent],
        providers: [browser_1.BrowserModule],
    })
], TodoModule);
exports.TodoModule = TodoModule;
//# sourceMappingURL=todo.module.js.map