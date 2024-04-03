/* 1. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/

// Variable for John Holmes's quote
let johnHolmesQuote = '"The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another."'
// Print John Holme's quote
console.log(johnHolmesQuote);

/* END */



/* 2. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but 
reach out your hand instead." */

// Variable for Mother Teresa's quote
let motherTeresaQuote = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
// Print Mother Teresa's quote
console.log(motherTeresaQuote);

/* END */



// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// Variable to determine its type
let num1 = '10';
// Check typeof '10' equal to 10 and make it so if not the case
if (!(typeof num1 === typeof 10))
    console.log(typeof parseInt(num1) === typeof(10));

/* END */



// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Float variable to equate to 10
let float1 = 9.8;
// Check parseFloat(9.8) equal to 10 and make it so if not the case
if ((parseFloat(float1) !== 10))
    console.log(Math.ceil(float1) === 10);

/* END */



// 5. Check if 'on' is found in both python and jargon

// Variables
let python = 'python';
let jargon = 'jargon';
let on = 'on';
// Check function
function findSubstr(string, substring) {
    if (string.includes(substring))
        return true;
    else
        return false;
}
// Actual check
if (findSubstr(python, on) && findSubstr(jargon, on))
    console.log(true);
else
    console.log(false);

/* END */



// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.

// Sentence variable
let sentence1 = 'I hope this course is not full of jargon.';
// Check if 'jargon' is on sentence
if (findSubstr(sentence1, jargon))
    console.log(true);
else
    console.log(false);

/* END */



// 7. Generate a random number between 0 and 100 inclusively.

// Number variable
let randomNum1 = Math.random() * 101;
// Print number to console
console.log(Math.floor(randomNum1));

/* END */



// 8. Generate a random number between 50 and 100 inclusively.

// Number variable
let randomNum2 = Math.random() * (101 - 50) + 50;
// Print number to console
console.log(Math.floor(randomNum2));

/* END */



// 9. Generate a random number between 0 and 255 inclusively.

// Number variable
let randomNum3 = Math.random() * 256;
// Print number to console
console.log(Math.floor(randomNum3));

/* END */



// 10. Access the 'JavaScript' string characters using a random number.

// String variable
let javascript = 'JavaScript';
// Access characters & print to console
console.log(javascript[Math.floor(Math.random() * javascript.length)]);

/* 11. Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

// Super-long console.log declaration
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n");

/* END */



// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Sentence variable
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
// Slicing - Comment from Alejandro: The `substr` method seems to be deprecated. For this reason, I'll use `substring`
console.log(sentence2.substring(31, 54));


