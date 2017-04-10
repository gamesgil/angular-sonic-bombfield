/**
 * Created by student14 on 26/03/2017.
 */
import {Component, VERSION} from '@angular/core'

@Component({
    selector: "my-app",
    styles: [
        `
            body{
                font-family: sans-serif;
            }
            
            
        `
    ],
    template: `
        <div>
            <observ></observ>
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

