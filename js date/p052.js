// 52.Write a JavaScript function to get the month start date
// Solution - 

const monthStartDate = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

const dt52 = new Date();
console.log(monthStartDate(dt52).toString());