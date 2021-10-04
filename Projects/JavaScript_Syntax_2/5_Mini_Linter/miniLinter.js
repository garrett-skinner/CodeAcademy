// Given constants.
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way \
from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an \
entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. \
After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  \
The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, \
an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back \
into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Initialize counts object for later.
let counts = {};

// Split the story string into an array of individual words.
let storyWords = story.split(' ');

// Log the number of words in the story.
counts.totalWords = storyWords.length;

// Remove the unnecessary words from the story and save them in a new array.
let betterWords = [];
storyWords.forEach(word => {
    if(!unnecessaryWords.includes(word)){
        betterWords.push(word);
    }
});

// Count the number of times the writer used each of the overused words.
counts.commonWords = {};
overusedWords.forEach(word => {
    counts.commonWords[word] = 0;
    betterWords.forEach(bWord => {
        if (word === bWord) {
            counts.commonWords[word]++;
        }
    });
});

// Count the number of sentences.
counts.sentenceCount = 0;
betterWords.forEach(word => {
    let lastChar = word[word.length - 1]
    if (lastChar === '.' || lastChar === '!') {
        counts.sentenceCount++;
    }
})

// Print out some statistics of the story.
function displayCounts() {
    console.log(`The original story contained ${counts.sentenceCount} sentences composed of ${counts.totalWords} words.`);
    for (const word in counts.commonWords) {
        console.log(`The writer used the common word '${word}' ${counts.commonWords[word]} times.`);
    }
}

displayCounts();
// Print the story for the user.
console.log(`The completed story is:\r\n${betterWords.join(' ')}`);