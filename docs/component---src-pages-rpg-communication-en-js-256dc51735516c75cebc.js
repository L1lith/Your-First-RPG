"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[6121],{7681:function(e,t,n){var a=n(7487),o=n(5007);t.Z=function(e){return o.createElement(a.Z,Object.assign({definition:"A boolean is something that is either true or false, like a yes or no question"},e),e.children||"boolean")}},1444:function(e,t,n){var a=n(7487),o=n(5007);t.Z=function(e){return o.createElement(a.Z,Object.assign({definition:"An expression is a piece of code that can be reduced to a single value, like a math equation"},e),e.children||"expression")}},1392:function(e,t,n){var a=n(7487),o=n(5007);t.Z=function(e){return o.createElement(a.Z,Object.assign({definition:"A function is a re-usable piece of code with it's own set of inputs, rules, and outputs. It's like a miniature logic model that saves us time!"},e),e.children||"function")}},3877:function(e,t,n){var a=n(7487),o=n(5007);t.Z=function(e){return o.createElement(a.Z,Object.assign({definition:"RPG stand for Role Playing Game, which is a kind of adventure game"},e),e.children||"RPG")}},3408:function(e,t,n){var a=n(7487),o=n(5007);t.Z=function(e){return o.createElement(a.Z,Object.assign({definition:"A string is a piece of human text your computer knows isn't code, but it can still be used in your code"},e),e.children||"string")}},4963:function(e,t,n){var a=n(7487),o=n(5007);t.Z=function(e){return o.createElement(a.Z,Object.assign({definition:"A variable holds any kind of data you want. They have a label and value."},e),e.children||"variable")}},71:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5007),o=n(5007),r=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var l=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,a.useState)(!1),n=t[0],l=t[1],i=e,s=i.url,u=i.query,c=void 0===u?{}:u;if(e.hasOwnProperty("query")&&("object"!=typeof c||null===c||Object.keys(c).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof s)return console.warn(new Error("Expected a video url")),null;if(c.autoplay=1,!r.test(s))throw new Error("This url is invalid");var m="https://www.youtube.com/embed/"+s+"?"+Object.entries(c).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),h=Object.assign({},e);return delete h.url,delete h.children,o.createElement("div",Object.assign({},h,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(a.Fragment,null,o.createElement("img",{onClick:function(){return l(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+s+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:"YTVideo-module--popout--baHpn"+(n?"":" YTVideo-module--disabled--HEa7g"),src:n?m:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},2876:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(8851),o=n(7681),r=n(1444),l=n(1392),i=n(3877),s=n(7487),u=n(5007),c=function(e){return u.createElement(s.Z,Object.assign({definition:"The scope is the size of the features and tasks in a project"},e),e.children||"scope")},m=n(3408),h=n(4963),d=n(2472),p=n(71),f=n(7043),g=n(5414),w=n(5007);function y(){return w.createElement(w.Fragment,null,w.createElement(g.q,null,w.createElement("title",null,"🗣️ Talking to the Player"),w.createElement("meta",{name:"description",content:"Learn how to communicate with the player of your game"})),w.createElement("h2",null,"#4.1 🗣️ Talking to the Player"),w.createElement("span",{className:"introCard"},w.createElement(p.Z,{url:"7yeA7a0uS3A",query:{start:29},thumbnail:"/images/heman-title.jpg"}),"Half-dragon half-tiger sold separately"),w.createElement("p",null,"Now that we've laid out the basics, let's apply ourselves and have some fun 😊 Before you build your ",w.createElement(i.Z,null)," we first must learn how to get input and send messages to the player. There's no use in coding an adventure if there's no way to interact with it."),w.createElement("div",{className:"comments"},w.createElement("h2",null,"Comments"),w.createElement("p",null,'Comments allow us to write things in our code that is purely for notation (like writing notes in your math). Anything in the same line that comes after "//" will not be used while your code is running.',w.createElement("br",null),w.createElement("br",null),"We can use comments for things like add a TODO message so you can come back to add something later, or we can use it to help explain how our code works."),w.createElement(a.Z,{value:"console.log(4 + 6)\n// This part doesn't have to be valid JavaScript code",consoleMode:!0,disableAutoRun:!0,className:"mini"})),w.createElement("div",{className:"js-io"},w.createElement("h2",null,"Input/Output for Communicating with the Player"),w.createElement("p",null,"While modifying the content of a webpage (done via HTML) is outside of the ",w.createElement(c,null)," of this project, we can still communicate with the player from inside JavaScript! We can do this using the prompt and alert functions. From now on if you wish to run the code in the editors"," ",w.createElement("span",{className:"bold"},"you must press the ",w.createElement("span",{className:f.h},"▶")," button")," ","first. Try running the examples below:"),w.createElement("h3",null,"Output: Alert"),w.createElement(a.Z,{value:"alert('Your princess is in another castle')",consoleMode:!0,disableAutoRun:!0,className:"mini"}),w.createElement("h3",null,"Input: Prompt"),w.createElement("p",null,"We can ask a user for input and save it to a ",w.createElement(h.Z,null)," to use it later"),w.createElement(a.Z,{value:"var name = prompt('What is your name?')\nalert('Wishing ' + name + ' good fortune 💰')",consoleMode:!0,disableAutoRun:!0,className:"mini"}),w.createElement("p",null,"Note: In normal web development the use of the alert and prompt functions is discouraged. This is because creating dialogue inside of the page (using HTML) rather than inside of the browsers pop-up boxes is less jarring.")),w.createElement("div",{className:"flow-control"},w.createElement("h2",null,"Flow Control"),w.createElement("p",null,"Flow control allows us to establish branching choices in our logic model using"," ",w.createElement(o.Z,null),' logic. You might say something along the lines of "if x is true then do y, or else do z". It allows us to create flexible code that chooses the appropriate path to take in order to properly complete the task. You can read more about flow control'," ",w.createElement("a",{target:"_blank",href:"https://exploringjs.com/impatient-js/ch_control-flow.html"},"here.")),w.createElement("h3",null,"if/else"),w.createElement("p",null,"You can use combinations of if and else to make powerful decision making models using"," ",w.createElement(r.Z,null,"expressions")," that return ",w.createElement(o.Z,null,"booleans")," to ask yes or no questions. Here we have an example of doing something based on the user's input"),w.createElement(a.Z,{value:'// Notice that any spaces or uppercases will cause the equality to fail, so "YES" will give the wrong result\nif(prompt("Do you like oatmeal raisin cookies?") === "yes") { \n    alert("You have good taste in 🍪")\n} else { // They entered anything besides exactly "yes"\n    alert("Maybe 🍪 just aren\'t your thing?")\n}',consoleMode:!0,disableAutoRun:!0,className:"short"}),w.createElement("p",null,"We can also chain multiple ifs together to have multiple outcomes"),w.createElement(a.Z,{value:'var favoriteCookie = prompt("What\'s your favorite kind of cookie?")\nif(favoriteCookie === "oatmeal" || favoriteCookie === "oatmeal raisin") { \n    alert("You have good taste in 🍪")\n} else if (favoriteCookie === "chocolate chip") {\n    alert("Chocolate chip is the second best cookie so that\'s understandable")\n} else {\n    alert("Maybe 🍪 just aren\'t your thing?")\n}',consoleMode:!0,disableAutoRun:!0,className:"short"}),w.createElement("h3",null,"while"),w.createElement("p",null,"You can use the while loop to keep doing something until the ",w.createElement(o.Z,null)," ",w.createElement(r.Z,null)," ","returns false. Look here how we can repeatedly ask the user for their name until they return a valid name (if a name is missing it is invalid, if the user exits the prompt the prompt it returns null so we must retry)."),w.createElement(a.Z,{disableAutoRun:!0,consoleMode:!0,value:'var name\nwhile(!name) {\n    name = prompt("What is your name adventurer?")\n}\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")',className:"short"})),w.createElement("div",null,w.createElement("h2",null,"Better text Handling"),w.createElement("p",null,"I've created this ",w.createElement(l.Z,null)," to help you ensure you receive valid input. Strings provide .trim(...) ",w.createElement(l.Z,null),' to remove all spaces from the beginning and end. Here we check that the trimmed string is at least 1 character long (meaning that there\'s at least 1 non-space character). Then we return the trimmed string as we probably don\'t care about the spaces and it can make it harder to match strings later (for example "yes " === "yes" will return false, but if we trim the text we don\'t have this problem)'),w.createElement(a.Z,{disableAutoRun:!0,consoleMode:!0,value:'function smartPrompt(question) {\n    var output = null\n    // While will keep running the code inside it over and over until the expression evaluates to false\n    while(output === null || output.trim().length < 1) { \n        output = prompt(question)\n    }\n    return output.trim()\n}\n\nvar name = smartPrompt("What is your name adventurer?")\n\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")'}),w.createElement("p",null,"Here we combine the .toLowerCase ",w.createElement(l.Z,null)," (you can use it to make any ",w.createElement(m.Z,null)," ","lowercase) and our smartPrompt ",w.createElement(l.Z,null),". Notice how when we run it it still recognizes a yes input even if it has whitespace around it or isn't lowercase."),w.createElement(a.Z,{value:'function smartPrompt(question) {\n    var output = null\n    while(output === null || output.trim().length < 1) {\n        output = prompt(question)\n    }\n    return output.trim()\n}\n// Now it accepts "  yes  ", "YES", "  yEs   ", etcetera\nif(smartPrompt("Do you like oatmeal raisin cookies?").toLowerCase() === "yes") { \n    alert("You have good taste in 🍪")\n} else {\n    alert("Maybe 🍪 just aren\'t your thing?")\n}',consoleMode:!0,disableAutoRun:!0})),w.createElement(d.Z,{className:"next",to:"/rpg/publishing"},"Next: #4.2 🏆 Sharing your RPG"))}},7043:function(e,t,n){n.d(t,{h:function(){return a}});var a="communication-module--play--RhN+L"}}]);
//# sourceMappingURL=component---src-pages-rpg-communication-en-js-256dc51735516c75cebc.js.map