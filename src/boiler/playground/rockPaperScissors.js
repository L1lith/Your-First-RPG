function smartPrompt(question) {
    var output = null
    while(output === null || output.trim().length < 1) {
        output = prompt(question)
    }
    return output.trim()
}
  
function getAction(question, actionList) { 
    // Here we give a list of possible actions and retry until the user provides a valid response
    let answer = null
    while (!actionList.includes(answer)) {
        answer = smartPrompt(question + " - possible actions: " + actionList.join(", ")) // Here we convert the list to a string by joining all of its contents with a comma and a space
    }
    return answer
}

function pickRandomWord(list) {
    // returns a random number between 0 and 1 less than the length of the array (since arrays start at 0) 
    return list[Math.floor(Math.random() * list.length)]
}

const choices = ['rock', 'paper', 'scissors']

function pickWinner(choice1, choice2) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    if (choice1 == choice2) {
        return 2; // Two means a tie
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
        return 1; // One means the second person won
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
        return 0; // Zero means the first person won
    }
    if (choice1 > choice2) {
        return 0;
    } else {
        return 1;
    }
}

const playerChoice = getAction("What do you pick? Rock, paper, or scissors?", choices)
const computerChoice = pickRandomWord(choices)

const winner = pickWinner(playerChoice, computerChoice)
if (winner === 0) {
    alert("You won! The computer chose " + computerChoice)
} else if (winner === 1) {
    alert("You lose! The computer chose " + computerChoice)
} else {
    alert("It was a tie! The computer chose " + computerChoice)
}