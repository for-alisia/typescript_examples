/** Numbers, Strings and Boolean */
console.log('Basic primitives example');

function add(n1: number, n2: number, print: boolean, phrase: string): number | void {
  const result = n1 + n2;
  if (print) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 3; // type inference
const number2 = 4.23;
const printResult = true;
let resultPhrase = 'Result is ';

add(number1, number2, printResult, resultPhrase);

console.log('----------------------------------------------------------------');

/** Objects and Array */
console.log('Objects and array example');

const person: { name: string; age: number; hobbies: string[] } = {
  name: 'Lena',
  age: 30,
  hobbies: ['sports', 'cooking']
};

let favouriteActivities: string[] = ['Sport', 'some'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log('----------------------------------------------------------------');

/** Tuples */
console.log('Tuples examples');

const user: { name: string; role: [number, string] } = {
  name: 'Steven',
  role: [2, 'author']
};

user.role.push('admin'); // push - exeption (we can add elements, it wasn't supposed in this case)

console.log(user.role);

console.log('----------------------------------------------------------------');

/** Enum */
console.log('Enum example');

enum Genre {
  roman,
  fairyTale,
  detective
}

enum GenreWithStrings {
  roman = 'roman',
  fairyTale = 'fairyTale',
  detective = 'detective'
}

const book = {
  title: 'Some title',
  genre: Genre.roman
};

if (book.genre === Genre.roman) {
  console.log(' This book is a roman');
}
