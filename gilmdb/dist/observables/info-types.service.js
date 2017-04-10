"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by GilS on 09-Apr-17.
 */
var infoType;
(function (infoType) {
    infoType[infoType["POPULAR"] = 0] = "POPULAR";
    infoType[infoType["SEARCH"] = 1] = "SEARCH";
    infoType[infoType["GET_MOVIE"] = 2] = "GET_MOVIE";
    infoType[infoType["REVIEWS"] = 3] = "REVIEWS";
})(infoType = exports.infoType || (exports.infoType = {}));
//  popular 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK'
//  in theathers 'https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK'
//  search 'https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK'
//  get movie 'https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK'
//  get genres 'https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK'
//  get movies/genre 'https://api.themoviedb.org/3/genre/'+ id +'/movies?callback=JSONP_CALLBACK'
//  reviews 'https://api.themoviedb.org/3/movie/'+ id +'/reviews?callback=JSONP_CALLBACK'
//  credits 'https://api.themoviedb.org/3/movie/'+ id +'/credits?callback=JSONP_CALLBACK'
//  person details 'https://api.themoviedb.org/3/person/'+ id +'?callback=JSONP_CALLBACK'
//  person cast 'https://api.themoviedb.org/3/person/'+ id +'/movie_credits?callback=JSONP_CALLBACK' 
//# sourceMappingURL=info-types.service.js.map