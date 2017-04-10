/**
 * Created by GilS on 01-Apr-17.
 */
// https://reqres.in/api/users/2
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var info_types_service_1 = require("./info-types.service");
var ObservService = (function () {
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
    function ObservService(_http) {
        this._http = _http;
        // base image url https://image.tmdb.org/t/p/w500
        this.base_url = 'https://api.themoviedb.org/3/';
        this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    }
    ObservService.prototype.query = function (type, extraInfo) {
        if (extraInfo === void 0) { extraInfo = null; }
        var queryUrl = {};
        queryUrl[info_types_service_1.infoType.POPULAR] = this.base_url + "discover/movie";
        queryUrl[info_types_service_1.infoType.GET_MOVIE] = this.base_url + "discover/movie/" + extraInfo;
        return this._http.get(queryUrl[type], { method: "GET", params: { api_key: this.apikey } })
            .flatMap(function (res) { return res.json().results; })
            .toArray();
    };
    ObservService.prototype.getBaseImagePath = function () {
        return "https://image.tmdb.org/t/p/w300";
    };
    return ObservService;
}());
ObservService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ObservService);
exports.ObservService = ObservService;
//# sourceMappingURL=observ.service.js.map