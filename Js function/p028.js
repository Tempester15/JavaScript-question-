// 28.Write a JavaScript program to pass a 'JavaScript function' as parameter.
// Solution - 

function greet(message, funName, name) {
    funName(name);
    console.log(message);
}

function greeting(name) {
    console.log(`Good morning! ${name}`);
}

greet("How are you today?", greeting, "Amey");
