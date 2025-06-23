// 23.Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.). 
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(english_ordinal_suffix(dt)); 
// "1st"
// Solution - 

function englishOrdinalSuffix(date) {
    const day = date.getDate();
    if (day > 3 && day < 21) {
        return day + "th";
    }
    else if (day % 10 === 1) {
        return day + 'st';
    }
    else if (day % 10 === 2) {
        return day + 'nd';
    }
    else if (day % 10 === 3) {
        return day + 'rd';
    }
    else {
        return day + 'th';
    }
}

console.log(englishOrdinalSuffix(new Date(2015, 10, 1)));