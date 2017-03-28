import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'game-gui',
    styles : [`
        .gui-title {
            display: block;
            width: 100%;
            height: 40%;
            text-align: center;
            font-size: 2rem;
        }
        .game-gui {
            font-family: 'Press Start 2P', cursive;
            width: inherit;
            height: 100px;
        }
        .gui-element {
            width: 50%;
            font-size: 1rem;
            color: #a95f24;
            float: left;
            margin: 10px 0 10px 0;
            text-align: center;
        }
    `],
    template: `
        <div class="game-gui">
            <div class="gui-title">{{name}}</div>
            <!--hr-->
            <div class="gui-message gui-element">{{status}}</div>
            <div class="gui-score gui-element">Score: {{score}}</div>
        </div>
    `})
export class GameGuiComponent {
    name = "Sonic Bombfield"
    score:number = 0;
    status:string = "READY";

    @Input()
    setStatus(status:string) {
        this.status = status.toUpperCase();
    }

    @Input()
    addToScore(rings:number) {
        this.score = 10 * rings;
    }
}