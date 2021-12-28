exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 7705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_BooleanGame)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "sandhands"
var external_sandhands_ = __webpack_require__(4248);
;// CONCATENATED MODULE: ./functions/randomBetween.js
function randomBetween(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ const functions_randomBetween = (randomBetween);
// EXTERNAL MODULE: ./styles/BooleanGame.module.scss
var BooleanGame_module = __webpack_require__(2491);
var BooleanGame_module_default = /*#__PURE__*/__webpack_require__.n(BooleanGame_module);
// EXTERNAL MODULE: external "auto-bind"
var external_auto_bind_ = __webpack_require__(91);
var external_auto_bind_default = /*#__PURE__*/__webpack_require__.n(external_auto_bind_);
// EXTERNAL MODULE: external "ntcjs"
var external_ntcjs_ = __webpack_require__(9577);
var external_ntcjs_default = /*#__PURE__*/__webpack_require__.n(external_ntcjs_);
;// CONCATENATED MODULE: ./functions/generateRules.js



function generateRules(colors = ['red', 'green', 'blue'], shapes = ['square', 'triangle'], options = {}) {
  let {
    allowNots = true,
    minColors = 1,
    minShapes = 1,
    notColors = false,
    notShapes = false
  } = options;
  let allowedColors = randomSubset(colors, minColors);
  let allowedShapes = randomSubset(shapes, minShapes); //console.log(notColors, notShapes);

  if (notShapes === true && allowedShapes.length >= shapes.length) {
    allowedShapes = allowedShapes.slice(0, shapes.length - 1);
  }

  if ( //allowedShapes.length > shapes.length / 2 &&
  allowNots === true && allowedShapes.length < shapes.length - 1 && notShapes !== false && (notShapes === true || Math.random() > 0.5) // Random chance of inverting it
  ) {
    allowedShapes = shapes.filter(shape => !allowedShapes.includes(shape));
    notShapes = true;
  }

  if (notColors === true && allowedColors.length >= colors.length) {
    allowedColors = allowedColors.slice(0, shapes.length - 1);
  }

  if ( //allowedColors.length > colors.length / 2 &&
  allowNots === true && allowedColors.length < colors.length - 1 && notColors !== false && (notColors === true || Math.random() > 0.5) // Random chance of inverting it
  ) {
    allowedColors = colors.filter(color => !allowedColors.includes(color));
    notColors = true;
  }

  const colorsDescription = (notColors ? 'not (' : '') + allowedColors.map(color => external_ntcjs_default().name(color)[1]).join(' or ') + (notColors ? ')' : '');
  const shapesDescription = (notShapes ? 'not (' : '') + allowedShapes.join(' or ') + (notShapes ? ')' : '');
  return {
    allowedColors,
    allowedShapes,
    notShapes,
    notColors,
    colorsDescription,
    shapesDescription,
    sourceCode: `function validate(chosenColor, chosenShape, rules) { // Returns true or false depending on whether the button the user picked was correct
  const colorInRules = ${allowedColors.map(color => `chosenColor === "${color}"`).join(' || ')}
  ${notColors ? `if (colorInRules) {
  return false // That color was one of the banned colors` : `if (not(colorInRules)) {
  return false // That color wasn't one of the allowed colors`} else {
    
  }
  return true // Nothing was wrong with it so we say it's valid :)`,
    validate: (color, shape) => {
      const inColors = allowedColors.includes(color);
      if (notColors == inColors) return false;
      const inShapes = allowedShapes.includes(shape);
      if (notShapes == inShapes) return false; //console.log(color, shape, inColors, inShapes, notColors, notShapes)

      return true;
    }
  };
}

function randomSubset(possible, minResults = 1) {
  const output = possible.filter(() => Math.random() > 0.5);

  while (output.length < minResults && possible.length > output.length) {
    const nowPossible = possible.filter(value => !output.includes(value));
    const newColor = nowPossible[functions_randomBetween(0, nowPossible.length - 1)];
    output.push(newColor);
  }

  return output;
}

/* harmony default export */ const functions_generateRules = (generateRules);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/BooleanGame/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const propsFormat = {
  _: {
    size: {
      _: Number,
      min: 1,
      max: 20,
      finite: true,
      integer: true
    },
    width: {
      _: Number,
      min: 1,
      max: 20,
      finite: true,
      integer: true
    },
    height: {
      _: Number,
      min: 1,
      max: 20,
      finite: true,
      integer: true
    },
    colors: [{
      _: String,
      trimmed: true
    }],
    shapes: [{
      _: String,
      trimmed: true
    }],
    rules: Object,
    title: String,
    rulesOptions: Object
  },
  allOptional: true
};
const defaultColors = ['#ffccfb', '#00ff00', '#0080b3'];
const defaultShapes = ['▢', '⧍', '○'];

class BooleanGame extends external_react_.Component {
  constructor(props) {
    super(props);
    (0,external_sandhands_.sanitize)(props, propsFormat);
    external_auto_bind_default()(this);
    this.state = _objectSpread(_objectSpread({}, this.generateGameState(this.props)), {}, {
      gameState: 'ongoing'
    });
  }

  generateGameState(options = {}) {
    const colors = options.colors || defaultColors;
    const shapes = options.shapes || defaultShapes;
    if (options.hasOwnProperty('size') && (options.hasOwnProperty('width') || options.hasOwnProperty('height'))) throw new Error('Must supply either size or w/h dimensions not both');
    const width = options.size || options.width || 3;
    const height = options.height || options.width || options.size || 3;
    const rules = options.rules || functions_generateRules(colors, shapes, this.props.rulesOptions);
    const board = [];

    while (this.getRemainingCells(board, rules).length < 1) {
      for (let i = 0, ss = width * height; i < ss; i++) {
        board[i] = {
          color: colors[functions_randomBetween(0, colors.length - 1)],
          shape: shapes[functions_randomBetween(0, shapes.length - 1)],
          active: true
        };
      }
    }

    return {
      width,
      height,
      board,
      colors,
      shapes,
      rules
    };
  }

  canActivate(cell, rules) {
    rules = rules || this.state.rules;
    const {
      color,
      shape
    } = cell;
    return rules.validate(color, shape);
  }

  reset() {
    this.setState(_objectSpread(_objectSpread({}, this.generateGameState(this.props)), {}, {
      gameState: 'ongoing'
    }));
  }

  lose() {
    this.setState({
      gameState: 'lost'
    }); //console.log("lost");
  }

  getRemainingCells(board, rules) {
    return (board || this.state.board).filter(cell => this.canActivate(cell, rules)).filter(cell => cell.active === true);
  }

  activateCell(cell, index) {
    if (this.state.gameState !== 'ongoing') return; // Don't let you click when the game is not running

    if (cell.active !== true) return; // don't trigger for a deactivated cell

    let lost = this.canActivate(cell) !== true;
    const newBoard = [...this.state.board];

    const newCell = _objectSpread({}, cell);

    newCell.active = false;

    if (lost) {
      newCell.failed = true;
    } //console.log(newCell);


    newBoard[index] = newCell;
    this.setState({
      board: newBoard
    }); //console.log("x", lost, this.getRemainingCells(), this.state.board);

    if (lost) {
      this.lose();
    } else if (this.getRemainingCells().length < 2) {
      // Offset by one to account for the recently activated cell
      this.win();
    }
  }

  win() {
    //console.log("You won!");
    this.setState({
      gameState: 'won'
    });
  }

  render() {
    const notColors = this.state.rules.colorsDescription.startsWith('not');
    const notShapes = this.state.rules.shapesDescription.startsWith('not');
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (BooleanGame_module_default())["boolean-game"],
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        className: (BooleanGame_module_default()).title,
        children: ["Matching Rules", this.props.hasOwnProperty('title') ? ' - ' + this.props.title.trim() : null]
      }), /*#__PURE__*/jsx_runtime_.jsx("noscript", {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (BooleanGame_module_default()).jserror,
          children: "JavaScript is required to play this game."
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (BooleanGame_module_default()).rules,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Color Palette"
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (BooleanGame_module_default())["color-list"],
          children: this.state.colors.map((color, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (BooleanGame_module_default()).color,
              style: {
                backgroundColor: color
              },
              children: external_ntcjs_default().name(color)[1]
            })
          }, i))
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Rules"
        }), (notColors ? '' : '(') + this.state.rules.colorsDescription + (notColors ? '' : ')') + ' and ' + (notShapes ? '' : '(') + this.state.rules.shapesDescription + (notShapes ? '' : ')')
        /*<span className="colors">Colors: {this.state.rules.colorsDescription}</span>
        <br />
        <span className="shapes">Shapes: {this.state.rules.shapesDescription}</span>*/
        , null
        /*<h2>Rules in JavaScript</h2>
        {
        null /*<AceEditor
        mode="javascript"
        theme="ambiance"
        width="100%"
        height="120px"
        value={this.state.rules.sourceCode}
        readOnly></AceEditor>{<ScratchBlocks>{this.state.rules.sourceCode}</ScratchBlocks>} */
        ]
      }), this.state.gameState === 'ongoing' ? null : this.state.gameState === 'won' ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: [(BooleanGame_module_default()).result, (BooleanGame_module_default()).won].join(' '),
        ref: ref => {
          if (document.body.contains(ref)) ref.scrollIntoView();
        },
        children: "You Won!"
      }) : this.state.gameState === 'lost' ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: [(BooleanGame_module_default()).result, (BooleanGame_module_default()).lost].join(' '),
        ref: ref => {
          if (document.body.contains(ref)) ref.scrollIntoView();
        },
        children: "You lost \u3020_\u3020"
      }) : 'UNEXPECTED STATE: ' + this.state.gameState, this.state.gameState !== 'ongoing' ? /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (BooleanGame_module_default()).replay,
        onClick: this.reset,
        children: "Replay"
      }) : null, this.renderBoard()]
    });
  }

  renderBoard() {
    const {
      width,
      height
    } = this.state;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (BooleanGame_module_default()).board,
      children: this.state.board.map((content, i) => {
        const y = Math.floor(i / width);
        const x = i % width;
        return /*#__PURE__*/jsx_runtime_.jsx(CellRenderer, {
          width: width,
          height: height,
          x: x,
          y: y,
          activateCell: this.activateCell,
          index: i,
          cell: content
        }, i);
      })
    });
  }

}

