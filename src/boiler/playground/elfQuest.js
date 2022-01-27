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
        answer = smartPrompt(question + "\n\nPossible Actions: " + actionList.join(", ")) // Here we convert the list to a string by joining all of its contents with a comma and a space
    }
    return answer
}

function exploreTheBeach() { // We put our code for the beach in a function so we can re use it later
    while (true) { // We trap the user in this loop until they leave the beach
        const nextAction = getAction("What would you like to do?", ["wait", "explore the beach", "leave the beach"]) // Lists are surrounded by square brackets and separated by commas
        
        if (nextAction === "wait") {
            alert("You wait around. The barking of the gulls and the lapping of the ocean lulls you into a deep sleep")
        } else if (nextAction === "explore the beach") {
            alert("You find a large Oyster shell. Years of bombardment by the waves has left it brittle and chipped, but it's curves are still beautiful and pearlescent")
        } else if (nextAction === "leave the beach") { // the only remaining option is to leave the beach so we assume that
            exploreTheFork() // Now we reach the fork in the path
            return
        }
    }
}

function exploreTheFork() {
    const direction = getAction("As you leave the beach you reach the edge of a divide between a dark forest and a giant cave in the side of the mountain. Which way would you like to go?", ["enter the forest", "enter the cave", "return to the beach"])
    if (direction === "enter the forest") {
        exploreTheForest()
    } else if (direction === "enter the cave") {
        exploreTheCave()
    } else if (direction === "return to the beach") {
        exploreTheBeach() // Go back to the beach. Because it's a function we can run the code again without having to rewrite it
    }
}

function exploreTheCave() {
    
}

function exploreTheForest() {
    const choice = getAction("You enter a lush forest. You are surrounded by the sounds of birds and a small stream. You can see a stack of smoke billowing through the trees far away. What would you like to do?", ['investigate the smoke', 'follow the river', 'leave the forest'])
    if (choice === "leave the forest") {
        exploreTheFork()
    } else if (choice === "investigate the smoke") {
        investigateTheSmoke()
    } else if (choice === "follow the river") {
        exploreTheRiver()
    }
}

function investigateTheSmoke() {
    const approach = getAction("You fight your way through the dense thicket, with tree branches and brambles cutting at you. As the smell of smoke fills the air, you come upon a little clearing. Inside there is a figure in a red hood stoking a fire. Will you approach them?", ['approach', 'turn back']) === 'approach' // Here we have a boolean that says yes or no whether or not they said to approach
    if (approach) {
        alert("As you step into the clearing, the figure rips off their cloak to reveal a very muscular wolf. They quickly attack you, and you die. You have become a nice lunch.")
    } else {
        exploreTheForest() // Loop back to the forest opening
    }
}

function exploreTheRiver() {

}


var name = smartPrompt("What is your name adventurer?")

alert("You wake up on a strange beach. '" + name + "' is written on the inside of your shirt.")

exploreTheBeach() // We start out by exploring the beach