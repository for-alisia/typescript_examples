import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

let manUnitedWin = 0;

for (let match of reader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games`);
