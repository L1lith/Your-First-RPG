(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{1914:function(e,t,n){"use strict";var r=n(5671),o=n(3144),i=n(7326),a=n(2531),s=n(245),l=n(1120),c=n(4942),u=n(7294),h=n(5893);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=n(4981).ZP;return n(4579),n(2105),(0,h.jsx)(t,d({},e))},v=function(e){(0,a.Z)(n,e);var t=f(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return e=t.call.apply(t,[this].concat(a)),(0,c.Z)((0,i.Z)(e),"state",{mounted:!1}),(0,c.Z)((0,i.Z)(e),"render",(function(){return e.state.mounted?(0,h.jsx)(g,d({showGutter:!0===e.props.showGutter},e.props)):null})),e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}}]),n}(u.Component);t.Z=v},54:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(1451),o=n(4942),i=n(5671),a=n(3144),s=n(7326),l=n(2531),c=n(245),u=n(1120),h=n(7294),f=n(6359);var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1)+e)},d=n(347),g=n.n(d),v=n(1042),m=n.n(v),y=n(3931),b=n.n(y);function w(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.filter((function(){return Math.random()>.5}));n.length<t&&e.length>n.length;){var r=e.filter((function(e){return!n.includes(e)})),o=r[p(0,r.length-1)];n.push(o)}return n}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["red","green","blue"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["square","triangle"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.allowNots,o=void 0===r||r,i=n.minColors,a=void 0===i?1:i,s=n.minShapes,l=void 0===s?1:s,c=n.notColors,u=n.notShapes,h=w(e,a),f=w(t,l);!0===u&&f.length>=t.length&&(f=f.slice(0,t.length-1)),!0===o&&f.length<t.length-1&&!1!==u&&(!0===u||Math.random()>.5)&&(f=t.filter((function(e){return!f.includes(e)})),u=!0),!0===c&&h.length>=e.length&&(h=h.slice(0,t.length-1)),!0===o&&h.length<e.length-1&&!1!==c&&(!0===c||Math.random()>.5)&&(h=e.filter((function(e){return!h.includes(e)})),c=!0);var p=(c?"not (":"")+h.map((function(e){return b().name(e)[1]})).join(" or ")+(c?")":""),d=(u?"not (":"")+f.join(" or ")+(u?")":"");return{allowedColors:h,allowedShapes:f,notShapes:u,notColors:c,colorsDescription:p,shapesDescription:d,sourceCode:"function validate(chosenColor, chosenShape, rules) { // Returns true or false depending on whether the button the user picked was correct\n  const colorInRules = ".concat(h.map((function(e){return'chosenColor === "'.concat(e,'"')})).join(" || "),"\n  ").concat(c?"if (colorInRules) {\n  return false // That color was one of the banned colors":"if (not(colorInRules)) {\n  return false // That color wasn't one of the allowed colors"," else {\n    \n  }\n  return true // Nothing was wrong with it so we say it's valid :)"),validate:function(e,t){var n=h.includes(e);if(c==n)return!1;var r=f.includes(t);return u!=r}}},O=(n(1914),n(5893));function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.Z)(this,n)}}var P={_:{size:{_:Number,min:1,max:20,finite:!0,integer:!0},width:{_:Number,min:1,max:20,finite:!0,integer:!0},height:{_:Number,min:1,max:20,finite:!0,integer:!0},colors:[{_:String,trimmed:!0}],shapes:[{_:String,trimmed:!0}],rules:Object,title:String,rulesOptions:Object},allOptional:!0},C=["#ff7af5","#00ff00","#00b8ff"],R=["\u25a2","\u29cd","\u25cb"];function Z(e){var t=e.cell,n=e.width,r=e.height,o=e.x,i=e.y,a=e.activateCell,s=e.index,l=t.color,c=t.shape,u=t.active,h=t.failed,f=0===o?"left":o>=n-1?"right":"middle",p=0===i?"top":i>=r-1?"bottom":"middle";return(0,O.jsx)("span",{className:g().cell+(!0===h?" failed":""),vertical:p,horizontal:f,style:{backgroundColor:l,width:100/n+"%",height:100/r+"%"},onClick:function(){a(t,s)},disabled:!0!==u,children:(0,O.jsx)("span",{className:g().inner,children:c})})}var N=function(e){(0,l.Z)(n,e);var t=x(n);function n(e){var r;return(0,i.Z)(this,n),r=t.call(this,e),(0,f.Nw)(e,P),m()((0,s.Z)(r)),r.state=S(S({},r.generateGameState(r.props)),{},{gameState:"ongoing"}),r}return(0,a.Z)(n,[{key:"generateGameState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.colors||C,n=e.shapes||R;if(e.hasOwnProperty("size")&&(e.hasOwnProperty("width")||e.hasOwnProperty("height")))throw new Error("Must supply either size or w/h dimensions not both");for(var r=e.size||e.width||3,o=e.height||e.width||e.size||3,i=e.rules||j(t,n,this.props.rulesOptions),a=[];this.getRemainingCells(a,i).length<1;)for(var s=0,l=r*o;s<l;s++)a[s]={color:t[p(0,t.length-1)],shape:n[p(0,n.length-1)],active:!0};return{width:r,height:o,board:a,colors:t,shapes:n,rules:i}}},{key:"canActivate",value:function(e,t){t=t||this.state.rules;var n=e.color,r=e.shape;return t.validate(n,r)}},{key:"reset",value:function(){this.setState(S(S({},this.generateGameState(this.props)),{},{gameState:"ongoing"}))}},{key:"lose",value:function(){this.setState({gameState:"lost"})}},{key:"getRemainingCells",value:function(e,t){var n=this;return(e||this.state.board).filter((function(e){return n.canActivate(e,t)})).filter((function(e){return!0===e.active}))}},{key:"activateCell",value:function(e,t){if("ongoing"===this.state.gameState&&!0===e.active){var n=!0!==this.canActivate(e),o=(0,r.Z)(this.state.board),i=S({},e);i.active=!1,n&&(i.failed=!0),o[t]=i,this.setState({board:o}),n?this.lose():this.getRemainingCells().length<2&&this.win()}}},{key:"win",value:function(){this.setState({gameState:"won"})}},{key:"render",value:function(){console.log(this.state.rules);var e=this.state.rules.colorsDescription.startsWith("not"),t=this.state.rules.shapesDescription.startsWith("not");return(0,O.jsxs)("div",{className:g()["boolean-game"],children:[(0,O.jsxs)("h2",{className:g().title,children:["Matching Rules",this.props.hasOwnProperty("title")?" - "+this.props.title.trim():null]}),(0,O.jsx)("noscript",{children:(0,O.jsx)("span",{className:g().jserror,children:"JavaScript is required to play this game."})}),(0,O.jsxs)("div",{className:g().rules,children:[(0,O.jsx)("h2",{children:"Rules"}),(e?"":"(")+this.state.rules.colorsDescription+(e?"":")")+" and "+(t?"":"(")+this.state.rules.shapesDescription+(t?"":")"),null]}),"ongoing"===this.state.gameState?null:"won"===this.state.gameState?(0,O.jsx)("span",{className:[g().result,g().won].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You Won!"}):"lost"===this.state.gameState?(0,O.jsx)("span",{className:[g().result,g().lost].join(" "),ref:function(e){document.body.contains(e)&&e.scrollIntoView()},children:"You lost \u3020_\u3020"}):"UNEXPECTED STATE: "+this.state.gameState,"ongoing"!==this.state.gameState?(0,O.jsx)("button",{className:"replay",onClick:this.reset,children:"Replay"}):null,this.renderBoard()]})}},{key:"renderBoard",value:function(){var e=this,t=this.state,n=t.width,r=t.height;return(0,O.jsx)("div",{className:g().board,children:this.state.board.map((function(t,o){var i=Math.floor(o/n),a=o%n;return(0,O.jsx)(Z,{width:n,height:r,x:a,y:i,activateCell:e.activateCell,index:o,cell:t},o)}))})}}]),n}(h.Component)},347:function(e){e.exports={"boolean-game":"BooleanGame_boolean-game__C6gJ2",rules:"BooleanGame_rules__3_3sy",jserror:"BooleanGame_jserror__27K5g",result:"BooleanGame_result__3TfNV",won:"BooleanGame_won__3JVOV",lost:"BooleanGame_lost__2RITR",replay:"BooleanGame_replay__2QBF6",board:"BooleanGame_board__2TPJN",cell:"BooleanGame_cell__2j0R-",failed:"BooleanGame_failed__1Fh83",inner:"BooleanGame_inner__z-olS"}}}]);