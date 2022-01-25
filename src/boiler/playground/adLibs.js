const verb = prompt("Pick a verb")
const verb2 = prompt("Pick another verb")
const adjective = prompt("Pick an adjective")
const adjective2 = prompt("Pick another adjective")
const creature = prompt("Pick a creature")
const creatureName = prompt("What is the name of the " + creature + "?")
const noun = prompt("Pick a noun")
const noun2 = prompt("Pick another noun")

// We can use the ` symbol to make strings that let us fill them in automatically like a template
alert(`There once was a ${creature} called ${creatureName} that lived in a ${noun}. ${creatureName} was a very ${adjective} ${creature}. One day ${creatureName} was walking down the street when they saw a ${noun2}. It was so ${adjective2} that everyone died. The end.`)
