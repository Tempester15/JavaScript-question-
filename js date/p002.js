// 2.Write a JavaScript function to get the current date. 
// Note : Pass a separator as an argument. 
// Test Data : 
// console.log(curday('/')); 
// console.log(curday('-')); 
// Output : 
// "11/13/2014" 
// "11-13-2014"
// Solution - 

const curDay = (str) => {
    let dateObj = new Date();
    let date = dateObj.getDate().toString();
    let month = dateObj.getMonth() + 1;
    if (month < 10) month = '0' + month;
    else month;
    month = month.toString()
    let year = dateObj.getFullYear().toString();
    return [date, month, year].join(str);

}

console.log(curDay('-'));