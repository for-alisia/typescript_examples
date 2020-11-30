/** Reports */
import { HtmlReport } from './reports/HtmlReport';
import { WinAnalysis } from './analyzers/WinsAnalysis';
/** Models */
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // Static method for predefined report (wins with html)
  static winsAnalysisWithHtml(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
