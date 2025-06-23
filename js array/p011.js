// 11.Write a JavaScript program to find the sum of squares of a numeric vector.
// Solution - 


let arr = [1, 2, 3, 4, 5, 6]
const sum = arr.reduce((val, newVal) => {
    return val + newVal ** 2;
})

console.log(sum);