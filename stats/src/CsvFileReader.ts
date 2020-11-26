import fs from 'fs';

// Specific class to read the CSV file
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filePath: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filePath, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
