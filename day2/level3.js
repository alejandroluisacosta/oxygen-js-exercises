/* 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence. */

// Sentence & pattern variables
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern1 = /love/g;
// Print to console amount of occurrences
console.log(sentence1.toLowerCase().match(pattern1));

/* END */



/* 2. 'You cannot end a sentence with because because because is a conjunction' */

// Sentence & pattern variables
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let pattern2 = /because/g;
// Print to console amount of occurrences
console.log(sentence2.match(pattern2));

/* END */



/* 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions). */

// Sentence & regex variables
let sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let regEx1 = /[%$@;#&]/g;
// Print cleaned sentence to console
console.log(sentence3.replace(regEx1, ''));

/* END */



/* 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */

// Sentence and regex variable
let sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regEx2 = /\d+/g;
// Create an array with the three sources of income
let incomes = sentence4.match(regEx2);
// Print anual income to console
console.log(parseInt(incomes[0]) * 12 + parseInt(incomes[1]) + parseInt(incomes[2]) * 12);


/* I was trying and didn't work
let incomes2 = sentence4.match(regEx2).map(number => parseInt(number, 10));
const totalIncome = incomes2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(totalIncome);
*/

/* END */