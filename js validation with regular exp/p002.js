// Write a JavaScript program to check a credit card number
function isValidCardFormat(cardNumber) {
    const cleaned = cardNumber.replace(/[\s-]/g, '');

    const regex = /^(?:4\d{12}(?:\d{3})?|5[1-5]\d{14}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|6(?:011|5\d{2})\d{12}|(?:2131|1800|35\d{3})\d{11})$/;

    return regex.test(cleaned);
}


console.log(isValidCreditCard("4111111111111111")); // true
console.log(isValidCreditCard("1234567890123456")); // false
