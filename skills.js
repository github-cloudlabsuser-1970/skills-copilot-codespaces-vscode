// function to covert Celsius
// to Fahrenheit, where it returns the value
// in Fahrenheit
function cToF(celsius) {
    // Multiply by 9, then divide by 5, then add 32
    return (celsius * 9 / 5) + 32;
}

// Driver code
const celsius = 60;
//Make nice informative console log
console.log(`The temperature is ${cToF(celsius)}°C`);


//function to convert Fahrenheit to Celsius, where it returns the value in Celsius
function fToC(fahrenheit) {
    // Deduct 32, then multiply by 5, then divide by 9
    return (fahrenheit - 32) * 5 / 9;
}

// Driver code
const fahrenheit = 45;
//Make nice informative console log
console.log(`The temperature is ${fToC(fahrenheit)}°F`);
