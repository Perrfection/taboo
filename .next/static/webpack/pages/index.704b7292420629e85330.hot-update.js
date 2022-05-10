self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Jumbotron.js":
/*!*************************************!*\
  !*** ./src/components/Jumbotron.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.js");
/* harmony import */ var _SearchTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchTitle */ "./src/components/SearchTitle.js");
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feed */ "./src/components/Feed.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\13475\\PycharmProjects\\taboo\\src\\components\\Jumbotron.js",
    _s = $RefreshSig$();







function HeaderP() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " jumbo1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: " jumbo2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "welcome back !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " jumbo3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, {
          className: " icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          value: searchInput,
          className: "search",
          onChange: function onChange(e) {
            return setSearchInput(e.target.value);
          },
          type: "text",
          placeholder: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), searchInput && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: _Feed__WEBPACK_IMPORTED_MODULE_5__.default.map(function (_ref) {
          var id = _ref.id,
              _ref$data = _ref.data,
              title = _ref$data.title,
              pageUrl = _ref$data.pageUrl;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
            title: title,
            pageUrl: pageUrl
          }, id, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(HeaderP, "aeTDylhc9dsCP6Et6s1QzJmMS+s=");

_c = HeaderP;
/* harmony default export */ __webpack_exports__["default"] = (HeaderP);

var _c;

$RefreshReg$(_c, "HeaderP");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/SearchTitle.js":
/*!***************************************!*\
  !*** ./src/components/SearchTitle.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\13475\\PycharmProjects\\taboo\\src\\components\\SearchTitle.js";


function SearchTitle(_ref) {
  var id = _ref.id,
      title = _ref.title,
      pageUrl = _ref.pageUrl;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: pageUrl,
      className: "postLink",
      children: [title, " ", id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SearchTitle;
/* harmony default export */ __webpack_exports__["default"] = (SearchTitle);

var _c;

$RefreshReg$(_c, "SearchTitle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSnVtYm90cm9uLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hUaXRsZS5qcyJdLCJuYW1lcyI6WyJIZWFkZXJQIiwidXNlU3RhdGUiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwicG9zdHMiLCJpZCIsImRhdGEiLCJ0aXRsZSIsInBhZ2VVcmwiLCJTZWFyY2hUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3FCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFJakIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRSw4REFBQyw4REFBRDtBQUFZLG1CQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsZUFBSyxFQUFFRCxXQURUO0FBRUUsbUJBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLG1CQUFNRCxjQUFjLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsV0FIWjtBQUlFLGNBQUksRUFBQyxNQUpQO0FBS0UscUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFXR0osV0FBVyxpQkFDWjtBQUFBLGtCQUNHSyw4Q0FBQSxDQUNIO0FBQUEsY0FDRUMsRUFERixRQUNFQSxFQURGO0FBQUEsK0JBRUVDLElBRkY7QUFBQSxjQUVVQyxLQUZWLGFBRVVBLEtBRlY7QUFBQSxjQUVpQkMsT0FGakIsYUFFaUJBLE9BRmpCO0FBQUEsOEJBSUUsOERBQUMsaURBQUQ7QUFFRSxpQkFBSyxFQUFFRCxLQUZUO0FBR0UsbUJBQU8sRUFBRUM7QUFIWCxhQUNPSCxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxTQURHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBMEJFLDhEQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXBDUVIsTzs7S0FBQUEsTztBQXNDVCwrREFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTs7QUFFQSxTQUFTWSxXQUFULE9BQTZDO0FBQUEsTUFBdEJKLEVBQXNCLFFBQXRCQSxFQUFzQjtBQUFBLE1BQWxCRSxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDM0Msc0JBQ0U7QUFBQSwyQkFDRTtBQUFHLFVBQUksRUFBRUEsT0FBVDtBQUFrQixlQUFTLEVBQUMsVUFBNUI7QUFBQSxpQkFDR0QsS0FESCxPQUNXRixFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztLQVJRSSxXO0FBVVQsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzA0YjcyOTI0MjA2MjllODUzMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcbmltcG9ydCBTZWFyY2hUaXRsZSBmcm9tIFwiLi9TZWFyY2hUaXRsZVwiO1xuaW1wb3J0IHBvc3RzIGZyb20gXCIuL0ZlZWRcIjtcblxuZnVuY3Rpb24gSGVhZGVyUCgpIHtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGp1bWJvMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIganVtYm8yIFwiPlxuICAgICAgICA8YT53ZWxjb21lIGJhY2sgITwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIganVtYm8zXCI+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiIGljb25cIiAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2VhcmNoSW5wdXQgJiZcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cG9zdHMubWFwKFxuICAgICAgICAoe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHBhZ2VVcmx9LFxuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPFNlYXJjaFRpdGxlXG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgcGFnZVVybD17cGFnZVVybH1cbiAgICAgICAgICAvPikpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8TmF2IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyUDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU2VhcmNoVGl0bGUoeyBpZCwgdGl0bGUsIHBhZ2VVcmwgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YSBocmVmPXtwYWdlVXJsfSBjbGFzc05hbWU9XCJwb3N0TGlua1wiPlxuICAgICAgICB7dGl0bGV9IHtpZH1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoVGl0bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9