// 24.Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null] 
// Expected result : [15, -22, 47]
// Solution - 

const filterFaulty = (arr) => {
    let results = arr.filter((val) => {
        return !(val === null || val === undefined || isNaN(val) || val === false || val === '' || val === 0);
    })

    console.log(results);

}

filterFaulty([NaN, 0, 15, false, -22, '', undefined, 47, null, "", ``]);