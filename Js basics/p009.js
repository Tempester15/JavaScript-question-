// 9.Write a JavaScript program to calculate days left until next Christmas
let today = new Date();
let currentYear = today.getFullYear();
let christmas = new Date(currentYear, 11, 26);

if (today > christmas) {
    christmas = new Date(currentYear + 1, 11, 26);
}

let oneDay = 1000 * 60 * 60 * 24;
let timeDiff = christmas.getTime() - today.getTime();
let nunmberOfDays = Math.floor(timeDiff / oneDay)
console.log(`Number of days until the christmas : ${nunmberOfDays} day(s)`);