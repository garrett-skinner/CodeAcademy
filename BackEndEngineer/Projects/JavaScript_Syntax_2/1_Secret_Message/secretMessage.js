let secretMessage = [
    'Learning', 
    'is', 
    'not', 
    'about', 
    'what', 
    'you', 
    'get', 
    'easily', 
    'the', 
    'first', 
    'time,', 
    'it', 
    'is', 
    'about', 
    'what', 
    'you', 
    'can', 
    'figure', 
    'out.', 
    '-2015,', 
    'Chris', 
    'Pine,', 
    'Learn', 
    'JavaScript'
];

console.log(secretMessage.length);

// 1.
secretMessage.pop();

// 2.
console.log(secretMessage.length);

// 3.
secretMessage.push('to', 'Program');

// 4.
secretMessage[secretMessage.indexOf('easily')] = 'right';

// 5.
secretMessage.shift();

// 6.
secretMessage.unshift('Programming');

// 7.
let indexOfGet = secretMessage.indexOf('get');
secretMessage[indexOfGet] = 'know,';
secretMessage.splice(indexOfGet + 1, 4);

// 8.
console.log(secretMessage.join(' '));