// 31.Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.
// Solution - 

const upperCaseMeridiem = (date) =>{
  return date.getHours() < 12 ? 'AM' : 'PM';
}

console.log(upperCaseMeridiem(new Date(2023,0,1,10))); 
console.log(upperCaseMeridiem(new Date(2023,0,1,15)));