// 51.Write a JavaScript function to get the week end date.
// Solution - 

const weekEndDate = (date) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + (6 - newDate.getDay()));
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}

const dt51 = new Date();
console.log(weekEndDate(dt51).toString());