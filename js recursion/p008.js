// 8.Write a JavaScript program for binary search. 
// Sample array : [0,1,2,3,4,5,6]  
// console.log(l.br_search(5)) will return '5'
// Solution - 
function binSearch(low, high, number, arr) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === number) {
        return mid;
    }
    else if (arr[mid] > number) {
        return binSearch(low, mid - 1, number, arr);
    }
    else if (arr[mid] < number) {
        return binSearch(mid + 1, high, number, arr);
    }
    else {
        return -1
    }
}

let a = [0, 1, 2, 3, 4, 5, 6]
console.log(binSearch(0, a.length, 5, a));