function addNumbers(n1, n2) {
    return n1 + n2;
}
function printNumber(num) {
    console.log(num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printNumber(addNumbers(3, 43));
// let combineValue: Function;
var combineValue;
combineValue = addNumbers;
console.log(combineValue(6, 8));
addAndHandle(34, 78, function (result) { return console.log(result); });
