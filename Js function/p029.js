// 29.Write a JavaScript function to get the function name
// Solution - 
function returnFunctionName(funName) {
    return funName.name;
}

function greeting() {
    console.log("Hello Amey");
}

console.log(returnFunctionName(greeting));