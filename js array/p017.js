// 17.Write a JavaScript program to shuffle an array.
// Solution - 

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.round(Math.random() * i);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(arr);