// 26.Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12). 
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(numeric_month(dt)); 
// "11"
// Solution - 

const numericMonth = (date)=> {
  return (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
}
console.log(numericMonth(new Date(2015, 10, 1)));