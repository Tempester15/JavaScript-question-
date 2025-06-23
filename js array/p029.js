// 29.Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. 
// Test Data : 
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
// Solution - 
const numStringRange = (start, end, step) => {
    let arr = [];
    if (typeof start === 'string' && typeof end === 'string') {
        for (let i = start.charCodeAt(0); i < end.charCodeAt(0); i++) {
            arr.push(String.fromCharCode(i));
        }
    }
    else {
        for (let i = start; i < end; i++) {
            arr.push(i);
        }
    }
    return arr;

}

console.log(numStringRange('a', 'z', 2));