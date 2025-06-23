/*3.Write a JavaScript program to get the current date. 
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

if (date < 10){
     date = '0' + date;
}
if (month < 10){
    month = '0' + month;
} 
formatOne = `${date}/${month}/${year}`
formatTwo = `${month}/${date}/${year}`
formatThree = `${date}-${month}-${year}`
formatFour = `${date}-${month}-${year}`

console.log(formatOne);
console.log(formatTwo);
console.log(formatThree);
console.log(formatFour);