/**
 * Created by student14 on 26/03/2017.
 */
import {Component, VERSION} from '@angular/core'

@Component({
    selector: "my-app",
    styles: [
        `
            
            .box{background-color: aqua;}
            h1 { color: red; }
        `
    ],
    template: `
        <div>
            <h1>Hello World, ${VERSION.full}</h1>
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

