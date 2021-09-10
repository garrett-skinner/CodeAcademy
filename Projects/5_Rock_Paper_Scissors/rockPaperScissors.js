/**
 * Takes a user input or rock, paper, or scissors and returns the input in lowercase.  Throws an error
 * if the user enters something other than rock, paper, or scissors.
 * There is a cheat code; if the player enters 'bomb' they will automatically win the game.
 * @param {string} userInput 
 * @returns {string} The userInput value in lowercase.
 */
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case 'rock':
            return userInput;
        case 'paper':
            return userInput;
        case 'scissors':
            return userInput;
        case 'bomb':
            return userInput;
        default:
            throw 'Input must be rock, paper, or scissors (capitalization insensitive).'
    }
}

/**
 * Generates the computer's choice in the game of rock, paper, scissors.
 * @returns {string} rock, paper, or scissors.
 */
const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            'Something has gome terribly wrong.';
    }
}

/**
 * Determines the winner of a rock, paper, scissors match based on the usual rules. If the user chooses 'bomb', they win no matter what.
 * @param {string} userChoice      The user's choice; rock, paper, or scissors.
 * @param {string} computerChoice  The computer's choice; rock, paper, or scissors.
 * @returns 
 */
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Draw!';
    }
    else {
        if (userChoice === 'rock') {
            switch (computerChoice) {
                case 'paper':
                    return `Computer wins! ${computerChoice} beats ${userChoice}.`;
                case 'scissors':
                    return `Player wins! ${userChoice} beats ${computerChoice}.`;
            }
        }
        if (userChoice === 'paper') {
            switch (computerChoice) {
                case 'scissors':
                    return `Computer wins! ${computerChoice} beats ${userChoice}.`;
                case 'rock':
                    return `Player wins! ${userChoice} beats ${computerChoice}.`;
            }
        }
        if (userChoice === 'scissors') {
            switch (computerChoice) {
                case 'rock':
                    return `Computer wins! ${computerChoice} beats ${userChoice}.`;
                case 'paper':
                    return `Player wins! ${userChoice} beats ${computerChoice}.`;
            }
        }
        if (userChoice === 'bomb') {
            return `Player wins as they have destoryed the playing field with a ${userChoice}.`;
        }
    }
}

const playGame = () => {
    let userChoice = getUserChoice('SCisSorS');
    let computerChoice = getComputerChoice();
    console.log(`Player has chosen ${userChoice}.`);
    console.log(`Computer has chosen ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();