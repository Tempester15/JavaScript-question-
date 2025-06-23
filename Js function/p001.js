// 1.Write a JavaScript function that reverse a number. 
// Example x = 32243; 
// Expected Output: 34223
// Solution -
    function reverseDigits(number) {
        let rev = 0;
        let rem;
        while (number > 0) {
            rem = number % 10;
            rev = rev * 10 + rem;
            number = Math.floor(number / 10);
        }

        return rev;
    }
let num = 32236;
console.log(reverseDigits(num));