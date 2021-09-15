/**
 * Write a function that returns the string 'Hello, World!'
 * @returns Hello, World!
 */
function greetWorld() {
    return 'Hello, World!';
}

/**
 * Given an input age, checks whether the person is old enough to vote.
 * @param {number} age The age of the person in question.
 * @returns True if the age is greater than or equal to 18, false otherwise.
 */
function canIVote(age) {
    return age >= 18;
}

/**
 * Returns a response indicating whether two input strings are equal.
 * @param {string} str1 String number 1.
 * @param {string} str2 String number 2.
 * @returns 'You agree!' if the input string are equal, 'You disagree!' otherwise.
 */
function agreeOrDisagree(str1, str2) {
    return str1 === str2 ? 'You agree!' : 'You disagree!';
}

/**
 * Given in input age, identifies the current stage of life for the person.
 * @param {number} age The age of the person in question. 
 * @returns A string identifying the life cycle stage of the person.
 */
function lifePhase(age) {
    if ((age >= 0) && (age < 4)) { return 'baby'; }
    else if ((age >= 4) && (age < 13)) { return 'child'; }
    else if ((age >= 13) && (age < 20)) { return 'teen'; }
    else if ((age >= 20) && (age < 65)) { return 'adult'; }
    else if ((age >= 65) && (age < 141)) { return 'senior citizen'; }
    else { return 'This is not a valid age'; }
}

/**
 * Given three input assignment grades, returns the student's letter grade.
 * @param {number} grade1 Grade on the first assignment.
 * @param {number} grade2 Grade on the second assignment.
 * @param {number} grade3 Grade on the third assignment.
 * @returns The letter grade for the student after the three gradfes are averaged.
 */
function finalGrade(grade1, grade2, grade3) {
    if ((grade1 < 0) || (grade1 > 100) || (grade2 < 0) || (grade2 > 100) || (grade3 < 0) || (grade3 > 100)) {
        return 'You have entered an invalid grade.';
    }
    let average = (grade1 + grade2 + grade3) / 3;
    if ((average >= 0) && (average < 60)) { return 'F'; }
    else if ((average >= 60) && (average < 70)) { return 'D'; }
    else if ((average >= 70) && (average < 80)) { return 'C'; }
    else if ((average >= 80) && (average < 90)) { return 'B'; }
    else { return 'A'; }
}

/**
 * Returns a cheery greeting for an armed forces member.
 * @param {string} rank The rank of the person.
 * @param {string} lastName The last name of the person.
 * @returns '${rank} ${lastName} reportin for duty!
 */
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`;
}

/**
 * Simulates rolling two dice.
 * @returns The sum of the two rolled die.
 */
function rollTheDice() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}

/**
 * Calculates the weight of an object on another planet given its weight on Earth.
 * @param {number} earthWeight The weight of the object on Earth.
 * @param {string} planet The planet for which to calculate the object's new weight.
 * @returns The weight of the object on the input planet.  Throws as error if an invalid planet is passd.
 */
function calculateWeight(earthWeight, planet) {
    let weight;
    switch (planet) {
        case 'Mercury':
            weight = earthWeight * 0.378;
            break;
        case 'Venus':
            weight = earthWeight * 0.907;
            break;
        case 'Mars':
            weight = earthWeight * 0.377;
            break;
        case 'Jupiter':
            weight = earthWeight * 2.36;
            break;
        case 'Saturn':
            weight = earthWeight * 0.916;
            break;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
            break;
    }
    return weight;
}