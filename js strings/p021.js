// Write a JavaScript function to repeat a string a specified times.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeat_string(str, count) {
    if (typeof str !== 'string' || typeof count !== 'number' || count < 0) {
        return "Error in string or count.";
    }
    return str.repeat(count);
}


console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
