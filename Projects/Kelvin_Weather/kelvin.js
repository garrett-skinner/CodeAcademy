// The forecast today is determined to be 293 Kelvin.  This value will not change, so we declare the variable with the const keyword.
const todaysForecast = 293;

// The temperature in Celsius equals the temperature in Kelvin minus 273.
const todaysCelsius = todaysForecast - 273;

// Fahrenheit = Celsius * (9/5) + 32
let todaysFahrenheit = todaysCelsius * (9/5) + 32;
todaysFahrenheit = Math.floor(todaysFahrenheit);
console.log(`The temperature is ${todaysFahrenheit} degress Fahrenheit.`);

//Extra credit: convert Celsius to the Newton scale using the following equation: Newton = Celsius * (33/100)
let todaysNewton = Math.floor(todaysCelsius * (33/100));
console.log(`The temperature is ${todaysNewton} on the Newton scale.`);