import {Component, EventEmitter, Input, Output, HostListener} from "@angular/core";

@Component({
    selector: "game-controller",
    styles: [`
        .game_controller{
            clear: both;
            width: 600px;
            height: 118px;
            float: left;
            background-image: url(assets/gamepad.png);
            background-repeat: no-repeat;
            margin-left: 200px;
        }
        
        .gamepad_btn {
            position: relative;
            width: 30px;
            height: 30px;
            background-color: yellow;
            border: 1px solid black;
            cursor: pointer;
            opacity: 0;
        }

        .gamepad_btn:nth-child(1){
            left: 43px;
            top: 10px;
        }

        .gamepad_btn:nth-child(2){
            float: left;
            top: 10px;
            left: 14px;
        }

        .gamepad_btn:nth-child(3){
            float: left;
            top: 10px;
            left: 37px;
        }

        .gamepad_btn:nth-child(4){
            float: left;
            top: 40px;
            left: -21px;
        }

        .gamepad_btn:nth-child(5){
            float: left;
            top: -15px;
            left: 29px;
        }

        .gamepad_btn:nth-child(6){
            float: left;
            top: -15px;
            left: 56px;
        }
    `],
    template: `
        <div class="game_controller">
            <div class="gamepad_btn" (click)="onClick('up')">up</div>
            <div class="gamepad_btn" (click)="onClick('left')">left</div>
            <div class="gamepad_btn" (click)="onClick('right')">right</div>
            <div class="gamepad_btn" (click)="onClick('down')">down</div>
            <div class="gamepad_btn" (click)="onClickNewGame()">new game</div>
            <div class="gamepad_btn" (click)="onClickNewGame()">new game</div>
        </div>
    `
})
export class GameControllerComponent{
    @Output() onMove: EventEmitter<any> = new EventEmitter();
    @Output() onNewGame: EventEmitter<any> = new EventEmitter();

    onClick(dir:string) {
        this.onMove.emit(dir)
    }

    onClickNewGame() {
        this.onNewGame.emit();
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