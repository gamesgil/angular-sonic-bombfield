/**
 * Created by student14 on 26/03/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'game-table',
  styles : [`
    td{
        width: 50px;
        height: 50px;
        border: black 2px solid;
    } 
  `],
  template: `
<div>
  <table>
      <tr *ngFor="let y of array;index as j">
          <td *ngFor="let x of array;index as i"></td>
      </tr>
  </table>
</div>
`})
export class TableComponent {
    currentPos:{x:number, y:number} = {x:0, y:0}
    array:any[] = Array(5)

    isCurPos(x:number, y:number) {
        return this.currentPos.x === x &&
                this.currentPos.y === y
    }

    @Input()
    set size(value:number) {
        this.array = Array(value)
    }
}