let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/**
 * Returns a target number between 0 and 9.
 * @returns A randomly generated number between 0 and 9.
 */
const generateTarget = () => Math.floor(Math.random() * 9);

/**
 * 
 * @param {number} humanGuess    The guess of the player, between 0 and 9 inclusive.
 * @param {number} computerGuess The guess of the computer, between 0 and 9 inclusive.
 * @param {number} target        The target value, between 0 and 9 inclusive.
 * @returns True of the human is closer to the target than the computer, false otherwise.  Ties are decided in favor of the human.
 */
function compareGuesses(humanGuess, computerGuess, target) {
    if ((humanGuess < 0) || (humanGuess > 9)) { alert('Input number must be between 0 and 9 inclusive.'); }
    let humanDiff = getAbsoluteDistance(humanGuess, target);
    let computerDiff = getAbsoluteDistance(computerGuess, target);
    return (humanDiff <= computerDiff);
}

/**
 * Updates the current scores based on the winner passed in.
 * @param {string} winner The winner of the round.  'human' or 'computer'
 */
function updateScore(winner) {
    if (winner === 'human') { humanScore++; }
    if (winner === 'computer') { computerScore++; }
}

/**
 * Increments the round number.
 */
const advanceRound = () => { currentRoundNumber++; }

/**
 * Calculates the absolute distance between two numbers.
 * @param {number} num1 The first input number.
 * @param {number} num2 The second input number.
 * @returns The absolute distance between the two numbers.
 */
const getAbsoluteDistance  = (num1, num2) => Math.abs(num1 - num2);