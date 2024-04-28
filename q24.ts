/*Q24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array.*/

// <=========== Tests for equality and inequality with strings.==========>
const string1:string = "Danish";
const string2:string = "Noor";

console.log(string1 === string2); // false
console.log(string1 !== string2); // true

//• Tests using the lower case function.
const upperCase: string = "DANISH";
const lowerCase: string = "danish";

console.log(upperCase.toLowerCase() === lowerCase);

//• Numerical tests.
let num1: number = 10;
let num2: number = 20;

//equality and inequality
console.log(num1 === num2); //false
console.log(num1 !== num2); //true

// greater than and less than
console.log(num1 > num2); //false
console.log(num1 < num2); //true

//greater than or equal to
console.log(num1 > num2); //false
console.log(num1 === num2); //false

//less than or equal to
console.log(num1 < num2); //true
console.log(num1 === num2); //false

//• Tests using "and" and "or" operators
let x: number = 10;
let y: number = 20;
let z: number = 30;

// "and"(&&) operator
console.log(x < y && y < z); //true
// "or"(||) operator
console.log(x > y || y < z); //true

//• Test whether an item is in a array
const array1: number[] = [1, 2, 3, 4, 5, 6];
const itemToFind: number = 4;

console.log(array1.indexOf(itemToFind) !== 5); //true

//• Test whether an item is not in a array.

console.log(array1.indexOf(10) === -1); //true












