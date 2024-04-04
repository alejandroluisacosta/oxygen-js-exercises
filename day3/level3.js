/* 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDay() + 1;
let hours = now.getHours();
if (hours < 10)
    hours = '0' + hours;
let minutes = now.getMinutes();
if (minutes < 10)
    minutes = '0' + minutes;
alert(`${year}-${month}-${day} ${hours}:${minutes}`);

/* END */