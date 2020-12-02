/** Simple classes (difference only in collection types) */
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

/** Using generics for collection type */
class ArrayOfAnth<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

/** Example of usage (we can not to point to the T directly - type inferrence) */
const arr = new ArrayOfAnth<string>(['a', 'b']);
const arr2 = new ArrayOfAnth(['c', 'd']);

/** Generics with functions */

/** Without generics - 2 different similar functions */
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/** Using generics */
function printAnth<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/** Usage */
printAnth<string>(['a', 'b']);
printAnth(['c', 'd']);

/** Ceneric constraints */

class Car {
  print() {
    console.log('A car');
  }
}

class House {
  print() {
    console.log('A house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new House(), new Car()]);
