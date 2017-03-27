/**
 * Created by student14 on 26/03/2017.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from "./hello-world.component";
import {CounterComponent} from "./counter.component";
import {TableComponent} from "./game-table.component";

@NgModule({
    declarations: [//contents
        AppComponent
    ],

    bootstrap: [//which runs first(?)
        AppComponent
    ],

    imports: [
        BrowserModule
    ]

})

export class AppModule{}