let userInput: unknown; // are not equal to 'any' type
let userName: string;

userInput = 5;
userInput = 'Lena';
// userName = userInput; - compilation error here

if (typeof userInput === 'string') {
  userName = userInput;
}

// 'Unknown' is better then 'any', because TS checks types for it, and 'any' switches of this check.

// 'Never' type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('Error occures!', 5);

console.log(result); // never will be executed
