import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

const homeWin = 'H';
const awayWin = 'A';

let manUnitedWin = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === homeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === awayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} games`);
