/**
 * Created by GilS on 31-Mar-17.
 */
import {NgModule} from '@angular/core';
import {TodoItemComponent} from "./todo-item.component";
import {TodoListComponent} from "./todo-list.component";
import {BrowserModule} from "@angular/platform-browser/src/browser";
import {TodoService} from "./todo.service";

@NgModule({
    imports: [],
    exports: [TodoListComponent],
    declarations: [TodoListComponent],
    providers: [BrowserModule],
})
export class TodoModule { }
