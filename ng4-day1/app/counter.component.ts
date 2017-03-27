/**
 * Created by student14 on 26/03/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'counter-component',
  styles : [`
      .counter{
          width: 500px;
          height: 500px;
      }
      .default{
          font-size: 2em;
          text-align: center;
          border: 1px black solid;
      }
      .default, button{
          width: 50px;
          height: 50px;
          float: left;
      }
      .odd{
          background-color: palevioletred;
      }
      .even{
          background-color: lightblue;
      }
  `],
  template: `
<div class="counter" [class.odd]="isOdd()">
    <button class="" (click)="dec()">-</button>
    <div class="default">{{curValue}}</div>
    <button class="" (click)="add()">+</button>
</div>
`})
export class CounterComponent {
    _max:number = 3
    _min:number = 0
    _curValue:number = 0

    add() {
        if (this._curValue < this._max) {
            this.curValue++
        }
    }

    dec() {
        if (this._curValue > this._min) {
            this.curValue--
        }
    }

    isOdd() {
        return this.curValue % 2 !== 0
    }

    @Input()
    set curValue(value) {
        this._curValue = value
    }

    get curValue() {
        return this._curValue
    }

    set max(value) {
        this._max = value
    }

    get max() {
        return this._max
    }

    set min(value) {
        this._min = value
    }

    get min() {
        return this._min
    }


}