// 53.Write a JavaScript function to get the month end date.
// Solution - 

const monthEndDate = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

const dt53 = new Date();
console.log(monthEndDate(dt53).toString());