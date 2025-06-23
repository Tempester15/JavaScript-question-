// 37.Write a JavaScript function to filter false, null, 0 and blank values from an array. 
// Test Data : 
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); 
// [58, "abcd", true]
// Solution - 
const filterFaulty = (arr) => {
    let results = arr.filter((val) => {
        return !(val === null || val === undefined || isNaN(val) || val === false || val === '' || val === 0);
    })

    return results;

}
console.log(filterFaulty([NaN, 0, 15, false, -22, '',undefined, 47, null, "", ``]));