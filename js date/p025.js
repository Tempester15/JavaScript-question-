// 25.Write a JavaScript function to get a full textual representation of a month, such as January or June. 
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(full_month(dt)); 
// "November"
// Solution - 

const fullMonth = (date)=>{
  return date.toLocaleDateString('en-US', { month: 'long' });
}

console.log(fullMonth(new Date(2015, 10, 1)));