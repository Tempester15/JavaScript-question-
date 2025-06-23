// 10.Write a JavaScript function to calculate 'yesterday day'. 
// Test Data : 
// console.log(yesterday('Nov 15, 2014')); 
// console.log(yesterday('Nov 16, 2015')); 
// console.log(yesterday('Nov 17, 2016'));
// Solution - 

const yesterday = (date) => {
    return new Date(new Date(date) - 24 * 60 * 60 * 1000).toString();

}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));