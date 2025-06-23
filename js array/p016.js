// 16.Find the leap years in a given range of years
// Solution - 
const checkLeap = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

const startingYear = 2013;
const endingYear = 2030;

for (let i = startingYear; i <= endingYear; i++) {
    if (checkLeap(i)) {
        console.log(`${i} is a leap year`)
    }
}