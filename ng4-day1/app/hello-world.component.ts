/**
 * Created by student14 on 26/03/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'hello-world',
  styles : [],
  template: `
<div>
  <h3>test {{msg}}</h3>
</div>
`})
export class HelloWorldComponent {
    _msg:string;
    @Output()
    onTen:EventEmitter<number> = new EventEmitter();

    @Input()
    set msg(value){
        this._msg = value;
        this.onTen.emit(value.length);
    }
    get msg(){return this._msg;}
    
}