// 28.Write a JavaScript function to find the longest common starting substring in a set of strings. 
// Sample array : console.log(longest_common_starting_substring(['go', 'google'])); 
// Expected result : "go"
// Solution - 

function longest_common_starting_substring(arr) {
    if (arr.length === 0) return "";
    if (arr.length === 1) return arr[0];

    let prefix = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let j = 0;
        while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
            j++;
        }
        prefix = prefix.slice(0, j);

        if (prefix === "") break; 
    }

    return prefix;
}

console.log(longest_common_starting_substring(['go', 'google']));