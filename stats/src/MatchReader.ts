import { CsvFileReader } from './CsvFileReader';
/** Models */
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
/** Utils */
import { dateStringToDate } from './utils';

interface DataReader {
  read(): void;
  data: string[][];
}

// Specific class to convert table row data to correct types
export class MatchReader {
  matches: MatchData[] = [];

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResult, row[6]];
      }
    );
  }
}
