"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Readers */
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
/** Analyzers */
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reports/ConsoleReport");
// Read the file, using specific class
var reader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
reader.load();
// Analize data
var report = new Summary_1.Summary(new WinsAnalysis_1.WinAnalysis('Leicester'), new ConsoleReport_1.ConsoleReport());
report.buildAndPrintReport(reader.matches);
