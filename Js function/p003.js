// 3.Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d,do, dog, o, og, g

Solution -
    function comb(str) {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            let string = ""
            for (let j = i; j < str.length; j++) {
                if (str[i] === str[j]) {
                    string = string + str[i];
                }
                else {
                    string += str[j]
                }
                arr.push(string);
            }
        }
        return arr;
    }

console.log(comb('dog'));