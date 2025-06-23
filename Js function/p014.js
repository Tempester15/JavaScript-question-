// 14.Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
// Solution - 
let amountToCoins = (amount, coins) => {
    let count = 0, i = 0;
    let money = [];
    while (amount > 0) {
        count = Math.floor(amount / coins[i]);
        amount = amount % coins[i];
        money.push([coins[i], count]);
        i++;
    }
    let elements = [];
    for (let i = 0; i < money.length; i++) {
        if (money[i][1] != 0) {
            for (let j = 0; j < money[i][1]; j++) {
                elements.push(money[i][0]);
            }
        }
    }
    return elements;
}

console.log(amountToCoins(54, [25, 10, 5, 2, 1]));