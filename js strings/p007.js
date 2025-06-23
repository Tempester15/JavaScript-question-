// 7.Write a JavaScript function to parameterize a string. 
// Test Data : 
// console.log(string_parameterize("Robin Singh from USA.")); 
// "robin-singh-from-usa"
// Solution - 
function string_parameterize(str) {
    return str.trim().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
}
  
console.log(string_parameterize("Robin Singh from USA."));