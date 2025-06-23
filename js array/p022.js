// 22.Write a JavaScript program to compute the union of two arrays. 
// Sample Data : 
// console.log(union([1, 2, 3], [100, 2, 1, 10])); 
// [1, 2, 3, 10, 100]
// Solution - 

const union = (array1, array2) => {
    let set = new Set(array1.concat(array2));
    let ans = [];
    for (let element of set) {
        ans.push(element);
    }
    return ans;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));