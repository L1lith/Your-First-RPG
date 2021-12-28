exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 4090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_YTVideo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4564);
/* harmony import */ var _styles_YTVideo_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_YTVideo_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const urlRegex = /^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;

function YTVideo(props = {
  url
}) {
  const {
    0: isOpen,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    url,
    query = {}
  } = props;
  if (props.hasOwnProperty('query') && (typeof query != 'object' || query === null || Object.keys(query).length < 1)) throw new Error('Please provide a valid query object');

  if (typeof url !== 'string') {
    console.warn(new Error('Expected a video url'));
    return null;
  }

  query.autoplay = 1; // Currently autoplay is broken, it is always applied when the video loads, but the video only loads after you click the image and at the moment there's no way to skip clicking the image so we just enforce autoplay for the hot-swapped youtube embed

  if (!urlRegex.test(url)) throw new Error('This url is invalid');
  const videoURL = 'https://www.youtube.com/embed/' + url + `?` + Object.entries(query).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');

  const parentProps = _objectSpread({}, props);

  delete parentProps.url;
  delete parentProps.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", _objectSpread(_objectSpread({}, parentProps), {}, {
    className: (_styles_YTVideo_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["youtube-container"]) + ' youtube-container' // 'youtube-container' + (typeof props.className == 'string' ? ' ' + props.className : '')
    ,
    children: [!isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
        onClick: () => setOpen(true),
        src: props.hasOwnProperty('thumbnail') ? props.thumbnail : `https://img.youtube.com/vi/${url}/hqdefault.jpg`,
        alt: "Youtube Video"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        className: (_styles_YTVideo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().play),
        children: "\u25B6"
      })]
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("iframe", {
      className: isOpen ? null : (_styles_YTVideo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().disabled),
      src: isOpen ? videoURL : null,
      title: "YouTube video player",
      frameBorder: "0",
      sandbox: "allow-scripts allow-same-origin",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    })]
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YTVideo);

/***/ }),

/***/ 4564:
/***/ ((module) => {

// Exports
module.exports = {
	"youtube-container": "YTVideo_youtube-container__KD4DD",
	"disabled": "YTVideo_disabled__I5W54"
};


/***/ })

};
;