// Write a JavaScript function check if a string ends with specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false

function string_endsWith(str, suffix) {
    return suffix.length > 0 && str.endsWith(suffix);
  }
  

  console.log(string_endsWith('JS PHP PYTHON','PYTHON'));  
  
  console.log(string_endsWith('JS PHP PYTHON',''));        
  