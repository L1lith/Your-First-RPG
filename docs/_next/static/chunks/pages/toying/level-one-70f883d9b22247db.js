(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{7705:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(1451),o=n(4942),s=n(5671),i=n(3144),a=n(7326),l=n(2531),c=n(245),u=n(1120),h=n(7294),d=n(6359);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1)+e)},m=n(2102),p=n.n(m),b=n(1042),v=n.n(b),g=n(3931),j=n.n(g);function x(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.filter((function(){return Math.random()>.5}));n.length<t&&e.length>n.length;){var r=e.filter((function(e){return!n.includes(e)})),o=r[f(0,r.length-1)];n.push(o)}return n}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["red","green","blue"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["square","triangle"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.allowNots,o=void 0===r||r,s=n.minColors,i=void 0===s?1:s,a=n.minShapes,l=void 0===a?1:a,c=n.notColors,u=void 0!==c&&c,h=n.notShapes,d=void 0!==h&&h,f=x(e,i),m=x(t,l);!0===d&&m.length>=t.length&&(m=m.slice(0,t.length-1)),!0===o&&m.length<t.length-1&&!1!==d&&(!0===d||Math.random()>.5)&&(m=t.filter((function(e){return!m.includes(e)})),d=!0),!0===u&&f.length>=e.length&&(f=f.slice(0,t.length-1)),!0===o&&f.length<e.length-1&&!1!==u&&(!0===u||Math.random()>.5)&&(f=e.filter((function(e){return!f.includes(e)})),u=!0);var p=(u?"not (":"")+f.map((function(e){return j().name(e)[1]})).join(" or ")+(u?")":""),b=(d?"not (":"")+m.join(" or ")+(d?")":"");return{allowedColors:f,allowedShapes:m,notShapes:d,notColors:u,colorsDescription:p,shapesDescription:b,sourceCode:"function validate(chosenColor, chosenShape, rules) { // Returns true or false depending on whether the button the user picked was correct\n  const colorInRules = ".concat(f.map((function(e){return'chosenColor === "'.concat(e,'"')})).join(" || "),"\n  ").concat(u?"if (colorInRules) {\n  return false // That color was one of the banned colors":"if (not(colorInRules)) {\n  return false // That color wasn't one of the allowed colors"," else {\n    \n  }\n  return true // Nothing was wrong with it so we say it's valid :)"),validate:function(e,t){var n=f.includes(e);if(u==n)return!1;var r=m.includes(t);return d!=r}}},O=n(5893);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var P={_:{size:{_:Number,min:1,max:20,finite:!0,integer:!0},width:{_:Number,min:1,max:20,finite:!0,integer:!0},height:{_:Number,min:1,max:20,finite:!0,integer:!0},colors:[{_:String,trimmed:!0}],shapes:[{_:String,trimmed:!0}],rules:Object,title:String,rulesOptions:Object},allOptional:!0},S=["#ffccfb","#00ff00","#0080b3"],Z=["\u25a2","\u29cd","\u25cb"];function E(e){var t=e.cell,n=e.width,r=e.height,o=e.x,s=e.y,i=e.activateCell,a=e.index,l=t.color,c=t.shape,u=t.active,h=t.failed,d=0===o?"left":o>=n-1?"right":"middle",f=0===s?"top":s>=r-1?"bottom":"middle";return(0,O.jsx)("span",{className:p().cell+(!0===h?" failed":""),vertical:f,horizontal:d,style:{backgroundColor:l,width:100/n+"%",height:100/r+"%"},onClick:function(){i(t,a)},disabled:!0!==u,children:(0,O.jsx)("span",{className:p().inner,children:c})})}var D=function(e){(0,l.Z)(n,e);var t=N(n);function n(e){var r;return(0,s.Z)(this,n),r=t.call(this,e),(0,d.Nw)(e,P),v()((0,a.Z)(r)),r.state=_(_({},r.generateGameState(r.props)),{},{gameState:"ongoing"}),r}return(0,i.Z)(n,[{key:"generateGameState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.colors||S,n=e.shapes||Z;if(e.hasOwnProperty("size")&&(e.hasOwnProperty("width")||e.hasOwnProperty("height")))throw new Error("Must supply either size or w/h dimensions not both");for(var r=e.size||e.width||3,o=e.height||e.width||e.size||3,s=e.rules||y(t,n,this.props.rulesOptions),i=[];this.getRemainingCells(i,s).length<1;)for(var a=0,l=r*o;a<l;a++)i[a]={color:t[f(0,t.length-1)],shape:n[f(0,n.length-1)],active:!0};return{width:r,height:o,board:i,colors:t,shapes:n,rules:s}}},{key:"canActivate",value:function(e,t){t=t||this.state.rules;var n=e.color,r=e.shape;return t.validate(n,r)}},{key:"reset",value:function(){this.setState(_(_({},this.generateGameState(this.props)),{},{gameState:"ongoing"}))}},{key:"lose",value:function(){this.setState({gameState:"lost"})}},{key:"getRemainingCells",value:function(e,t){var n=this;return(e||this.state.board).filter((function(e){return n.canActivate(e,t)})).filter((function(e){return!0===e.active}))}},{key:"activateCell",value:function(e,t){if("ongoing"===this.state.gameState&&!0===e.active){var n=!0!==this.canActivate(e),o=(0,r.Z)(this.state.board),s=_({},e);s.active=!1,n&&(s.failed=!0),o[t]=s,this.setState({board:o}),n?this.lose():this.getRemainingCells().length<2&&this.win()}}},{key:"win",value:function(){this.setState({gameState:"won"})}},{key:"render",value:function(){var e=this.state.rules.colorsDescription.startsWith("not"),t=this.state.rules.shapesDescription.startsWith("not");return(0,O.jsxs)("div",{className:p()["boolean-game"],children:[(0,O.jsxs)("h2",{className:p().title,children:["Matching Rules",this.props.hasOwnProperty("title")?" - "+this.props.title.trim():null]}),(0,O.jsx)("noscript",{children:(0,O.jsx)("span",{className:p().jserror,children:"JavaScript is required to play this game."})}),(0,O.jsxs)("div",{className:p().rules,children:[(0,O.jsx)("h2",{children:"Color Palette"}),(0,O.jsx)("ul",{className:p()["color-list"],children:this.state.colors.map((function(e,t){return(0,O.jsx)("li",{children:(0,O.jsx)("span",{className:p().color,style:{backgroundColor:e},children:j().name(e)[1]})},t)}))}),(0,O.jsx)("h2",{children:"Rules"}),(e?"":"(")+this.state.rules.colorsDescription+(e?"":")")+" and "+(t?"":"(")+this.state.rules.shapesDescription+(t?"":")"),null]}),"ongoing"===this.state.gameState?null:"won"===this.state.gameState?(0,O.jsx)("span",{className:[p().result,p().won].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You Won!"}):"lost"===this.state.gameState?(0,O.jsx)("span",{className:[p().result,p().lost].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You lost \u3020_\u3020"}):"UNEXPECTED STATE: "+this.state.gameState,"ongoing"!==this.state.gameState?(0,O.jsx)("button",{className:p().replay,onClick:this.reset,children:"Replay"}):null,this.renderBoard()]})}},{key:"renderBoard",value:function(){var e=this,t=this.state,n=t.width,r=t.height;return(0,O.jsx)("div",{className:p().board,children:this.state.board.map((function(t,o){var s=Math.floor(o/n),i=o%n;return(0,O.jsx)(E,{width:n,height:r,x:i,y:s,activateCell:e.activateCell,index:o,cell:t},o)}))})}}]),n}(h.Component)},7189:function(e,t,n){"use strict";var r=n(7705),o=n(5893);t.Z=function(){return(0,o.jsx)(r.Z,{title:"Level 1",size:3,rulesOptions:{allowNots:!1,minColors:2,minShapes:2}})}},8253:function(e,t,n){"use strict";var r=n(4942),o=n(6120),s=n(5893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return(0,s.jsx)(o.Z,a(a({definition:"A boolean is something that is either true or false, like a yes or no question"},e),{},{children:e.children||"boolean"}))}},5387:function(e,t,n){"use strict";var r=n(4942),o=n(6120),s=n(5893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return(0,s.jsx)(o.Z,a(a({definition:"An expression is a piece of code that can be reduced to a single value, like a math equation"},e),{},{children:e.children||"expression"}))}},4520:function(e,t,n){"use strict";var r=n(4942),o=n(6120),s=n(5893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){return(0,s.jsx)(o.Z,a(a({definition:"A coding operator is a tool in the language that inputs and outputs data"},e),{},{children:e.children||"operator"}))}},6120:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(6854),o=n(3531),s=n.n(o),i=n(7294);var a=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var l=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null),o=function(){return n(!0)},s=function(){return n(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",s),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",s)}}),[r.current]),[r,t]};function c(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw s}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(Boolean);return r.length?0===r.length?r[0]:function(e){var t,n=c(r);try{for(n.s();!(t=n.n()).done;){var o=t.value;"function"===typeof o?o(e):o&&(o.current=e)}}catch(s){n.e(s)}finally{n.f()}}:null};var d=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),t=e[0],n=e[1],o=l(),s=(0,r.Z)(o,2),c=s[0],u=s[1],d=a(),f=(0,r.Z)(d,2),m=f[0],p=f[1],b=u||p;return b!==t&&n(b),[h(c,m),t]},f=n(5893),m=["up","left","down","right"];var p=function(e){var t=d(),n=(0,r.Z)(t,2),o=n[0],i=n[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");var a=e.hasOwnProperty("direction")?e.direction:"up";if(!m.includes(a))throw new Error("Invalid Direction Specified");return(0,f.jsxs)("span",{className:s()["hover-definition"],ref:o,children:[i?(0,f.jsx)("span",{className:s().definition+" "+s()[a],children:e.definition}):null,e.children]})}},9150:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7189),o=n(3966),s=n.n(o),i=n(2962),a=n(5885),l=n.n(a),c=n(5893),u=function(){return(0,c.jsxs)("table",{className:l()["boolean-ops"],children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{className:"table-member"}),(0,c.jsx)("th",{className:"table-member",children:"A"}),(0,c.jsx)("th",{className:"table-member",children:"B"}),(0,c.jsx)("th",{className:"table-member",children:"A & B (AND)"}),(0,c.jsx)("th",{className:"table-member",children:"A || B (OR)"}),(0,c.jsx)("th",{className:"table-member",children:"NOT A"}),(0,c.jsx)("th",{className:"table-member",children:"NOT B"})]})}),(0,c.jsxs)("tbody",{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"table-member",children:"#1"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"false"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"table-member",children:"#2"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"true"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"table-member",children:"#3"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"true"})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{className:"table-member",children:"#4"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"false"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"true"}),(0,c.jsx)("td",{className:"table-member",children:"false"})]})]})]})},h=n(4520),d=n(8253),f=n(5387),m=function(){return(0,c.jsxs)("div",{className:"level-1",children:[(0,c.jsx)(i.PB,{title:'\ud83d\udcac "Or" Expressions'}),(0,c.jsx)("h2",{children:'#2.1 \ud83d\udcac Basic "Or" Expressions'}),(0,c.jsx)("br",{}),(0,c.jsxs)("span",{className:"intro-card",children:[(0,c.jsx)(u,{}),"Here you can see a chart of the basic boolean ",(0,c.jsx)(h.Z,{children:"operations"})," (& means AND, || means OR)"]}),(0,c.jsxs)("p",{children:["In this section we will be playing the Matching Rules game in order to learn about"," ",(0,c.jsx)(d.Z,{})," logic. ",(0,c.jsx)(d.Z,{children:"Boolean"})," logic is the fundamental language that both electronic circuitry, and computers themselves are made out of, and it happens to be a great tool for learning how we talk to computers.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)(d.Z,{children:"Boolean"})," logic contains a set of ",(0,c.jsx)(f.Z,{children:"expressions"})," ","(kind of like coding language) that allow us to perform basic ",(0,c.jsx)(h.Z,{children:"operations"})," ","on data. True or false statements (boolean values like yes or no) are the main type of"," ",(0,c.jsx)(f.Z,{children:"expressions"})," handled with ",(0,c.jsx)(d.Z,{})," logic. This means we can ask the computer yes or no questions using code to tell it what to do."]}),(0,c.jsx)("br",{}),(0,c.jsx)("h2",{children:'The "Or" Operator'}),(0,c.jsxs)("p",{children:["Or is a logical ",(0,c.jsx)(h.Z,{})," that will only output true if at least one of it's inputs are true. In the first level of the Matching Game we will experiment with the Or ",(0,c.jsx)(h.Z,{}),". Choose only the tiles whose colors and shapes are allowed to win."]}),(0,c.jsx)(r.Z,{}),(0,c.jsxs)("p",{children:["Once you've played the first level of the Matching Game a few times and are confident you understand OR continue on to the next section to learn about NOT"," ",(0,c.jsx)(f.Z,{children:"expressions"})," \ud83d\ude0a"]}),(0,c.jsx)(s(),{href:"/toying/level-two",children:(0,c.jsx)("a",{className:"next",children:'Next: #2.2 \ud83d\udeab Whats "Not" Allowed'})})]})}},2592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toying/level-one",function(){return n(9150)}])},2102:function(e){e.exports={"boolean-game":"BooleanGame_boolean-game__zA4On","color-list":"BooleanGame_color-list__mCXWg",color:"BooleanGame_color__U95A3",rules:"BooleanGame_rules__J5Ikc",jserror:"BooleanGame_jserror__2MTXP",result:"BooleanGame_result__oP4gW",won:"BooleanGame_won__hpI8C",lost:"BooleanGame_lost__21nx0",replay:"BooleanGame_replay__x0PCP",board:"BooleanGame_board__OlH_0",cell:"BooleanGame_cell__O9znJ",failed:"BooleanGame_failed___8ZXM",inner:"BooleanGame_inner__dYDb_"}},5885:function(e){e.exports={"boolean-ops":"BooleanOps_boolean-ops__isG7z","table-member":"BooleanOps_table-member__OMYrD"}},3531:function(e){e.exports={"hover-definition":"HoverDefinition_hover-definition__2OWz5",definition:"HoverDefinition_definition__rfeSG",up:"HoverDefinition_up__7SpBV",bottom:"HoverDefinition_bottom__p5K6Z",left:"HoverDefinition_left__YKNFv",right:"HoverDefinition_right___v6br"}}},function(e){e.O(0,[925,774,888,179],(function(){return t=2592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);