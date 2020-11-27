"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
var MatchResult_1 = require("./../MatchResult");
// Class to analyze how many games did the team win
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matchData) {
        var wins = 0;
        for (var _i = 0, matchData_1 = matchData; _i < matchData_1.length; _i++) {
            var match = matchData_1[_i];
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " games";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
