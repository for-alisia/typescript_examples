"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
/** Reports */
var HtmlReport_1 = require("./reports/HtmlReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    // Static method for predefined report (wins with html)
    Summary.winsAnalysisWithHtml = function (team) {
        return new Summary(new WinsAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
