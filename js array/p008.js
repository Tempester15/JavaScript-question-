// 8.Write a JavaScript program to find the most frequent item of an array. Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
// Sample Output : a ( 5 times ).
// Solution - 

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let freq = {};
for (let i = 0; i < arr1.length; i++) {
    if (freq.hasOwnProperty(arr1[i])) {
        freq[arr1[i]] += 1;
    }
    else {
        freq[arr1[i]] = 1;
    }
}
let maxFreq = null;
keys = Object.keys(freq)
console.log(freq)
for (let i = 1; i < keys.length; i++) {
    if (freq[keys[i]] > freq[keys[i - 1]]) {
        maxFreq = freq[keys[i]];
    }
}
console.log(maxFreq)