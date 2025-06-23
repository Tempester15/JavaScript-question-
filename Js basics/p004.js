/*4.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
Solution -*/ 
let a= 5, b = 6, c = 7;
let s = (a + b + c) / 2;
area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("area of triangle with sides 5, 6 and 7 is : ", area.toFixed(2));

