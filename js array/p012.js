// 12.Write a JavaScript program to compute the sum and product of an array of integers.
// Solution - 

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
const sum = arr.reduce((val, sum) => {
    return sum += val;
})
const product = arr.reduce((val, prod = 1) => {
    return prod * val;
})

console.log(sum);