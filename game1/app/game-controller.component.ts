import {Component, EventEmitter, Input, Output, HostListener} from "@angular/core";

@Component({
    selector: "game-controller",
    styles: [`
        .game-controller{
            clear: both;
            width: 150px;
            height: 100px;
            float: left;
        }
        
        .game-controller button{
            width: 50px;
            height: 20px;
            position: relative;
        }

        .game-controller button:nth-child(1){
            background: red;
        }

        .game-controller button:nth-child(2){
            background: green;
            float: left;
            top: 50px;
        }

        .game-controller button:nth-child(3){
            background: blue;
            float: right;
            top: 50px;
        }

        .game-controller button:nth-child(4){
            background: yellow;
            top: 100px;
            left: 50px;
        }
    `],
    template: `
        <div class="game-controller">
            <button (click)="onClick('up')">up</button>
            <button (click)="onClick('left')">left</button>
            <button (click)="onClick('right')">right</button>
            <button (click)="onClick('down')">down</button>
        </div>
    `
})
export class GameControllerComponent{
    @Output() onMove: EventEmitter<any> = new EventEmitter()

    onClick(dir:string) {
        this.onMove.emit(dir)
    }

    @HostListener("window:keyup", ["$event"])
    keyboardInput(e:KeyboardEvent) {
        switch (e.keyCode) {
            case 37: // left
                this.onClick("left");
                break;

            case 38: // up
                this.onClick("up");
                break;

            case 39: // right
                this.onClick("right");
                break;

            case 40: // down
                this.onClick("down");
                break;
        }
    }
}