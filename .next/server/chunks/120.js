exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 6120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_HoverDefinition)
});

// EXTERNAL MODULE: ./styles/HoverDefinition.module.scss
var HoverDefinition_module = __webpack_require__(6978);
var HoverDefinition_module_default = /*#__PURE__*/__webpack_require__.n(HoverDefinition_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./functions/useClickToggle.js
 // Hook

function useClickToggle() {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);
  const ref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  });
  return [ref, active];
}

/* harmony default export */ const functions_useClickToggle = (useClickToggle);
;// CONCATENATED MODULE: ./functions/useHover.js


function useHover() {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(false);
  const ref = (0,external_react_.useRef)(null);

  const handleMouseOver = () => setValue(true);

  const handleMouseOut = () => setValue(false);

  (0,external_react_.useEffect)(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

/* harmony default export */ const functions_useHover = (useHover);
;// CONCATENATED MODULE: ./functions/mergeRefs.js
const mergeRefs = (...refs) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return inst => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};

/* harmony default export */ const functions_mergeRefs = (mergeRefs);
;// CONCATENATED MODULE: ./functions/useSmartToggle.js





function useSmartToggle() {
  const myRef = (0,external_react_.useRef)(null);
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);
  const [hoverRef, isHovered] = functions_useHover();
  const [toggleRef, isToggled] = functions_useClickToggle();
  const shouldBeActive = isHovered || isToggled;

  if (shouldBeActive !== active) {
    setActive(shouldBeActive);
  }

  return [functions_mergeRefs(hoverRef, toggleRef), active];
}

/* harmony default export */ const functions_useSmartToggle = (useSmartToggle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/HoverDefinition.js




const validDirections = ['up', 'left', 'down', 'right'];

function HoverDefinition(props) {
  const [ref, isActive] = functions_useSmartToggle();
  if (typeof props.children != 'string') throw new Error('Expected a text child');
  if (typeof props.definition != 'string') throw new Error('Expected a definition');
  const direction = props.hasOwnProperty('direction') ? props.direction : 'up';
  if (!validDirections.includes(direction)) throw new Error('Invalid Direction Specified');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
    className: (HoverDefinition_module_default())["hover-definition"],
    ref: ref,
    children: [isActive ? /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (HoverDefinition_module_default()).definition + ' ' + (HoverDefinition_module_default())[direction],
      children: props.definition
    }) : null, props.children]
  });
}

/* harmony default export */ const components_HoverDefinition = (HoverDefinition);

/***/ }),

/***/ 6978:
/***/ ((module) => {

// Exports
module.exports = {
	"hover-definition": "HoverDefinition_hover-definition__2OWz5",
	"definition": "HoverDefinition_definition__rfeSG",
	"up": "HoverDefinition_up__7SpBV",
	"bottom": "HoverDefinition_bottom__p5K6Z",
	"left": "HoverDefinition_left__YKNFv",
	"right": "HoverDefinition_right___v6br"
};


/***/ })

};
;