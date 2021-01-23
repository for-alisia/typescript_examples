function addNumbers(n1: number, n2: number): number {
  return n1 + n2;
}

function printNumber(num: number): void {
  console.log(num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;

  cb(result);
}

printNumber(addNumbers(3, 43));

// let combineValue: Function;

let combineValue: (a: number, b: number) => number;

combineValue = addNumbers;

console.log(combineValue(6, 8));

addAndHandle(34, 78, result => console.log(result));
