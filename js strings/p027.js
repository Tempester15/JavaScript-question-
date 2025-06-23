// Write a JavaScript function to convert ASCII to Hexadecimal format.
// Test Data :
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));
// Output :
// "3132"
// "313030"

function ascii_to_hexa(str) {

    return str.split('').map(c => c.charCodeAt(0).toString(16)).join('');
}


console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
