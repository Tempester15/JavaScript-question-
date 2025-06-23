// 40.Write a JavaScript function to find the unique elements from two arrays. 
// Test Data : 
// console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
// ["1", "2", "3", "10", "100"] 
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
// ["1", "2", "3", "4", "5", "6"] 
// console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
// ["1", "2", "3", "10", "100"]
// Solution - 
const flatten = (array, shallow = false) => {
    if (shallow) {
        return array.reduce((acc, val) => acc.concat(val), []);
    } else {
        return array.reduce((acc, val) => {
            if (Array.isArray(val)) {
                return acc.concat(flatten(val));
            } else {
                return acc.concat(val);
            }
        }, []);
    }
};

const difference = (array1, array2) => {
    array1 = flatten(array1);
    array2 = flatten(array2);
    array1 = array1.concat(array2);
    union = new Set(array1);
    let results = [];
    for (let i of union) {
        results.push(i);
    }
    return results;

}

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
