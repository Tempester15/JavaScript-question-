// 11.Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Solution - 
const secondLowAndHigh = (arr) => {
    // return {"secondLowest" : arr[1], "secondGreatest" : arr[arr.length - 2]};
    return [arr[1], arr[arr.length - 2]];
}

console.log(secondLowAndHigh([1, 2, 3, 4, 5]));