import {Component, Input} from "@angular/core";

@Component({
    selector: 'game-gui',
    styles : [`
        .gui-element{
            float: left;
            margin: 10px;
        }
    `],
    template: `
        <div class="game-gui">
            <div class="gui-message gui-element">{{status}}</div>
            <div class="gui-score gui-element">Score: {{score}}</div>
            <div class="gui-button gui-element"><button name="new game">New Game</button></div>
        </div>
    `})
export class GameGuiComponent {
    score:number = -1
    status:string = "READY"


}