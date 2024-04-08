/* 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file */
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

/* 2. First remove all the punctuations and change the string to array and count the number of words in the array */

// Array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Regular expression
let regEx1 = /[.,]/g;

// Remove punctuation
text = text.replace(regEx1, '');

// Transform into array
let words = text.split(' ');
console.log(words);
console.log(words.length);

/* END */



/* 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */

// Array
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at beggining  if not included
if (!shoppingCart.includes('Meat'))
    shoppingCart.unshift('Meat');

// Add 'Sugar at end if not included
if (!shoppingCart.includes('Sugar'))
    shoppingCart.push('Sugar');

// Array to console with new items
console.log(shoppingCart);

// Remove 'Honey if allergic

// Are you allergic?
let allergicToHoney = true;

// Remove from array
if (allergicToHoney) {
    let honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1)
        shoppingCart.splice(honeyIndex, 1);
}

// To console
console.log(shoppingCart);

/* END */



/* 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. */

if (countries.includes('Ethiopia'))
    console.log('ETHIOPIA');
else
    countries.push('Ethiopia');

/* Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack) */

// Variables
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

// Concatenation
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

/* END */