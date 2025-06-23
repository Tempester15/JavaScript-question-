/*5.Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
Solution -*/
let str = 'w3resource'
letter = str.slice(-1)
str = str.slice(0,-1)
str = letter + str;
console.log(str)