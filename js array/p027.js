// 27.Write a JavaScript function to retrieve the value of a given property from all elements in an array. 
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null] 
// Expected result : [15, -22, 47]
// Solution - 
const filterFaulty = (arr) => {
    let results = arr.filter((val) => {
        return !(val === null || val === undefined || isNaN(val) || val === false || val === '' || val === 0);
    })

    return results;

}

console.log(filterFaulty([NaN, 0, 15, false, -22, '', undefined, 47, null, "", ``]));