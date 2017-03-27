"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
    function Utils() {
    }
    Utils.generateRandomNumbers = function (range, num, nonRecurring) {
        if (nonRecurring === void 0) { nonRecurring = true; }
        var result = new Array();
        for (var i = 0; i < num; i++) {
            var rand = Math.floor(Math.random() * range.length);
            result.push(range[rand]);
            if (nonRecurring) {
                range.splice(rand, 1);
            }
        }
        return result;
    };
    Utils.idxToGrid = function (idx, gridWidth) {
        var result = { x: idx % gridWidth, y: Math.floor(idx / gridWidth) };
        return result;
    };
    Utils.generateRange = function (start, end) {
        var result = [];
        for (var i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    };
    return Utils;
}());
exports.default = Utils;
//# sourceMappingURL=utils.js.map