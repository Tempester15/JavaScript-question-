// 20.Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : 
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const generateId = (length) => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < length; i++) {
        let randomNum = Math.round(Math.random() * string.length);
        id += string[randomNum];
    }

    return id;
}

console.log(generateId(7));