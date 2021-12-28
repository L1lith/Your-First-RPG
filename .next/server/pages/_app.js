(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/header.module.scss
var header_module = __webpack_require__(5681);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "next-multilingual/link"
var link_ = __webpack_require__(701);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);
// EXTERNAL MODULE: ./styles/Settings.module.scss
var Settings_module = __webpack_require__(1999);
var Settings_module_default = /*#__PURE__*/__webpack_require__.n(Settings_module);
;// CONCATENATED MODULE: ./functions/isDev.js
function isDev() {
  try {
    return process && false;
  } catch (error) {
    return false;
  }
}

/* harmony default export */ const functions_isDev = (isDev);
// EXTERNAL MODULE: ./styles/Switch.module.scss
var Switch_module = __webpack_require__(5967);
var Switch_module_default = /*#__PURE__*/__webpack_require__.n(Switch_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Switch.js





function Switch(props) {
  const {
    rounded = true,
    offLabel,
    onLabel,
    onChange,
    value = false
  } = props;
  const {
    0: isActive,
    1: setActive
  } = (0,external_react_.useState)(!!value);
  const inputRef = (0,external_react_.useRef)(null);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
    className: (Switch_module_default())["switch"] + (rounded ? ' ' + (Switch_module_default()).rounded : '') + (isActive ? ' ' + (Switch_module_default())["switch-active"] : ''),
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      ref: inputRef,
      type: "checkbox",
      value: isActive,
      onChange: () => {
        const nowActive = !isActive;
        setActive(nowActive);

        if (typeof onChange == 'function') {
          try {
            onChange(nowActive);
          } catch (error) {
            console.error(error);
          }
        }
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (Switch_module_default()).slider + (isActive ? ' ' + (Switch_module_default())["slider-active"] : '')
    }), typeof offLabel === 'string' ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: (Switch_module_default()).offLabel,
      children: offLabel
    }) : null, typeof onLabel === 'string' ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: (Switch_module_default()).onLabel,
      children: onLabel
    }) : null]
  });
}

/* harmony default export */ const components_Switch = (Switch);
;// CONCATENATED MODULE: ./components/Settings.js








const Settings = props => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const className = (typeof props.className == 'string' ? props.className + ' ' : '') + ' emoji-button ' + (Settings_module_default())["settings-button"];
  let settingsMenu = null;

  if (isOpen) {
    settingsMenu = /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Settings_module_default())["dom-blocker"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Settings_module_default())["settings-menu"],
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            setOpen(false);
            document.body.classList.remove('disabled');
          },
          className: (Settings_module_default()).close + ' emoji-button grayscale',
          children: "\u274C"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "JavaScript Editor"
          }), /*#__PURE__*/jsx_runtime_.jsx(components_Switch, {
            onChange: value => {
              localStorage.codeLanguage = value ? 'js' : 'scratch';
            },
            value: localStorage.codeLanguage !== 'scratch'
            /* Default language is JS */
            ,
            rounded: true,
            default: "on",
            onLabel: "Text Editor",
            offLabel: "Blocks"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          target: "_blank",
          href: "https://support.google.com/chrome/answer/9658361",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            children: "Download the App!"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/resources",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: () => {
              setOpen(false);
            },
            className: (Settings_module_default()).resources,
            children: "Stuck?"
          })
        })]
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: () => {
        if (!functions_isDev()) return; // The settings menu is currently dev only

        setOpen(true);
        document.body.classList.add('disabled');
      },
      className: className,
      children: "\u2699\uFE0F"
    }), settingsMenu]
  });
};

/* harmony default export */ const components_Settings = (Settings);
;// CONCATENATED MODULE: ./components/header.js







const Header = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
  className: (header_module_default())["main-header"],
  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
    alt: "site logo",
    type: "image/svg",
    className: (header_module_default())["site-icon"],
    src: "/images/icons/site-icon.svg"
  }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "site-title",
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (header_module_default())["home-link"],
        children: "Your First RPG"
      })
    })
  }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
    href: "/resources",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (header_module_default()).resources,
      children: "Stuck?"
    })
  }), null
  /*<Link href="/support">
  <a className={styles.support}>Support Me</a>
  </Link>*/
  , /*#__PURE__*/jsx_runtime_.jsx(components_Settings, {
    className: (header_module_default()).settings
  })]
});

/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./styles/_app.module.scss
var _app_module = __webpack_require__(9769);
var _app_module_default = /*#__PURE__*/__webpack_require__.n(_app_module);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-multilingual"
var external_next_multilingual_ = __webpack_require__(307);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  const {
    locales,
    defaultLocale,
    locale
  } = router;

  if (locale === defaultLocale) {
    router.locale = (0,external_next_multilingual_.getActualDefaultLocale)(locales, defaultLocale);
  }

  (0,external_next_multilingual_.setCookieLocale)(router.locale);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
      titleTemplate: "%s - YFRPG",
      defaultTitle: "Your First RPG"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
      description: "Learn to make games in JavaScript for beginners"
    }), /*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: 'page ' + (_app_module_default()).page,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 1999:
/***/ ((module) => {

// Exports
module.exports = {
	"settings-button": "Settings_settings-button__kkjQg",
	"settings-menu": "Settings_settings-menu__eAQkt",
	"close": "Settings_close__qfDDk",
	"dom-blocker": "Settings_dom-blocker__m3od5"
};


/***/ }),

/***/ 5967:
/***/ ((module) => {

// Exports
module.exports = {
	"switch": "Switch_switch__7C2Za",
	"switch-active": "Switch_switch-active__Ihb6l",
	"rounded": "Switch_rounded__OwjoS",
	"onLabel": "Switch_onLabel__1Qiue",
	"offLabel": "Switch_offLabel__04ADU",
	"slider": "Switch_slider__v9bog",
	"slider-active": "Switch_slider-active__sCasP"
};


/***/ }),

/***/ 9769:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "_app_page__ckLd1",
	"title": "_app_title__dnWLK"
};


/***/ }),

/***/ 5681:
/***/ ((module) => {

// Exports
module.exports = {
	"main-header": "header_main-header__sJ9Xp",
	"resources": "header_resources__ggx6C",
	"settings": "header_settings___TXrW",
	"home-link": "header_home-link__LaCxi",
	"site-icon": "header_site-icon__GT91o"
};


/***/ }),

/***/ 307:
/***/ ((module) => {

"use strict";
module.exports = require("next-multilingual");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next-multilingual/link");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2347));
module.exports = __webpack_exports__;

})();