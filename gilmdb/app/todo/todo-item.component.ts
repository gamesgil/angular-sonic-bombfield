/**
 * Created by GilS on 31-Mar-17.
 */

import {Component, Input} from '@angular/core';
import {TodoService} from "./todo.service";

@Component({
    selector: 'todo-item',
    styles: [`
        .todo-item{
            width: 120px;
            height: 20px;
            border: 2px solid darkblue;
            -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;
            margin: 4px;
            
        }
        
        .todo-item > div{
            width: 70%;
            height: inherit;
            overflow: hidden;
            float: left;
        }
        
        .todo-item > button{
            float: right;
        }
    `],
    template: `
        <div class="todo-item"><div>{{item.id}}/{{item.text}}</div><button (click)="remove()">X</button></div>
    `
})
export class TodoItemComponent {
    item:{id:number, text:string} = {id: -1, text: "nothing"}

    constructor(private todoService:TodoService) {

    }

    remove() {
        this.todoService.removeItem(this.item.id)
    }

    @Input() set source(item:{id:number, text:string}) {
        this.item = item
    }
}