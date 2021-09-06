// Note: I implemented this function based on the project description in the readme.  dogyearsactual.js will have the way CodeCademy told me to implement this.

/**
 * Given in input age recurvsively calculates the same age in dog years.
 * If the input does not round up to at least 1 we will throw an error
 * 1 will be the recursive base case and adds 10.5 to the total. 2 also adds 10.5 to the total
 * All other cases will add 4 to the total.
 * 
 * @param {number} age  Input age.  Will throw an error if it is less than 0.5
 * @return {number}     The age in dog years.
 */
function dogYears (age) {
    age = Math.round(age)
    if (age <= 0) {
        throw 'Input age must be a positive number greater than or equal to 0.5';
    }
    if (age == 1) {
        return 10.5;
    } else {
        if (age == 2){
            return (10.5 + dogYears(age - 1));
        } else{
            return (4 + dogYears(age - 1));
        }
    }
}

console.log(`1 human year is ${dogYears(1)} dog years.`);
console.log(`2 human years is ${dogYears(2)} dog years.`);
console.log(`5 human years is ${dogYears(5)} dog years.`);
console.log(`10 human years is ${dogYears(10)} dog years.`);
console.log(`15 human years is ${dogYears(15)} dog years.`);
console.log(`25 human years is ${dogYears(25)} dog years.`);
try {
    dogYears(0);
} catch (err) {
    console.log(err);
}