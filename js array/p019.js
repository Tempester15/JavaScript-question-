// 19.There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
// Sample array : 
// array1 = [1,0,2,3,4]; 
// array2 = [3,5,6,7,8,13]; 
// Expected Output : [4, 5, 8, 10, 12, 13]

// Solution - 

let sumArr = []
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
maxLength = array1.length > array2.length ? array1.length : array2.length
for (let i = 0; i < maxLength; i++) {

    let sum = array1[i] + array2[i];
    if (isNaN(sum)) {
        if (array1[i] == undefined) {
            sum = array2[i];
        }
        else {
            sum = array1[i];
        }
    }
    sumArr.push(sum);
}
console.log(sumArr);