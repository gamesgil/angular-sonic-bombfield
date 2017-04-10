/**
 * Created by student14 on 26/03/2017.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodoModule} from "./todo/todo.module";
import {TodoListComponent} from "./todo/todo-list.component";
import {TodoItemComponent} from "./todo/todo-item.component";
import {ObservComponent} from "./observables/observ.component";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [//contents
        AppComponent,
        TodoListComponent,
        TodoItemComponent,
        ObservComponent
    ],

    bootstrap: [//which runs first(?)
        AppComponent
    ],

    imports: [
        BrowserModule, HttpModule
    ]

})

export class AppModule{}