// Variable to hold the user's name, should they choose to input it.
let userName = 'Woody';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Variable to hold the user's question.
let userQuestion = 'Will Andy pick me?';
console.log(`${userName} has asked the magic eight ball "${userQuestion}"`);

// Generate a random integer from 0 - 7 inclusive.
let randomNumber = Math.floor(Math.random() * 8);

// Initialize variable to hold the eight ball's response.
let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain!';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it!';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Invalid input.';
        break;
}

console.log(`The magic eight ball says "${eightBall}"`);