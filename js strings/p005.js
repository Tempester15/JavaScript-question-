// 5.Write a JavaScript function to convert a string in abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
// Solution - 

const abbrev_name = (name) => {
    let parts = name.trim().split(" ");
    return parts[0] + ' ' + parts[1][0] + '.';
}
console.log(abbrev_name("Robin Singh"));