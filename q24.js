/*Q24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array.*/
// <=========== Tests for equality and inequality with strings.==========>
var string1 = "Danish";
var string2 = "Noor";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true
//• Tests using the lower case function.
var upperCase = "DANISH";
var lowerCase = "danish";
console.log(upperCase.toLowerCase() === lowerCase); //true
//• Numerical tests.
var num1 = 10;
var num2 = 20;
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
var x = 10;
var y = 20;
var z = 30;
// "and"(&&) operator
console.log(x < y && y < z); //true
// "or"(||) operator
console.log(x > y || y < z); //true
//• Test whether an item is in a array
var array1 = [1, 2, 3, 4, 5, 6];
var itemToFind = 4;
console.log(array1.indexOf(itemToFind) !== 5); //true
//• Test whether an item is not in a array.
console.log(array1.indexOf(10) === -1); //true
