/**
 * Returns the number of hours a person slept on a given weekend.  These are hard-coded with artibrary values as that appears to 
 * be the intent of this project. 
 * @param {string} day The day of the week (monday, tuesday, wednesday, thursday, friday, saturday, or sunday).  Capitalization agnostic.
 * @returns The number of hours the person slept that day.
 */
const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 6;
        case 'wednesday':
            return 7;
        case 'thursday':
            return 7;
        case 'friday':
            return 4;
        case 'saturday':
            return 5;
        case 'sunday':
            return 5;
        default:
            throw 'Invalid weekday entered.';
    }
}

/**
 * Sums up the actual number of hours slept across the week.  This is meant to call the getSleepHours function 7 times and use an implicit
 * return, but I think using an array looks cleaner.
 * @returns The total number of hours slept in a week.
 */
const getActualSleepHours = () => {
    let result = 0;
    let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    for (let i = 0; i < days.length; i++) {
        result += getSleepHours(days[i]);
    }
    return result;
}

/**
 * Given an ideal number of hours slept per night, returns the total number of hours we'd need to sleep in a week to hit the ideal.
 * @param {number} idealHours 
 * @returns The total number of sleep hours we'd like to get in a week.
 */
const getIdealSleepHours = (idealHours) => 7 * idealHours;

/**
 * Determines whether a person has met, exceeded, or failed to meet their required sleep for a week.
 * @returns A string informing the user with their sleep status for the last week.
 */
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(6);
    let sleepDiff = actualSleepHours - idealSleepHours;

    if (sleepDiff > 0) {
        return `You got ${sleepDiff} more hours sleep than you needed. Good job!`;
    } else if (sleepDiff < 0) {
        return `You missed your ideal sleep hours by ${-sleepDiff}. You should get some sleep.`;
    } else {
        return 'You got the exact amount of sleep you needed.';
    }
}

console.log(calculateSleepDebt());