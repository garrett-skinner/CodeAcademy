// Variable to store my age.
let myAge = 25;

// Variable to indicate the early years, given those are weighted as 10.5 each in dog years.
let earlyYears = 2;
earlyYears *= 10.5;

// Since we have accounted for the early years already, let's remove those from my age. The remaining years are weighed as 4 each in dog years.
let laterYears = myAge - 2;
laterYears *= 4;
console.log(`Early years: ${earlyYears}\r\nLater years: ${laterYears}`);

// Now that we have the early and later years accounted for and converted, we add to get the total age in dog years.
let myAgeInDogYears = earlyYears + laterYears;

// Store my name (in lower case) in a variable for string interpolation later.
let myName = 'Garrett'.toLowerCase();

// Print out my age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
