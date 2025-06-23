// 8.Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// Solution - 
let sum1 = 0, sum2 = 0, sum3 = 0;
for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum1 += i;
    }
    if (i % 3 === 0) {
        sum2 += i;
    }
    if (i % 5 === 0) {
        sum3 += i;
    }
}
// console.log("")
let ans = sum2 + sum3 - sum1;
console.log(ans);