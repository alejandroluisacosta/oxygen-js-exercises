/* 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100 */

// Prompt user for base and height
let base = prompt();
let height = prompt();
// Calculation
let area = 0.5 * base * height;
// To console
alert(`Triangle area: ${area}`);

/* END */



/* 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */

// Prompt user for sides
let a = prompt();
let b = prompt();
let c = prompt();
// Triangle's perimeter
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
alert('Triangle\'s perimeter: ' + perimeter);

/* END */



/* 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

// Pi & radius variables
let pi = 3.14;
let r = prompt('Radius:');
// Area
let circleArea = pi * r * r;
alert(`Circle's area: ${circleArea} cm`);
// Circumference
let circumference = (2 * pi * r).toFixed(2);
alert(`Circle's circumference: ${circumference}cm`);

/* END */



/* 9.Write a script that prompts a user to enter hours and rate per hour. Calculate pay of the person

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */

const weeklyEarning = () => {
    let hours = prompt('Enter hours:');
    let hourlyRate = prompt('Enter rate per hour:');
    let weeklyEarning = hours * hourlyRate;
    alert(`Your weekly earning is ${weeklyEarning}`);
}
weeklyEarning();

/* END */



/* 10. If the length of your name is greater than 7 say, your name is long else say your name is short. */

const nameLength = () => {
    let name = prompt('What\'s your name?');
    if (name.length > 7)
        alert('Your name is long');
    else
        alert('Your name is short');
}
nameLength();

/* END */



/* 11. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */

const nameCompare = () => {
    let firstName = prompt('First name:');
    let lastName = prompt('Last name:');
    if (firstName.length > lastName.length)
        alert(`Your first name, ${firstName}, is longer than your family name, ${lastName}.`);
    else if (firstName.length < lastName.length)
        alert(`Your last name, ${lastName}, is longer than your first name, ${firstName}.`);
    else
        alert(`Your first name, ${firstName} and your last name ${lastName}, are equally long.`);
}
nameCompare();

/* END */



/* 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */

const canDrive = () => {
    let birthYear = prompt('Enter birth year:');
    let currentYear = new Date().getFullYear();
    let age = parseInt(currentYear) - parseInt(birthYear);
    if (age >= 18)
        alert(`You are ${age}. You can drive.`);
    else {
        let yearsToDrive = 18 - parseInt(age);
        alert(`You are ${age}. You will be allowed to drive after ${yearsToDrive} years.`);
    }
}
canDrive();

/* END */





/* 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds. */

const secondsLived = () => {
    let yearsLived = prompt('Enter number of years you\'ve lived:');
    let secondsPerYear = 31536000;
    let totalSeconds = yearsLived * secondsPerYear;
    alert(`You\'ve lived ${totalSeconds} seconds.`);
}
secondsLived();

/* END */



/* 15. Create a human readable time format using the Date time object

i. YYYY-MM-DD HH:mm
ii. DD-MM-YYYY HH:mm
iii. DD/MM/YYYY HH:mm */

// i
const timeFormat = () => {
    let now = new Date();
    alert(`Format i: ${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`);
}
timeFormat();

/* END */