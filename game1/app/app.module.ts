/**
 * Created by student14 on 26/03/2017.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component"
import {GameGridComponent} from "./game-grid.component"
import {GameGuiComponent} from "./game-gui.component"
import {GameControllerComponent} from "./game-controller.component";

@NgModule({
    declarations: [//contents
        AppComponent,
        GameGridComponent,
        GameGuiComponent,
        GameControllerComponent
    ],

    bootstrap: [//which runs first
        AppComponent
    ],

    imports: [
        BrowserModule
    ]

})

export class AppModule{}