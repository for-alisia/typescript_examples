"use strict";
// import fs from 'fs';
// import { dateStringToDate } from './utils';
// export abstract class CsvFileReader<T> {
//   data: T[] = [];
//   abstract mapRow(row: string[]): T;
//   constructor(public filePath: string) {}
//   read(): void {
//     this.data = fs
//       .readFileSync(this.filePath, {
//         encoding: 'utf-8'
//       })
//       .split('\n')
//       .map((row: string): string[] => {
//         return row.split(',');
//       })
//       .map(this.mapRow);
//   }
// }
