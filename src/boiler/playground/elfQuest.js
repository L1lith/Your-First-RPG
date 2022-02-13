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
            return exploreTheFork() // Now we reach the fork in the path
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
        exploreTheBeach()
    }
}

function exploreTheCave() {
    const enter = getAction("You find a dark cave, twisting downwards into the earth. You can hear stalagmites slowly dripping with water below. Would you like to proceed into the cave?", ['yes', 'no']) === 'yes'
    if (enter) {
        alert("As you enter the cave you realize the rocks were more slippery than you realize. You begin to slip, and fall down a fork in the cave shaft.")
        if (Math.random() > 0.5 ) { // 50% chance
            const choice = getAction("You fall down the left path into a giant pit, but fortunately you land in a massive underground pool. You feel something tugging at your foot but it's too dark to see anything. What will you do?", ['kick it', 'accept your fate'])
            if (choice === "kick it") {
                alert("You stun it for a moment, then it pulls you underwater fast, where you drown.")
                alert('You lose!')
            } else if (choice === "accept your fate") {
                const giveShoe = getAction('It drags you to the edge of the water. As you get to the shore you begin to make out the shape of some kind of strange sea creature with a mermaid tail, arms like a human, and webbed fingers. "Gruck. Am Gruck." muttered the creature. "H-hello Gruck, I am ' + name +'" you said, surprised. "Gruck love shoe. Shoe tasty" Gruck begins pulling at your shoe. Let Gruck eat your shoe?', ['take your shoe off', 'yell at Gruck']) === "take your shoe off"
                if (giveShoe) {
                    alert("You gave Gruck your shoe. Gruck affectionately licks your shoe before quickly devouring it.")
                    alert("There is no exit to the cave, but Gruck seems to have taken a liking to you. Gruck catches you raw fish to eat, and you live together in the cave for the rest of your lives.")
                    alert("You win!")
                } else {
                    alert('"GRUCK ANGRY!!!" Gruck knocks you out and eats your shoe and your foot in one big bite. You are left to die in the cave.')
                    alert('You lose!')
                }
            }
        } else {
            alert("You fall down the right path, and regain your balance. It's too steep to get back up, and in front of you is a long tunnel full of cobwebs.")
            const scareIt = getAction("As you continue down the path it becomes too dark to see. You hear something hissing ahead, what will you do now?", ['approach the creature', 'scream to scare it away']) === 'scream to scare it away'
            if (scareIt) {
                alert("A giant snake jumps out and bites you on the ankle. It's terrible poison fills your veins")
                alert("You lose!")
            } else {
                const follow = getAction('Just as you get right in front of the hissing noise, the tunnel becomes eerily silent. "Ssssalutations. I am Sylvester the snake." You feel scared, but shakily reply "Hello Sylvester, just so you know I taste terrible" "Silly Elf! I eat the ssspiders that live in this cave. I would have to be very desssperate to eat an Elf." "Phew." you said with a sigh of relief. "If you like I could ssshow you how to get out of here. Will you follow Sylvester?"', ['yes', 'no']) === "yes"
                if (follow) {
                    alert('Sylvester leads you deeper into the cave. It seems to go on forever, and just before you give up hope the tunnel slowly starts to light up. You reach the exit, and you find yourself at the edge of a beautiful city. "Thank you Sylvester" you say "No problem", Sylvester replies with a smirk. You enter the city and find it full of other Elves, and begin your new life.')
                    alert("You win!")
                } else {
                    alert("You run away from Sylvester the snake. You get lost in an endless maze of twists and turns, and starve to death in the cave.")
                    alert("You lose!")
                }
            }
        }
    } else {
        exploreTheFork()
    }
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
        alert("You lose!")
    } else {
        exploreTheForest()
    }
}

function exploreTheRiver() {
    const willCross = getAction("You follow the riverbank, but it becomes more windy, and you realize the only way to proceed will be to cross the river. It is roaring and full of fish. Will you cross the river?", ['cross the river', 'go back']) === 'cross the river'
    if (willCross) {
        alert("You try to cross the river, but it's too furious! You get sucked downstream, unable to get to the shore. You ride down the river, and luckily find yourself back at the beach.")
        exploreTheBeach()
    } else {
        exploreTheForest()
    }
}

var name = smartPrompt("What is your name adventurer?")
alert("You wake up on a strange beach. '" + name + "' is written on the inside of your shirt.")
exploreTheBeach()