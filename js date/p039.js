// 39.Write a JavaScript function to get difference to Greenwich time (GMT) in hours. 
// Test Data : 
// dt = new Date(); 
// console.log(diff_to_GMT(dt)); 
// "+05.500"
// Solution - 

const diffToGMT = (date) => {
    const offset = -date.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset / 60);
    const minutes = absOffset % 60;
    return sign + String(hours).padStart(2, '0') + '.' + String(minutes * 10 / 6).padStart(3, '0');
}

console.log(diffToGMT(new Date()));