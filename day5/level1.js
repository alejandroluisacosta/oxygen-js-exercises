// Array
let numbers = [1, 2, 3, 4, 5];

/* 4. Get the first item, the middle item and the last item of the array */

console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[4]);

/* END */





/* 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5 */

// Array
let mixedDataTypes = [1, 'hola', true, 2, 'chao', 1.2];

// Length to console
console.log(`Array length: ${mixedDataTypes.length}`);

/* END */



/* 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon */

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/* 7. print the array using console.log() */
console.log(itCompanies);

/* 10. Print out each company */
for (let i = 0; itCompanies[i]; i++)
    console.log(itCompanies[i]);

/* 11. Change each company to uppercase and print them out */
for (let i = 0; itCompanies[i]; i++) {
    console.log(itCompanies[i].toUpperCase());
}

/* 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. */
console.log(`${itCompanies.slice(0, 5).join(', ')} and ${itCompanies[6]} are big IT companies`);

/* 14. Filter out companies which have more than one 'o' without the filter method */
