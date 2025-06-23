// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capitalize_Words(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  console.log(capitalize_Words('js string exercises'));