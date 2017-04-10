/**
 * Created by GilS on 31-Mar-17.
 */
import {Component, ElementRef, ViewChild} from '@angular/core';
import {TodoService} from "./todo.service";

@Component({
    selector: 'todo-list',
    styles: [
        `
            .normal{
                
            }
            
            .error{
                border: 2px solid red;
            }
        `

    ],
    template: `
            <h1>List1</h1>
            <button (click)="addItem(input.value)">Add item</button>
            <input #input type="text" (focus)="reset()" [placeholder]="message" [style.border]="border">
            <todo-item *ngFor="let item of getItems();index as j" [source]="getItem(item.id)"></todo-item>
        `,
    providers: [TodoService]
})
export class TodoListComponent {
    @ViewChild("input") el:ElementRef
    message:string = "Item name"
    border:string = ""

    constructor(private todoService:TodoService) {

    }

    reset() {
        this.border = ""
        this.message = "Item name"
    }

    getItems():any[] {
        return this.todoService.getItems()
    }

    getItem(id:number) {
        return this.todoService.getItem(id)
    }

    addItem(text) {
        if (text) {
            this.todoService.addItem(text)
            this.reset()
        }
        else {
            this.message = "Item name missing!"
            this.border = "2px solid red"
        }
    }



}