"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[413],{7488:function(e,t,n){var a=n(7487),l=n(7294);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"A boolean is something that is either true or false, like a yes or no question"},e),e.children||"boolean")}},9964:function(e,t,n){var a=n(7487),l=n(7294);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"An expression is a piece of code that can be reduced to a single value, like a math equation"},e),e.children||"expression")}},1487:function(e,t,n){var a=n(7487),l=n(7294);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"Your input is data that goes into your logic model"},e),e.children||"input")}},7412:function(e,t,n){var a=n(7487),l=n(7294);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"The JavaScript interpreter is the software that runs your code, like the engine"},e),e.children||"interpreter")}},5185:function(e,t,n){var a=n(7487),l=n(7294);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"A coding operator is a tool in the language that inputs and outputs data"},e),e.children||"operator")}},7354:function(e,t,n){var a=n(7487),l=n(7294);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"A string is a piece of human text your computer knows isn't code, but it can still be used in your code"},e),e.children||"string")}},6839:function(e,t,n){var a=n(7487),l=n(7294);t.Z=function(e){return l.createElement(a.Z,Object.assign({definition:"A variable holds any kind of data you want. They have a label and value."},e),e.children||"variable")}},71:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(7294),r=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,a.useState)(!1),n=t[0],i=t[1],s=e,u=s.url,c=s.query,o=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof o||null===o||Object.keys(o).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof u)return console.warn(new Error("Expected a video url")),null;if(o.autoplay=1,!r.test(u))throw new Error("This url is invalid");var m="https://www.youtube.com/embed/"+u+"?"+Object.entries(o).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),d=Object.assign({},e);return delete d.url,delete d.children,l.createElement("div",Object.assign({},d,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:l.createElement(a.Fragment,null,l.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+u+"/hqdefault.jpg",alt:"Youtube Video"}),l.createElement("span",null,"▶")),l.createElement("iframe",{className:n?null:"YTVideo-module--disabled--HEa7g",src:n?m:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},1832:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(8851),l=n(7488),r=n(9964),i=n(1487),s=n(7412),u=n(7487),c=n(7294),o=function(e){return c.createElement(u.Z,Object.assign({definition:"JS is short for JavaScript, the coding language"},e),e.children||"JS")},m=n(5185),d=n(4257),h=n(7354),E=n(6839),p=n(2472),v=n(71),f=n(5414),b=n(7294),g=function(){return b.createElement("div",{className:"primitives-module--primitives--i5iJX"},b.createElement(f.q,null,b.createElement("title",null,"📊 Data Types")),b.createElement("h2",null,"#3.1 📊 Basic Data Types"),b.createElement("br",null),b.createElement("span",{className:"introCard"},b.createElement(v.Z,{url:"_4TPlwwHM8Q",thumbnail:"/images/blender-horror.jpg"}),b.createElement("span",null,"You can read more"," ",b.createElement("a",{target:"_blank",href:"https://www.aleksandrhovhannisyan.com/blog/binary-for-beginners/"},"here")," ","if you'd like a more in-depth explanation about how binary values are converted into more complex data types.")),b.createElement("br",null),b.createElement("p",null,"In this section we will upgrade from working with just ",b.createElement(l.Z,null)," logic to writing working JavaScript! Primitives are the basic kinds of data in JavaScript. Here are the basic primitives:"),b.createElement("ul",{className:"primitives-module--primitivesList--+RJSn"},b.createElement("li",null,b.createElement(l.Z,null,"Boolean")),b.createElement("li",null,"Number"),b.createElement("li",null,b.createElement(h.Z,null,"String")),b.createElement("li",null,"undefined"),b.createElement("li",null,"null")),b.createElement("p",null,"I will now detail each type of data and their ",b.createElement(m.Z,null,"operators"),", then in the next page I will provide more examples of how they can be used together. Additionally, you can edit the ",b.createElement(i.Z,null)," of all the code examples below. If your syntax is invalid (this means your coding grammar is incorrect) you will receive an error instead the ",b.createElement(d.Z,null)," you expected because the ",b.createElement(s.Z,null,"JS interpreter")," will become confused.",b.createElement("br",null),b.createElement("br",null),"The left side of the editor is the code we give to the ",b.createElement(s.Z,null),', and the right side is the output it gives us. We are currently in the "',b.createElement(r.Z,null,"Expression")," ",'Evaluator" mode, meaning that it will take whatever our code is on the left side and reduce it to a single value on the right side.'),b.createElement("div",{className:"type boolean"},b.createElement("h2",null,"Booleans"),b.createElement("p",null,"JavaScript has built in support for ",b.createElement(l.Z,null,"booleans"),"."),b.createElement(a.Z,{value:"true",className:"mini"}),b.createElement(a.Z,{value:"false",className:"mini"}),b.createElement("h3",null,"Or Operations"),b.createElement("p",null,"The or ",b.createElement(m.Z,null),' is written as "||" in JavaScript, and it is used to compare two'," ",b.createElement(l.Z,null,"booleans"),". It returns true if either of the"," ",b.createElement(l.Z,null,"booleans")," beside it are true, otherwise it returns false."),b.createElement(a.Z,{value:"true || false",className:"mini"}),b.createElement(a.Z,{value:"false || true",className:"mini"}),b.createElement(a.Z,{value:"false || false",className:"mini"}),b.createElement("h3",null,"Not Operations"),b.createElement("p",null,"The not ",b.createElement(m.Z,null),' is written as "!" in JavaScript, and it returns the opposite.'),b.createElement(a.Z,{value:"!true",className:"mini"}),b.createElement(a.Z,{value:"!false",className:"mini"}),b.createElement("h3",null,"And Operations"),b.createElement("p",null,"The and ",b.createElement(m.Z,null),' is written as "&&" in JavaScript. It returns true if both of the'," ",b.createElement(l.Z,null,"booleans")," next to it are true, otherwise it returns false."),b.createElement(a.Z,{value:"true && true",className:"mini"}),b.createElement(a.Z,{value:"true && false",className:"mini"}),b.createElement(a.Z,{value:"false && false",className:"mini"})),b.createElement("div",{className:"type numbers"},b.createElement("h2",null,"Numbers"),b.createElement("p",null,"Numbers can be integers (whole numbers like 33) or floats (meaning decimals like 45.512). Some basic operations are adding, multiplication, division, and subtraction. Besides changing the numbers you can also compare them (using symbols like >, <, or ≥) in order to ",b.createElement(d.Z,null)," ",b.createElement(l.Z,null)," values."),b.createElement("h3",null,"Addition/Subtraction"),b.createElement(a.Z,{value:"12 + 12",className:"mini"}),b.createElement(a.Z,{value:"30 - 12",className:"mini"}),b.createElement("h3",null,"Greater than/Less than"),b.createElement("p",null,"The greater than and less than ",b.createElement(m.Z,null,"operators")," return ",b.createElement(l.Z,null)," values."),b.createElement(a.Z,{value:"12 > 10",className:"mini"}),b.createElement(a.Z,{value:"12 < 10",className:"mini"}),b.createElement(a.Z,{value:"5 >= 5",className:"mini"}),b.createElement(a.Z,{value:"6 <= 5",className:"mini"}),b.createElement("h3",null,"Multiply/Divide"),b.createElement(a.Z,{value:"32 * 11",className:"mini"}),b.createElement(a.Z,{value:"4 / 12",className:"mini"})),b.createElement("div",{className:"type strings"},b.createElement("h2",null,"Strings"),b.createElement("p",null,b.createElement(h.Z,null,"Strings")," are collections of text (like someones name, an address, etc). They are written by surrounding the text in single or double quotes."),b.createElement(a.Z,{value:'"I like chocolate milk"',className:"mini"}),b.createElement(a.Z,{value:"'my namea borat'",className:"mini"}),b.createElement("p",null,"They can also be added together (they are simply squished together, not added like numbers)"),b.createElement(a.Z,{value:"'beep' + 'bop'",className:"mini"}),b.createElement(a.Z,{value:"'9' + '10'",className:"mini"})),b.createElement("div",{className:"type undefined"},b.createElement("h2",null,"undefined"),b.createElement("p",null,"The value undefined is used to represent a value that has not been assigned anything else. It's basically the universal placeholder value. Undefined is the value given to"," ",b.createElement(E.Z,null,"variables")," if we don't given them a value ourselves."),b.createElement(a.Z,{value:"undefined",className:"mini"})),b.createElement("div",{className:"type null"},b.createElement("h2",null,"null"),b.createElement("p",null,'The value null is used to represent the value "nothing". It\'s different from undefined because it means the coder intentionally made it nothing rather than it just being a missing value.'),b.createElement(a.Z,{value:"null",className:"mini"})),b.createElement("div",{className:"equality"},b.createElement("h2",null,"Equality"),b.createElement("p",null,"To check whether two values are exactly the same we can use the strict equality"," ",b.createElement(m.Z,null)," ",'"==="'),b.createElement(a.Z,{value:"1 === 1",className:"mini"}),b.createElement(a.Z,{value:'1 === "1"',className:"mini"}),b.createElement(a.Z,{value:"1 === 1.1",className:"mini"})),b.createElement("br",null),b.createElement("p",null,"In the next section we'll be using these primitive values so you can see a little bit more why they are useful. You can read in greater detail about ",b.createElement(o,null,"JS's")," data types"," ",b.createElement("a",{target:"_blank",href:"https://javascript.info/types"},"here")),b.createElement(p.Z,{to:"/coding/essential-tools"},b.createElement("a",{className:"next"},"Next: #3.2 Essential Tools")))}}}]);
//# sourceMappingURL=component---src-pages-coding-primitives-en-js-817f029bbf2c9baccd88.js.map