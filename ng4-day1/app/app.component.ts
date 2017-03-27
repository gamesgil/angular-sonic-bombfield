/**
 * Created by student14 on 26/03/2017.
 */
import {Component, VERSION} from '@angular/core'

@Component({
    selector: "my-app",
    styles: [
        '.box{background-color: aqua;}',
        'h1 { color: red; }'
    ],
    template: `
        <div>
            <h1>Hello World, ${VERSION.full}</h1>
            <game-table></game-table>
            <counter-component></counter-component>
            <hello-world 
                    (onTen)="onEvent($event)"
                    [msg]="inputMsg">
            </hello-world>
            <!--hello-world bind-msg="inputMsg"></hello-world-->
            <button (click)="changeMsg()">Change</button>
            <div 
                    [class.box]="inputMsg.length > 10"
                    [style.border]="'5px solid green'"
                    [innerHTML]="'<h1>' + inputMsg + '</h1><br>' + text">
            </div>
        </div>
    `
})

export class AppComponent {
    inputMsg = "Hello Gil";
    text:string;

    changeMsg() {
        this.inputMsg += "!";
    }

    onEvent(num:number) {
        this.text = `${num} chars`;
    }
};

