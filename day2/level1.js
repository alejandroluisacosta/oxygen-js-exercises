/* 
x Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
x Print the string on the browser console using console.log()
x Print the length of the string on the browser console using console.log()
x Change all the string characters to capital letters using toUpperCase() method
x Change all the string characters to lowercase letters using toLowerCase() method
x Cut (slice) out the first word of the string using substr() or substring() method
x Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
x Check if the string contains a word Script using includes() method
x Split the string into an array using split() method
x Split the string 30 Days Of JavaScript at the space using split() method
x 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
x Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
x What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
x What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
x Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
x Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
x Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
x Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
x Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
x Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
x Use startsWith() method with the string 30 Days Of JavaScript and make the result true
x Use endsWith() method with the string 30 Days Of JavaScript and make the result true
x Use match() method to find all the a’s in 30 Days Of JavaScript
x Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
x Use repeat() method to print 30 Days Of JavaScript 2 times */

// Variable creation
let challenge = '30 Days of JavaScript';

// Print variable to console
console.log(challenge);

// Print length of variable to console
console.log(challenge.length);

// Characters to uppercase
console.log(challenge.toUpperCase());

// To lowercase
console.log(challenge.toLowerCase());

// Slice first word of string (variable remain unchanged)
console.log(challenge.substring(3, 7));

// Slice out "30 Days of JavaScript"
console.log(challenge.substring(3))

// Check if string contains substr "Script"
console.log(challenge.includes("Script"));

// Turn into array
console.log(challenge.split(''));

// Split at the space
console.log(challenge.split(' '));

// Variable for company names
let bigTech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// Split at the comma
console.log(bigTech.split(','));

// Switch JavaScript for Python
console.log(challenge.replace("JavaScript", "Python"));

// Char at 15th position
console.log(challenge.charAt(15));

// Char code of S
console.log(challenge.charCodeAt("11"));

// Index of first occurence of 'a'
console.log(challenge.indexOf('a'));

// Index of last occurence of 'a'
console.log(challenge.lastIndexOf('a'));

// Variable for phrase
let phrase = 'You cannot end a sentence with because because because is a conjunction'

// Index of first 'because' occurence
console.log(phrase.indexOf('because'));

// Index of last 'because' occurance
console.log(phrase.lastIndexOf('because'));

// Index of first 'because' using `search()`
console.log(phrase.search('because'));

// Variable to eliminate trailing whitespace
let trailingSpace = ' 30 Days Of JavaScript '
// Eliminate trailing whitespaces
console.log(trailingSpace.trim(' '));

// Make `startsWith()` result true
console.log(challenge.startsWith('3'));

// Make `endsWith()` result true
console.log(challenge.endsWith('t'));

// Find all a's in string
console.log(challenge.match(/a/g));

// Variables for contatenation
let string1 = '30 Days of';
let string2 = ' JavaScript';

// Concatenate two strings
console.log(string1.concat(string2));

// Repeat string
console.log(string1.concat(string2).repeat(2));