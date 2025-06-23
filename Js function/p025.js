// 25.Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
// Solution - 

function longestCountryName(country) {
    let maxStr = null;
    for (let i of country) {
        for (let j of country) {
            if (j.length > i.length) {
                maxStr = j;
            }
        }
    }
    return maxStr;

}

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));