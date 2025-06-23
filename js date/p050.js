// 50.Write a JavaScript function to get the week start date.
// Solution - 

const weekStartDate = (date) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - newDate.getDay());
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

const dt50 = new Date();
console.log(weekStartDate(dt50).toString());