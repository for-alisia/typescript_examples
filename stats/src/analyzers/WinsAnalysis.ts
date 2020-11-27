/** Models */
import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from './../MatchResult';

// Class to analyze how many games did the team win
export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matchData: MatchData[]): string {
    let wins = 0;

    for (let match of matchData) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
