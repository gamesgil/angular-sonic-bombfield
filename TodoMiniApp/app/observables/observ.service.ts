/**
 * Created by GilS on 01-Apr-17.
 */
// https://reqres.in/api/users/2

import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/observable";
import "rxjs/Rx";
import "rxjs/add/operator/map";
import {infoType} from "./info-types.service";


@Injectable()
export class ObservService{
    // base image url https://image.tmdb.org/t/p/w500
    base_url = 'https://api.themoviedb.org/3/'
    apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';

    //  popular         'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK'
    //  in theathers    'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK'
    //  search          'https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK'
    //  get movie 'https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK'
    //  get genres 'https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK'
    //  get movies/genre 'https://api.themoviedb.org/3/genre/'+ id +'/movies?callback=JSONP_CALLBACK'
    //  reviews 'https://api.themoviedb.org/3/movie/'+ id +'/reviews?callback=JSONP_CALLBACK'
    //  credits 'https://api.themoviedb.org/3/movie/'+ id +'/credits?callback=JSONP_CALLBACK'
    //  person details 'https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK'
    //  person cast 'https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK'

    constructor(private _http:Http) {

    }

    query(type:infoType, extraInfo:string = null) {
        let queryUrl = {}
        queryUrl[infoType.POPULAR] = `${this.base_url}discover/movie`
        queryUrl[infoType.GET_MOVIE] = `${this.base_url}discover/movie/${extraInfo}`

        return this._http.get(queryUrl[type], {method: "GET", params: {api_key: this.apikey}})
            .flatMap(res => res.json().results)
            .toArray()
    }

    getBaseImagePath() {
        return "https://image.tmdb.org/t/p/w300"
    }
}