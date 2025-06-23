/*6.Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
Solution - */
var year = prompt(" enter a year :");
year = parseInt(year);
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is not a leap year");
}