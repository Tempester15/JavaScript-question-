// 30.Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
// Solution - 

const lowercaseMeridiem = (date) => {
    return date.getHours() < 12 ? 'am' : 'pm';
}

console.log(lowercaseMeridiem(new Date(2023, 0, 1, 10)));
console.log(lowercaseMeridiem(new Date(2023, 0, 1, 15)));
