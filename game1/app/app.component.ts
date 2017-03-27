/**
 * Created by student14 on 26/03/2017.
 */
import {Component, Input, VERSION} from '@angular/core'
import {GameGridComponent} from "./game-grid.component"

@Component({
    selector: "my-app",
    styles: [`            
            .my-app{
                background-color: lightgray;
                width: 640px;
                height: 600px;
            }
            h1 { color: red; }
        `],
    template: `
        <div class="my-app">
            <game-gui></game-gui>
            <game-controller (onMove)="grid.move($event)"></game-controller>
            <game-grid #grid></game-grid>
        </div>
    `
})

export class AppComponent {
    @Input() move(dir:string) {
        //console.log("on move " + dir)
    }
};

