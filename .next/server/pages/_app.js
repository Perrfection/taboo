(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/features/userSlice.js":
/*!***********************************!*\
  !*** ./src/features/userSlice.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userSlice": function() { return /* binding */ userSlice; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "logout": function() { return /* binding */ logout; },
/* harmony export */   "selectUser": function() { return /* binding */ selectUser; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    }
  }
});
const {
  login,
  logout
} = userSlice.actions;
const selectUser = state => state.user.user;
/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/pages/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\13475\\PycharmProjects\\taboo\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_3__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 34
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/pages/store.js":
/*!****************************!*\
  !*** ./src/pages/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/userSlice */ "./src/features/userSlice.js");


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJvby8uL3NyYy9mZWF0dXJlcy91c2VyU2xpY2UuanMiLCJ3ZWJwYWNrOi8vdGFib28vLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly90YWJvby8uL3NyYy9wYWdlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly90YWJvby9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly90YWJvby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdGFib28vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3RhYm9vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlclNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInJlZHVjZXJzIiwibG9naW4iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJsb2dvdXQiLCJhY3Rpb25zIiwic2VsZWN0VXNlciIsInJlZHVjZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJ1c2VyUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyw2REFBVyxDQUFDO0FBQ25DQyxNQUFJLEVBQUUsTUFENkI7QUFFbkNDLGNBQVksRUFBRTtBQUNaQyxRQUFJLEVBQUU7QUFETSxHQUZxQjtBQU1uQ0MsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDeEJELFdBQUssQ0FBQ0gsSUFBTixHQUFhSSxNQUFNLENBQUNDLE9BQXBCO0FBQ0QsS0FITztBQUlSQyxVQUFNLEVBQUdILEtBQUQsSUFBVztBQUNmQSxXQUFLLENBQUNILElBQU4sR0FBYSxJQUFiO0FBQ0g7QUFOTztBQU55QixDQUFELENBQTdCO0FBZ0JBLE1BQU07QUFBRUUsT0FBRjtBQUFTSTtBQUFULElBQW9CVixTQUFTLENBQUNXLE9BQXBDO0FBRUEsTUFBTUMsVUFBVSxHQUFJTCxLQUFELElBQVdBLEtBQUssQ0FBQ0gsSUFBTixDQUFXQSxJQUF6QztBQUVQLCtEQUFlSixTQUFTLENBQUNhLE9BQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQU8sOERBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVDLHlDQUFqQjtBQUFBLDJCQUF3Qiw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUVPLE1BQU1HLEtBQUssR0FBR0MsZ0VBQWMsQ0FBQztBQUNsQ0wsU0FBTyxFQUFFO0FBQ1BULFFBQUksRUFBRWUsd0RBQVdBO0FBRFY7QUFEeUIsQ0FBRCxDQUE1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gIH0sXHJcblxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbG9naW4sIGxvZ291dCB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtzdG9yZX0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48L1Byb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvdXNlclNsaWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICB9LFxyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==