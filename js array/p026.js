// 26.Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. 
// Input: numbers= [10,20,10,40,50,60,70], target=50 
// Output: 3, 4
// Solution - 

const findPairSum = (array, target) => {
    results = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                results.push([i, j]);
            }
        }
    }
    return results;
}

console.log(findPairSum([10, 20, 10, 40, 50, 60, 70], 50));
