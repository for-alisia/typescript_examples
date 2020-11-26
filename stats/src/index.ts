import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// Read the file, using specific class
const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

let manUnitedWin = 0;

// Analize [][] of data
for (let match of reader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

// Show the result
console.log(`Man United won ${manUnitedWin} games`);
