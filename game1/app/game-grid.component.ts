/**
 * Created by student14 on 26/03/2017.
 */
import {Component, Input, EventEmitter, Output} from "@angular/core";
import Utils from "./utils";

@Component({
  selector: 'game-grid',
  styles : [`
      .game-grid{
        width: 350px;
        float: left;
        margin-left: 140px;
      }
      .game-grid td{
        width: 64px;
        height: 64px;
        border: black 2px solid;  
        background-color: green;
        background-repeat: no-repeat;  
        background-position-x: 50%;
        background-position-y: 50%;
    } 
  `],
  template: `
<div class="game-grid">
  <table>
      <tr *ngFor="let y of grid;index as i">
          <td *ngFor="let x of grid[i];index as j" [style.background-image]="getImage(j, i)"></td>
      </tr>
  </table>
</div>
`})
export class GameGridComponent {
    static EMPTY:number = 0;
    static BOMB:number = 1;
    static RING:number = 2;
    static BOOM:number = 3;

    static READY:string = "ready";
    static PLAYING:string = "playing";
    static WIN:string = "win";
    static LOSE:string = "lose";

    static NUM_OF_BOMBS:number = 5
    static NUM_OF_RINGS:number = 3

    status:string = GameGridComponent.READY;

    collectedRings:number = 0;
    currentPos:{x:number, y:number} = {x:0, y:0};
    gridSize:{x:number, y:number} = {x:5, y:5};
    grid:Array<Array<number>> = [];

    constructor() {
        this.reset();
    }

    reset() {
        const numOfMines = Math.floor(Math.random() * 5);
        let potentials:Array<number> = Utils.generateRange(1, this.gridSize.x * this.gridSize.y - 1);
        let specialIdxs:Array<number> = Utils.generateRandomNumbers(potentials, GameGridComponent.NUM_OF_BOMBS + GameGridComponent.NUM_OF_RINGS); // reserve the last 3 for the rings

        this.grid = [];

        for (let y = 0; y < this.gridSize.y; y++) {
            this.grid.push([]);

            for (let x = 0; x < this.gridSize.x; x++) {
                this.grid[y].push(GameGridComponent.EMPTY);
            }
        }

        for (let i = 0; i < specialIdxs.length; i++) {
            let gridPos:{x:number, y:number} = Utils.idxToGrid(specialIdxs[i], this.gridSize.x);
            let icon:number = i < specialIdxs.length - GameGridComponent.NUM_OF_RINGS ? GameGridComponent.BOMB : GameGridComponent.RING;

            this.grid[gridPos.y][gridPos.x] = icon;
        }

        this.currentPos = {x:0, y:0};
        this.collectedRings = 0;

        this.status = GameGridComponent.READY;
    }

    isCurPos(x:number, y:number) {
        return this.currentPos.x === x &&
                this.currentPos.y === y
    }

    getImage(x:number, y:number) {
        let result = "";

        if (x === this.currentPos.x && y === this.currentPos.y) {
            result = (this.status === GameGridComponent.READY || this.status === GameGridComponent.PLAYING) ? "url(assets/sonic.png)" : "url(assets/sonic-glow.png)"
        }
        else {
            switch(this.grid[y][x]) {
                case GameGridComponent.EMPTY:
                    result = "";
                    break;

                case GameGridComponent.BOMB:
                    result = (this.status !== GameGridComponent.PLAYING) ? "url(assets/bomb.png)" : "";
                    break;

                case GameGridComponent.RING:
                    result = "url(assets/ring.png)";
                    break;

                case GameGridComponent.BOOM:
                    result = "url(assets/boom.png)";
                    break;
            }
        }

        return result;
    }

    @Input() move(dir:string) {
        if (this.status !== GameGridComponent.PLAYING && this.status !== GameGridComponent.READY) {
            return;
        }

        this.status = GameGridComponent.PLAYING;

        let nextX:number = this.currentPos.x;
        let nextY:number = this.currentPos.y;

        switch(dir) {
            case "right":
                nextX++;
                break;

            case "left":
                nextX--;
                break;

            case "down":
                nextY++;
                break;

            case "up":
                nextY--;
                break;
        }

        if (nextX >= 0 && nextX < this.gridSize.x) {
            this.currentPos.x = nextX;
        }

        if (nextY >= 0 && nextY < this.gridSize.y) {
            this.currentPos.y = nextY;
        }

        this.checkForBomb();

        if (this.status !== GameGridComponent.LOSE) {
            this.checkForPrize();
        }

    }

    @Output() onPrize:EventEmitter<any> = new EventEmitter();
    @Output() onCollectedAll:EventEmitter<any> = new EventEmitter();
    @Output() onExplode:EventEmitter<any> = new EventEmitter();

    private checkForPrize() {
        if (this.grid[this.currentPos.y][this.currentPos.x] === GameGridComponent.RING) {
            this.grid[this.currentPos.y][this.currentPos.x] = GameGridComponent.EMPTY;

            this.collectedRings++;

            this.onPrize.emit(this.collectedRings);

            if (this.collectedRings === GameGridComponent.NUM_OF_RINGS) {
                this.status = GameGridComponent.WIN;

                this.onCollectedAll.emit(this.status);
            }
        }
    }

    private checkForBomb() {
        if (this.grid[this.currentPos.y][this.currentPos.x] === GameGridComponent.BOMB) {
            this.grid[this.currentPos.y][this.currentPos.x] = GameGridComponent.BOOM;
            this.currentPos.x = -1;
            this.currentPos.y = -1;

            this.status = GameGridComponent.LOSE;

            this.onExplode.emit();
        }

    }
}