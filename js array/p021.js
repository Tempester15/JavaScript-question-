// 21.Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. 
// Sample Data : 
// console.log(flatten([1, [2], [3, [[4]]],[5,6]])); 
// [1, 2, 3, 4, 5, 6] 
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); 
// [1, 2, 3, [[4]], 5, 6]
// Solution - 
const flatten = (array, shallow = false) => {
    if (shallow) {
        return array.reduce((acc, val) => acc.concat(val), []);
    }
    else {
        return array.reduce((acc, val) => {
            if (Array.isArray(array)) {
                acc.concat(flatten(val));
            }
            else {
                acc.concat(val);
            }

        })
    }
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
