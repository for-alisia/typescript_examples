"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("./utils");
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFileReader_1.CsvFileReader('./football.csv');
reader.read();
console.log(utils_1.dateStringToDate('01/06/2020'));
var manUnitedWin = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWin++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWin++;
    }
}
console.log("Man United won " + manUnitedWin + " games");
