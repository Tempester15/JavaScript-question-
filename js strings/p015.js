// Write a JavaScript function to humanized number (Formats a number to a 
// human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"
// Solution - 
function humanize_format(number) {
    if (typeof number !== 'number') return;

    if (number % 100 >= 11 && number % 100 <= 13) {
        return number + 'th';
    }

    switch (number % 10) {
        case 1: return number + 'st';
        case 2: return number + 'nd';
        case 3: return number + 'rd';
        default: return number + 'th';
    }
}


console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));   