function CellRenderer(props) {
  const {
    cell,
    width,
    height,
    x,
    y,
    activateCell,
    index
  } = props;
  const {
    color,
    shape,
    active,
    failed
  } = cell;
  const horizontalEdge = x === 0 ? 'left' : x >= width - 1 ? 'right' : 'middle';
  const verticalEdge = y === 0 ? 'top' : y >= height - 1 ? 'bottom' : 'middle';
  return /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: (BooleanGame_module_default()).cell + (failed === true ? ' failed' : ''),
    vertical: verticalEdge,
    horizontal: horizontalEdge,
    style: {
      backgroundColor: color,
      width: 100 / width + '%',
      height: 100 / height + '%'
    },
    onClick: () => {
      activateCell(cell, index);
    },
    disabled: active !== true,
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (BooleanGame_module_default()).inner,
      children: shape
    })
  });
}

/* harmony default export */ const components_BooleanGame = (BooleanGame);

/***/ }),

/***/ 2491:
/***/ ((module) => {

// Exports
module.exports = {
	"boolean-game": "BooleanGame_boolean-game__zA4On",
	"color-list": "BooleanGame_color-list__mCXWg",
	"color": "BooleanGame_color__U95A3",
	"rules": "BooleanGame_rules__J5Ikc",
	"jserror": "BooleanGame_jserror__2MTXP",
	"result": "BooleanGame_result__oP4gW",
	"won": "BooleanGame_won__hpI8C",
	"lost": "BooleanGame_lost__21nx0",
	"replay": "BooleanGame_replay__x0PCP",
	"board": "BooleanGame_board__OlH_0",
	"cell": "BooleanGame_cell__O9znJ",
	"failed": "BooleanGame_failed___8ZXM",
	"inner": "BooleanGame_inner__dYDb_"
};


/***/ })

};
;