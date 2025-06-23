// 7.Write a JavaScript program to construct the following pattern, using a nested for loop.
// Solution - 
for (let i = 0; i < 6; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    console.log(string);
}