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
/**
 * Created by GilS on 01-Apr-17.
 */
var core_1 = require("@angular/core");
var observ_service_1 = require("./observ.service");
var info_types_service_1 = require("./info-types.service");
var ObservComponent = (function () {
    function ObservComponent(observService) {
        this.observService = observService;
    }
    ObservComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observService.query(info_types_service_1.infoType.POPULAR).subscribe(function (list) {
            _this.list = list;
            console.log(JSON.stringify(_this.list));
        });
    };
    ObservComponent.prototype.getList = function () {
        return this.list != undefined ? this.list : [];
    };
    ObservComponent.prototype.getBaseImagePath = function () {
        return this.observService.getBaseImagePath();
    };
    return ObservComponent;
}());
ObservComponent = __decorate([
    core_1.Component({
        selector: 'observ',
        styles: [
            "\n            h2 {\n                font-family: 'Roboto', sans-serif;\n                font-weight: 100;\n                color: bisque;\n            }\n            \n            .entry{\n                width: 320px;\n                height: 540px;\n                background: gray;\n                margin: 10px;\n                border: 2px solid black;\n                float: left;\n            }\n            \n            .entry img{\n                display: block;\n                width: 100%;\n                margin: 0 auto;\n            }\n            \n            .entry p{\n                width: 100%;\n                text-align: left;\n                margin-left: 10px;\n            }\n        "
        ],
        template: "\n        <h2>OBSERV</h2>\n        <div class=\"entry\" *ngFor=\"let movie of getList()\">\n            <div><img src=\"{{getBaseImagePath() + movie.poster_path}}\"></div>\n            <h2>{{movie.original_title}}</h2>\n        </div>\n        \n    ",
        providers: [observ_service_1.ObservService]
    }),
    __metadata("design:paramtypes", [observ_service_1.ObservService])
], ObservComponent);
exports.ObservComponent = ObservComponent;
//# sourceMappingURL=observ.component.js.map