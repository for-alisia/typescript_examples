"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Readers */
var MatchReader_1 = require("./MatchReader");
/** Analyzers */
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reports/ConsoleReport");
// Read the file, using specific class
var reader = MatchReader_1.MatchReader.fromCsv('football.csv');
reader.load();
// Analize data
var report = new Summary_1.Summary(new WinsAnalysis_1.WinAnalysis('Leicester'), new ConsoleReport_1.ConsoleReport());
report.buildAndPrintReport(reader.matches);
// Analize data with other conditions
var second_report = Summary_1.Summary.winsAnalysisWithHtml('Cardiff');
second_report.buildAndPrintReport(reader.matches);
