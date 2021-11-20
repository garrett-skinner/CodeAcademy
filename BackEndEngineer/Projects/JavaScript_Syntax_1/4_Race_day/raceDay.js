// Generate a random race number.  For adults, this will be increased by 1000.
let raceNumber = Math.floor(Math.random() * 1000);

/**
 * Whether the runner registered early.  This is supposed to be hard-coded, but I don't like that so 
 * we'll round the result of Math.random() to get a boolean equivalent.
 */
let registeredEarly = Math.round(Math.random());

// Randomly generate a runner's age.  We'll deal with integers from 0 to 99.
let runnerAge = Math.floor(Math.random() * 100);

// If the runner is an adult who registered early, add 1000 to their race number.
if ((runnerAge > 18) && registeredEarly) {
    raceNumber += 1000;
}

/**
 * Prints the runner's start time.
 * If the runner is under 18, they run at 12:30 pm.
 * If the runner is over 18 and registered late, they run at 11:00 am.
 * If the runner is over 18 and registered early, they run at 9:30 am.
 */
let runTime = '';
if (runnerAge < 18) {
    runTime = `Your race begins at 12:30 pm. Your race number is ${raceNumber}`;
} else if (!registeredEarly && (runnerAge > 18)) {
    runTime = `Your race begins at 11:00 am. Your race number is ${raceNumber}`;
} else if (registeredEarly && (runnerAge > 18)) {
    runTime = `Your race begins at 9:30 am. Your race number is ${raceNumber}`;
} else {
    runTime = 'Please see the registration desk.'
}

 //Display the message to the user.
 console.log(runTime);