let vowels = ['a', 'e', 'i', 'o', 'u'];
let doubles = ['u', 'e'];

let input = 'This poor phrase will be horribly butchered by this function.'
let resultArray = [];
for (let i = 0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++){
        if (input[i] === vowels[j]) { resultArray.push(input[i]) }
    }
    if ((input[i] === 'e') || (input[i] === 'u')) { resultArray.push(input[i]); }
}

console.log(resultArray.join('').toUpperCase());