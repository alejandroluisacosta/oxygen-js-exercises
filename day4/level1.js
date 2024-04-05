/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.

  let a = 4
  let b = 3
  4 is greater than 3 */

// Variables
let a = 4;
let b = 5;

// Compare with if/else
const ifCompare = () => {
    if (a > b)
        return ('a is greater than b');
    else
        return ('b is greater than a');
}
console.log(ifCompare());

// Compare with switch
const switchCompare = () => {
    let answer;
    switch (a > b) {
        case (true):
            answer = ('a is greater than b');
            break;
        case (false):
            answer = ('b is greater than a');
            break;
    }
    return (answer);
}
console.log(switchCompare());

/* END */



/* 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */

const isEven = () => {
    let number = prompt('Enter number:');
    switch (number % 2 == 0) {
        case (true):
            alert(`${number} is an even number`);
            break;
        case (false):
            alert(`${number} is an odd number`);
            break;
    }
}
isEven();

/* END */