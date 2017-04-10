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
            div{
                font-family: 'Roboto Condensed', sans-serif;
            }
            
            h3 {
                
                font-weight: 100;
                color: bisque;
            }
            
            .entry{
                position: relative;
                width: 320px;
                height: 540px;
                background: gray;
                margin: 10px;
                float: left;
            }
            
            .entry img{
                display: block;
                width: 95%;
                margin: 2% auto;
            }
            
            .entry h3{
                max-width: 90%;
                text-align: left;
                margin-left: 5%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .rating{
                width: 40px;
                height: 20px;
                background-color: cadetblue;
                float: right;
                position: absolute;
                bottom: 1%;
                right: 2%;
                text-align: center;
                line-height: 20px;
                font-size: 0.75rem;
                border-radius: 7px;
            }
        `
    ],
    template: `
        <h2>OBSERV</h2>
        <div class="entry" *ngFor="let movie of getList()">
            <div><img src="{{getBaseImagePath() + movie.poster_path}}"></div>
            <h3>{{movie.original_title}}<br>({{getReleaseDate(movie.release_date)}})</h3>
            <div class="rating"><span>{{movie.vote_average}}&#9733;</span></div>
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

    getReleaseDate(date:string) {
        return date.split("-")[0]
    }
    
}