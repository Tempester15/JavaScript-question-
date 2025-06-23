// 11.Write a JavaScript program to convert temperatures to and from celsius,
// fahrenheit. [Formula : c / 5 = (f - 32) / 9[where c = temperature in celsius and f = temperature in fahrenheit ] 
// Expected Output:
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
// Solution - 
var temp = prompt("Enter temperature : ");
var choice = prompt("Enter your choice : (celcius to fahrenhiet : 1, fahrenheit to celcius : 2)");
choice = parseInt(choice);
if (choice === 1) {
    var fah = (9 / 5) * temp + 32;
    console.log("Temperature is fahrenheit : " + fah + "*F");
}
else if (choice === 2) {
    var cel = (5 / 9) * (temp - 32);
    console.log("temperature in celcius : " + cel + "*C");
}
else {
    alert("Invalid output please try again !")
}