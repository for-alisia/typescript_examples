/** Readers */
import { MatchReader } from './MatchReader';
/** Analyzers */
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';

// Read the file, using specific class
const reader = MatchReader.fromCsv('football.csv');
reader.load();

// Analize data
const report = new Summary(new WinAnalysis('Leicester'), new ConsoleReport());
report.buildAndPrintReport(reader.matches);

// Analize data with other conditions
const second_report = Summary.winsAnalysisWithHtml('Cardiff');
second_report.buildAndPrintReport(reader.matches);
