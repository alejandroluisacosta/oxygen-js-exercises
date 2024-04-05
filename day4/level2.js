/* 1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

const gradeFunc = () => {
    let grade = parseInt(prompt('Enter your grade:'));
    console.log(grade);
    if (grade >= 0 && grade <= 49)
        alert('Your got an F');
    else if (grade >= 50 && grade <= 59)
        alert('You got a D');
    else if (grade >= 60 && grade <= 69)
        alert('You got a C');
    else if (grade >= 70 && grade <= 89)
        alert('You got a B');
    else if (grade >= 80 && grade <= 100)
        alert('You got an A. Congrats');
    else
        alert('Invalid Grade');
}
gradeFunc();

/* END */



/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

const getSeason = () => {
    let seasonInput = parseInt(prompt('You have four options:\n\n1. September, October and November.\n2.December, January and February/\n3. March, April and May.\n4. June, July and August.\n\nEnter your choice:'));
    if (seasonInput === 1)
        alert('Season: Autum');
    else if (seasonInput === 2)
        alert('Season: Winter');
    else if (seasonInput === 3)
        alert('Season: Spring');
    else if (seasonInput === 4)
        alert('Season: Summer');
    else
        alert('Your choice has to be a number between 1 and 4, inclusive');
}
getSeason();

/* END */



/* 3. Check if a day is weekend day or a working day. Your script will take day as an input.
What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day. */

// Qué tan legible/mantenible es el código de la siguiente función? 👇🏼
const determineDay = () => {
    let day = prompt('What is the day today?').toLowerCase();
    if (day === 'monday' || day === 'tuesday' || day === 'wednesday'
        || day === 'thursday' || day === 'friday')
        return (`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekday.`);
    else if (day === 'saturday' || day === 'sunday')
        return (`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend day.`);
    else
        return ('Please enter a valid day.')
}
alert(determineDay());

/* END */