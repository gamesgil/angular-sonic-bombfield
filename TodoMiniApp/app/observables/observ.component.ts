/**
 * Created by GilS on 01-Apr-17.
 */
import { Component, OnInit } from '@angular/core';
import {ObservService} from "./observ.service";
import {infoType} from "./info-types.service";


@Component({
    selector: 'observ',
    styles: [
        `
            h2 {
                font-family: 'Roboto', sans-serif;
                font-weight: 100;
                color: bisque;
            }
            
            .entry{
                width: 320px;
                height: 540px;
                background: gray;
                margin: 10px;
                border: 2px solid black;
                float: left;
            }
            
            .entry img{
                display: block;
                width: 100%;
                margin: 0 auto;
            }
            
            .entry p{
                width: 100%;
                text-align: left;
                margin-left: 10px;
            }
        `
    ],
    template: `
        <h2>OBSERV</h2>
        <div class="entry" *ngFor="let movie of getList()">
            <div><img src="{{getBaseImagePath() + movie.poster_path}}"></div>
            <h2>{{movie.original_title}}</h2>
        </div>
        
    `,
    providers: [ObservService]
})
export class ObservComponent implements OnInit {
    //user:IUser
    list:Object

    constructor(private observService:ObservService) {

    }

    ngOnInit() {
        this.observService.query(infoType.POPULAR).subscribe(list => {this.list = list;
        console.log(JSON.stringify(this.list))})
    }

    getList() {
        return this.list != undefined ? this.list : []
    }

    getBaseImagePath() {
        return this.observService.getBaseImagePath()
    }
    
}