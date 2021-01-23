function combine(input1: number | string, input2: number | string, resulType: 'number' | 'text') {
  let result: string | number;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resulType === 'number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, 'number');
console.log(combinedAges);

const combinedNames = combine('Anna', 'Pavlova', 'text');
console.log(combinedNames);

/** Type alias */
type Combinable = number | string;
type resultConverter = 'as-text' | 'as-number' | 'as-boolean';

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };
