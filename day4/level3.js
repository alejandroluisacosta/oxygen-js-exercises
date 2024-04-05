/* 1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */

// Function to determine is month is even based on array's index
const isEven = (month) => {
    if ((month + 1) % 2 === 0)
        return true;
    else
        return false;
  }

// Array of months in a year
let monthsInYear = ['january', 'february', 'march', 'april', 'may', 'june','july', 'august', 'september', 'october', 'november', 'december'];

//Function to determine days in month
const daysInMonth = () => {
    let month = prompt('Enter a month:').toLowerCase();
    for (let index = 0; monthsInYear[index]; index++) {
        if (month === monthsInYear[index]) {
            if (index + 1 === 2)
                return (`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`);
            else if (index + 1 < 8 && isEven(index)
                    || index + 1 >= 8 && !isEven(index))
                return (`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`);
            else
                return (`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days`);
        }
    }
    return ('Invalid month');
}
alert(daysInMonth());

/* END */



// Exercise-switch alert
alert('Now let\'s have the leap year into account');


/* 2. Write a program which tells the number of days in a month, now consider leap year. */

const daysInMonthLeapYear = () => {
    let month = prompt('Enter a month:').toLowerCase();
    let year;
    if (month === 'february')
        year = parseInt(prompt('Enter a year:'));
    for (let index = 0; monthsInYear[index]; index++) {
        if (month === monthsInYear[index]) {
            if (index + 1 === 2 && year % 4 === 0)
                return (`${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days`);
            if (index + 1 === 2)
                return (`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`);
            else if (index + 1 < 8 && isEven(index)
                    || index + 1 >= 8 && !isEven(index))
                return (`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`);
            else
                return (`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days`);
        }
    }
    return ('Invalid month');
}
alert(daysInMonthLeapYear());

/* END */