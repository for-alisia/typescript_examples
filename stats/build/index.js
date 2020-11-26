"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
// Read the file, using specific class
var reader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
reader.load();
var manUnitedWin = 0;
// Analize [][] of data
for (var _i = 0, _a = reader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWin++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWin++;
    }
}
// Show the result
console.log("Man United won " + manUnitedWin + " games");
