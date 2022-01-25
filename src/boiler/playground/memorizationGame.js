function pickRandomWord(list) {
    // returns a random number between 0 and 1 less than the length of the array (since arrays start at 0) 
    return list[Math.floor(Math.random() * list.length)]
}
const words = ['tomato', 'banana', 'potato', 'broccoli', 'pickle', 'shoe', 'red', 'phone', 'pencil', 'ball', 'duck', 'dirty', 'shark', 'adventure', 'sandwich', 'game']

alert("Try to remember all the words and enter them back in order one at a time")
let wordList = []
while (true) { // The true never changes so it loops forever
    const word = pickRandomWord(words) // Add a new word
    wordList.push(word) // This adds the new word to the end of our list
    alert("Word Number " + (wordList.length) + ": " + word)
    // Now we've shown next word, now we gotta ask what all the words are
    // p stands for position, so we loop over the position of each word
    for (var p = 0; p < wordList.length; p++) {
        const word = wordList[p].trim().toLowerCase()
        const guess = prompt("What is word number " + (p + 1) + "?").trim().toLowerCase() // We add 1 to p since our array starts at 0
        if (guess !== word) {
            alert("You lose! The word was " + word + ". Your score was: " + wordList.length - 1)
            throw new Error("The game was lost") // This forces our program to exit
        }
    }
}
