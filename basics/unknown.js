var userInput; // are not equal to 'any' type
var userName;
userInput = 5;
userInput = 'Lena';
// userName = userInput; - compilation error here
if (typeof userInput === 'string') {
    userName = userInput;
}
// 'Unknown' is better then 'any', because TS checks types for it, and 'any' switches of this check.
// 'Never' type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('Error occures!', 5);
console.log(result); // never will be executed
