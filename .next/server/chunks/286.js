exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 9180:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "styles_button__kxGiq",
	"animate": "styles_animate__GrmXU",
	"icon": "styles_icon__3_z8c",
	"buttonText": "styles_buttonText__F4Hgt"
};


/***/ }),

/***/ 2336:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "styles_input__McQ3D"
};


/***/ }),

/***/ 9714:
/***/ ((module) => {

// Exports
module.exports = {
	"containerCenter": "home_containerCenter__28T3z",
	"image": "home_image__y_T84",
	"login": "home_login__KCIzc",
	"text": "home_text__PXNQN"
};


/***/ }),

/***/ 4636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9180);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);



function Button({ loading , children , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
        disabled: loading,
        ...rest,
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaSpinner, {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon),
            size: 16
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonText),
            children: children
        })
    });
}


/***/ }),

/***/ 5552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* unused harmony export TextArea */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2336);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Input({ ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input),
        ...rest
    });
}
function TextArea({ ...rest }) {
    return /*#__PURE__*/ _jsx("textarea", {
        className: styles.input,
        ...rest
    });
}


/***/ })

};
;