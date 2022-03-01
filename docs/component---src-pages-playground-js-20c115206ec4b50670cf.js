"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[6008],{1644:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Playground}});var _raw_loader_boiler_playground_adLibs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6084),_raw_loader_boiler_playground_darkWalk__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(718),_raw_loader_boiler_playground_elfQuest__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(3854),_raw_loader_boiler_playground_memorizationGame__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7603),_raw_loader_boiler_playground_rockPaperScissors__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3720),_components_TranslatedLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2472),_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4571),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8014),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7606),react_helmet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5414),sandhands__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9e3),React=__webpack_require__(5007);function Playground(){return React.createElement(React.Fragment,null,React.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.q,null,React.createElement("title",null,"The Playground"),React.createElement("meta",{name:"description",content:"Play the RPG games other people have made!"})),React.createElement("h1",null,"The Playground"),React.createElement("p",null,"Here are some great games other people made with the game editor!",React.createElement("br",null),"They can help you come up with your own game idea, or you can just have fun playing them 🙂"),React.createElement("div",{className:_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.Tt},React.createElement(Game,{title:"Funny Ad Libs",code:_raw_loader_boiler_playground_adLibs__WEBPACK_IMPORTED_MODULE_5__.Z,description:"A silly story creator",author:"Lilith",source:"adLibs"}),React.createElement(Game,{title:"The Memorization Game",code:_raw_loader_boiler_playground_memorizationGame__WEBPACK_IMPORTED_MODULE_6__.Z,description:"See how many words you can remember in a row",author:"Lilith",source:"memorizationGame"}),React.createElement(Game,{title:"Rock Paper Scissors",code:_raw_loader_boiler_playground_rockPaperScissors__WEBPACK_IMPORTED_MODULE_7__.Z,description:"A game of chance",author:"Lilith",source:"rockPaperScissors"}),React.createElement(Game,{title:"A Dark Night",code:_raw_loader_boiler_playground_darkWalk__WEBPACK_IMPORTED_MODULE_8__.Z,description:"Take a walk in a dark city",author:"Lilith",source:"darkWalk"}),React.createElement(Game,{title:"Elf Quest",code:_raw_loader_boiler_playground_elfQuest__WEBPACK_IMPORTED_MODULE_9__.Z,description:"Go on an RPG adventure as a lost elf. Based on the starter code in the game editor.",author:"Lilith",source:"elfQuest"})),React.createElement("span",{className:_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.rG},"If you make your own game you can submit a request to have your game posted on this page by going"," ",React.createElement("a",{target:"_blank",className:"bold",href:"https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=rpg+display&template=display-your-project-on-the-site.md"},"here!")," "))}var gamePropsFormat={_:{code:String,title:String,thumbnail:sandhands__WEBPACK_IMPORTED_MODULE_3__.Jd,description:String,author:String,source:String},optionalProps:["thumbnail","source"]};function Game(props){return(0,sandhands__WEBPACK_IMPORTED_MODULE_3__.Nw)(props,gamePropsFormat),React.createElement("div",{className:_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.H6},React.createElement("h2",{className:_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.TN},props.title),React.createElement("span",{className:_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.v},"By ",props.author),React.createElement("p",{className:_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.WL},props.description),React.createElement("span",{onClick:function onClick(){eval(props.code)},className:"icon "+_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.hY},React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.G,{title:"Play the game",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.aQp})),"string"==typeof props.source?React.createElement(_components_TranslatedLink__WEBPACK_IMPORTED_MODULE_0__.Z,{className:_styles_Playground_module_scss__WEBPACK_IMPORTED_MODULE_4__.qz,to:"/rpg/editor?code="+encodeURIComponent(props.source)},"See how the code works!"):null)}},4571:function(e,r,t){t.d(r,{rG:function(){return o},Tt:function(){return n},H6:function(){return a},WL:function(){return s},TN:function(){return i},hY:function(){return l},qz:function(){return c},v:function(){return u}});var o="Playground-module--shareYourGame--9KIyG",n="Playground-module--games--5vn7+",a="Playground-module--game--Dmcqy",s="Playground-module--description--B+jeo",i="Playground-module--title--MVDqW",l="Playground-module--play--uKQW9",c="Playground-module--source--qcaqE",u="Playground-module--author--THkUX"},6084:function(e,r){r.Z='const verb = prompt("Pick a verb")\r\nconst verb2 = prompt("Pick another verb")\r\nconst adjective = prompt("Pick an adjective")\r\nconst adjective2 = prompt("Pick another adjective")\r\nconst creature = prompt("Pick a creature")\r\nconst creatureName = prompt("What is the name of the " + creature + "?")\r\nconst noun = prompt("Pick a noun")\r\nconst noun2 = prompt("Pick another noun")\r\n\r\n// We can use the ` symbol to make strings that let us fill them in automatically like a template\r\nalert(`There once was a ${creature} called ${creatureName} that lived in a ${noun}. ${creatureName} was a very ${adjective} ${creature}. One day ${creatureName} was walking down the street when they saw a ${noun2}. It was so ${adjective2} that everyone died. The end.`)\r\n'},718:function(e,r){r.Z='alert("Dark concrete pillars pierce the night sky. You\'re walking down a lazy river dividing the looming city in half. It feels cold so you take a seat on a bench and put your arms inside your coat. It\'s been many years since moved out, missing the voice of your mother and the warmth of her home.")\r\nconst doing = prompt(\'A dark figure approaches you from the side and sits beside you. They\\\'re tapping a cane on the ground rhythmically. "What are you doing here?"\')\r\nalert(\'They reach out with fingers twisted with age, and point at you. "You used to be different" they uttered in a low, raspy voice "Your light has grown dim"\')\r\nalert("This is not news to you. As the years passed, the last of your happy memories have been fading away.")\r\nconst want = prompt(\'Slowly drops of rain start to tap the ground. "What do you really want?" the man asks.\')\r\nalert(\'"You say you want \' + want + \'" yet you are still sitting here, \' + doing + \' in the freezing rain.\')\r\nalert("Oh well... you close your eyes and fall into a deep sleep.")'},3854:function(e,r){r.Z='function smartPrompt(question) {\r\n    var output = null\r\n    while(output === null || output.trim().length < 1) {\r\n        output = prompt(question)\r\n    }\r\n    return output.trim()\r\n}\r\n\r\nfunction getAction(question, actionList) { \r\n    // Here we give a list of possible actions and retry until the user provides a valid response\r\n    let answer = null\r\n    while (!actionList.includes(answer)) {\r\n        answer = smartPrompt(question + "\\n\\nPossible Actions: " + actionList.join(", ")) // Here we convert the list to a string by joining all of its contents with a comma and a space\r\n    }\r\n    return answer\r\n}\r\n\r\nfunction exploreTheBeach() { // We put our code for the beach in a function so we can re use it later\r\n    while (true) { // We trap the user in this loop until they leave the beach\r\n        const nextAction = getAction("What would you like to do?", ["wait", "explore the beach", "leave the beach"]) // Lists are surrounded by square brackets and separated by commas\r\n        \r\n        if (nextAction === "wait") {\r\n            alert("You wait around. The barking of the gulls and the lapping of the ocean lulls you into a deep sleep")\r\n        } else if (nextAction === "explore the beach") {\r\n            alert("You find a large Oyster shell. Years of bombardment by the waves has left it brittle and chipped, but it\'s curves are still beautiful and pearlescent")\r\n        } else if (nextAction === "leave the beach") { // the only remaining option is to leave the beach so we assume that\r\n            return exploreTheFork() // Now we reach the fork in the path\r\n        }\r\n    }\r\n}\r\n\r\nfunction exploreTheFork() {\r\n    const direction = getAction("As you leave the beach you reach the edge of a divide between a dark forest and a giant cave in the side of the mountain. Which way would you like to go?", ["enter the forest", "enter the cave", "return to the beach"])\r\n    if (direction === "enter the forest") {\r\n        exploreTheForest()\r\n    } else if (direction === "enter the cave") {\r\n        exploreTheCave()\r\n    } else if (direction === "return to the beach") {\r\n        exploreTheBeach()\r\n    }\r\n}\r\n\r\nfunction exploreTheCave() {\r\n    const enter = getAction("You find a dark cave, twisting downwards into the earth. You can hear stalagmites slowly dripping with water below. Would you like to proceed into the cave?", [\'yes\', \'no\']) === \'yes\'\r\n    if (enter) {\r\n        alert("As you enter the cave you realize the rocks were more slippery than you realize. You begin to slip, and fall down a fork in the cave shaft.")\r\n        if (Math.random() > 0.5 ) { // 50% chance\r\n            const choice = getAction("You fall down the left path into a giant pit, but fortunately you land in a massive underground pool. You feel something tugging at your foot but it\'s too dark to see anything. What will you do?", [\'kick it\', \'accept your fate\'])\r\n            if (choice === "kick it") {\r\n                alert("You stun it for a moment, then it pulls you underwater fast, where you drown.")\r\n                alert(\'You lose!\')\r\n            } else if (choice === "accept your fate") {\r\n                const giveShoe = getAction(\'It drags you to the edge of the water. As you get to the shore you begin to make out the shape of some kind of strange sea creature with a mermaid tail, arms like a human, and webbed fingers. "Gruck. Am Gruck." muttered the creature. "H-hello Gruck, I am \' + name +\'" you said, surprised. "Gruck love shoe. Shoe tasty" Gruck begins pulling at your shoe. Let Gruck eat your shoe?\', [\'take your shoe off\', \'yell at Gruck\']) === "take your shoe off"\r\n                if (giveShoe) {\r\n                    alert("You gave Gruck your shoe. Gruck affectionately licks your shoe before quickly devouring it.")\r\n                    alert("There is no exit to the cave, but Gruck seems to have taken a liking to you. Gruck catches you raw fish to eat, and you live together in the cave for the rest of your lives.")\r\n                    alert("You win!")\r\n                } else {\r\n                    alert(\'"GRUCK ANGRY!!!" Gruck knocks you out and eats your shoe and your foot in one big bite. You are left to die in the cave.\')\r\n                    alert(\'You lose!\')\r\n                }\r\n            }\r\n        } else {\r\n            alert("You fall down the right path, and regain your balance. It\'s too steep to get back up, and in front of you is a long tunnel full of cobwebs.")\r\n            const scareIt = getAction("As you continue down the path it becomes too dark to see. You hear something hissing ahead, what will you do now?", [\'approach the creature\', \'scream to scare it away\']) === \'scream to scare it away\'\r\n            if (scareIt) {\r\n                alert("A giant snake jumps out and bites you on the ankle. It\'s terrible poison fills your veins")\r\n                alert("You lose!")\r\n            } else {\r\n                const follow = getAction(\'Just as you get right in front of the hissing noise, the tunnel becomes eerily silent. "Ssssalutations. I am Sylvester the snake." You feel scared, but shakily reply "Hello Sylvester, just so you know I taste terrible" "Silly Elf! I eat the ssspiders that live in this cave. I would have to be very desssperate to eat an Elf." "Phew." you said with a sigh of relief. "If you like I could ssshow you how to get out of here. Will you follow Sylvester?"\', [\'yes\', \'no\']) === "yes"\r\n                if (follow) {\r\n                    alert(\'Sylvester leads you deeper into the cave. It seems to go on forever, and just before you give up hope the tunnel slowly starts to light up. You reach the exit, and you find yourself at the edge of a beautiful city. "Thank you Sylvester" you say "No problem", Sylvester replies with a smirk. You enter the city and find it full of other Elves, and begin your new life.\')\r\n                    alert("You win!")\r\n                } else {\r\n                    alert("You run away from Sylvester the snake. You get lost in an endless maze of twists and turns, and starve to death in the cave.")\r\n                    alert("You lose!")\r\n                }\r\n            }\r\n        }\r\n    } else {\r\n        exploreTheFork()\r\n    }\r\n}\r\n\r\nfunction exploreTheForest() {\r\n    const choice = getAction("You enter a lush forest. You are surrounded by the sounds of birds and a small stream. You can see a stack of smoke billowing through the trees far away. What would you like to do?", [\'investigate the smoke\', \'follow the river\', \'leave the forest\'])\r\n    if (choice === "leave the forest") {\r\n        exploreTheFork()\r\n    } else if (choice === "investigate the smoke") {\r\n        investigateTheSmoke()\r\n    } else if (choice === "follow the river") {\r\n        exploreTheRiver()\r\n    }\r\n}\r\n\r\nfunction investigateTheSmoke() {\r\n    const approach = getAction("You fight your way through the dense thicket, with tree branches and brambles cutting at you. As the smell of smoke fills the air, you come upon a little clearing. Inside there is a figure in a red hood stoking a fire. Will you approach them?", [\'approach\', \'turn back\']) === \'approach\' // Here we have a boolean that says yes or no whether or not they said to approach\r\n    if (approach) {\r\n        alert("As you step into the clearing, the figure rips off their cloak to reveal a very muscular wolf. They quickly attack you, and you die. You have become a nice lunch.")\r\n        alert("You lose!")\r\n    } else {\r\n        exploreTheForest()\r\n    }\r\n}\r\n\r\nfunction exploreTheRiver() {\r\n    const willCross = getAction("You follow the riverbank, but it becomes more windy, and you realize the only way to proceed will be to cross the river. It is roaring and full of fish. Will you cross the river?", [\'cross the river\', \'go back\']) === \'cross the river\'\r\n    if (willCross) {\r\n        alert("You try to cross the river, but it\'s too furious! You get sucked downstream, unable to get to the shore. You ride down the river, and luckily find yourself back at the beach.")\r\n        exploreTheBeach()\r\n    } else {\r\n        exploreTheForest()\r\n    }\r\n}\r\n\r\nvar name = smartPrompt("What is your name adventurer?")\r\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")\r\nexploreTheBeach()'},7603:function(e,r){r.Z="function pickRandomWord(list) {\r\n    // returns a random number between 0 and 1 less than the length of the array (since arrays start at 0) \r\n    return list[Math.floor(Math.random() * list.length)]\r\n}\r\n\r\nconst words = ['tomato', 'banana', 'potato', 'broccoli', 'pickle', 'shoe', 'red', 'phone', 'pencil', 'ball', 'duck', 'dirty', 'shark', 'adventure', 'sandwich', 'game']\r\n\r\nalert(\"Try to remember all the words and enter them back in order one at a time\")\r\nlet wordList = []\r\nwhile (true) { // The true never changes so it loops forever\r\n    const word = pickRandomWord(words) // Add a new word\r\n    wordList.push(word) // This adds the new word to the end of our list\r\n    alert(\"Word Number \" + (wordList.length) + \": \" + word)\r\n    // Now we've shown next word, now we gotta ask what all the words are\r\n    // p stands for position, so we loop over the position of each word\r\n    for (var p = 0; p < wordList.length; p++) {\r\n        const word = wordList[p].trim().toLowerCase()\r\n        const guess = prompt(\"What is word number \" + (p + 1) + \"?\").trim().toLowerCase() // We add 1 to p since our array starts at 0\r\n        if (guess !== word) {\r\n            alert(\"You lose! The word was \" + word + \". Your score was: \" + (wordList.length - 1))\r\n            throw new Error(\"The game was lost\") // This forces our program to exit\r\n        }\r\n    }\r\n}\r\n"},3720:function(e,r){r.Z='function smartPrompt(question) {\r\n    var output = null\r\n    while(output === null || output.trim().length < 1) {\r\n        output = prompt(question)\r\n    }\r\n    return output.trim()\r\n}\r\n  \r\nfunction getAction(question, actionList) { \r\n    // Here we give a list of possible actions and retry until the user provides a valid response\r\n    let answer = null\r\n    while (!actionList.includes(answer)) {\r\n        answer = smartPrompt(question + " - possible actions: " + actionList.join(", ")) // Here we convert the list to a string by joining all of its contents with a comma and a space\r\n    }\r\n    return answer\r\n}\r\n\r\nfunction pickRandomWord(list) {\r\n    // returns a random number between 0 and 1 less than the length of the array (since arrays start at 0) \r\n    return list[Math.floor(Math.random() * list.length)]\r\n}\r\n\r\nconst choices = [\'rock\', \'paper\', \'scissors\']\r\n\r\nfunction pickWinner(choice1, choice2) {\r\n    choice1 = choices.indexOf(choice1);\r\n    choice2 = choices.indexOf(choice2);\r\n    if (choice1 == choice2) {\r\n        return 2; // Two means a tie\r\n    }\r\n    if (choice1 == choices.length - 1 && choice2 == 0) {\r\n        return 1; // One means the second person won\r\n    }\r\n    if (choice2 == choices.length - 1 && choice1 == 0) {\r\n        return 0; // Zero means the first person won\r\n    }\r\n    if (choice1 > choice2) {\r\n        return 0;\r\n    } else {\r\n        return 1;\r\n    }\r\n}\r\n\r\nconst playerChoice = getAction("What do you pick? Rock, paper, or scissors?", choices)\r\nconst computerChoice = pickRandomWord(choices)\r\n\r\nconst winner = pickWinner(playerChoice, computerChoice)\r\nif (winner === 0) {\r\n    alert("You won! The computer chose " + computerChoice)\r\n} else if (winner === 1) {\r\n    alert("You lose! The computer chose " + computerChoice)\r\n} else {\r\n    alert("It was a tie! The computer chose " + computerChoice)\r\n}'}}]);
//# sourceMappingURL=component---src-pages-playground-js-20c115206ec4b50670cf.js.map