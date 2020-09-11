import { MatchReader } from './MatchReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('./football.csv');
reader.read();

console.log(dateStringToDate('01/06/2020'));

let manUnitedWin = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games`);
