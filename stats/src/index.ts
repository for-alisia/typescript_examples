/** Readers */
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
/** Analyzers */
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';

// Read the file, using specific class
const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

// Analize data
const report = new Summary(new WinAnalysis('Leicester'), new ConsoleReport());
report.buildAndPrintReport(reader.matches);
