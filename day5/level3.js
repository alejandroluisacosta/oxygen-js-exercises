/* 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array */

// Array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// New sorted array
let sortedAges = ages.sort();

// Min age
console.log(`Min age: ${sortedAges.slice(0, 1)}`);

// Max age
console.log(`Max age: ${sortedAges.slice(sortedAges.length - 1, sortedAges.length)}`);

// Average age
let averageAge = Math.round(sortedAges.reduce((accumulator, currentVal) => accumulator + currentVal) / sortedAges.length);
console.log(`Average age: ${averageAge}`);

// Range of ages
let rangeOfAges = sortedAges[sortedAges.length - 1] - sortedAges[0];
console.log(`Range of ages: ${rangeOfAges}`);

/* END */



// Import countries array
import { countries } from "./countries.js";

/* 2. Slice the first ten countries from the countries array */

console.log(countries.slice(0, 10));

/* END */



/* 3. Find the middle country(ies) in the countries array */

// New array
let newCountries1 = countries.slice(0, countries.length);

// Return two middle countries if even amount
if (newCountries1.length % 2 === 0)
    console.log(newCountries1.splice(Math.ceil((newCountries1.length - 1)) / 2, 2));
// Return middle country if odd amount
else
    console.log(newCountries1.splice((newCountries1.length - 1) / 2, 1));

/* END */



/* 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half. */

// Halves variables
let firstHalf = [];
let secondHalf = [];

// New array variable
let newCountries2 = countries.slice(0, countries.length);
console.log(newCountries2)

// If amount of countries is odd
if (newCountries2.length % 2 !== 0)
    newCountries2.push('Venezuela');

// Separation
firstHalf = newCountries2.splice(0, newCountries2.length / 2);
secondHalf = newCountries2;

// To console
console.log(firstHalf);
console.log(secondHalf);

/* END */
