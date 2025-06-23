// 33.Write a JavaScript function to get a random item from an array.
// Solution - 
let arr = [1, 2, 3, 4, 5, 6]
function returnRandom(arr) {
    index = Math.floor(Math.random() * 10)
    return arr[index]
}

console.log(returnRandom(arr));