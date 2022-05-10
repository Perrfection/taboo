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
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\13475\\PycharmProjects\\taboo\\src\\components\\Jumbotron.js",
    _s = $RefreshSig$();








function HeaderP() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      posts = _useState2[0],
      setPosts = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_6__.db.collection("posts").orderBy("timestamp", "desc").onSnapshot(function (snapshot) {
      return setPosts(snapshot.docs.map(function (doc) {
        return {
          id: doc.id,
          data: doc.data()
        };
      }));
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " jumbo1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: " jumbo2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: "welcome back !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " jumbo3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.SearchIcon, {
          className: " icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), searchInput && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: posts.map(function (_ref) {
            var id = _ref.id,
                _ref$data = _ref.data,
                title = _ref$data.title,
                pageUrl = _ref$data.pageUrl;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
              title: title,
              pageUrl: pageUrl
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(HeaderP, "9WgTcX3oQ2pwgzv1fUHitfVtptU=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSnVtYm90cm9uLmpzIl0sIm5hbWVzIjpbIkhlYWRlclAiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJwb3N0cyIsInNldFBvc3RzIiwidXNlRWZmZWN0IiwiZGIiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwicGFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3FCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFBQSxtQkFFU0YsK0NBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFVkcsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBSWpCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsd0RBQUEsQ0FBYyxPQUFkLEVBQ0dDLE9BREgsQ0FDVyxXQURYLEVBQ3dCLE1BRHhCLEVBRUdDLFVBRkgsQ0FFYyxVQUFDQyxRQUFEO0FBQUEsYUFDVkwsUUFBUSxDQUNOSyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxHQUFEO0FBQUEsZUFBVTtBQUMxQkMsWUFBRSxFQUFFRCxHQUFHLENBQUNDLEVBRGtCO0FBRTFCQyxjQUFJLEVBQUVGLEdBQUcsQ0FBQ0UsSUFBSjtBQUZvQixTQUFWO0FBQUEsT0FBbEIsQ0FETSxDQURFO0FBQUEsS0FGZDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxlQUFLLEVBQUViLFdBRFQ7QUFFRSxtQkFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsbUJBQU9iLGNBQWMsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxXQUhaO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxxQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQVlHaEIsV0FBVyxpQkFDVjtBQUFBLCtCQUNFO0FBQUEsb0JBQ0dFLEtBQUssQ0FBQ1EsR0FBTixDQUFVO0FBQUEsZ0JBQUdFLEVBQUgsUUFBR0EsRUFBSDtBQUFBLGlDQUFPQyxJQUFQO0FBQUEsZ0JBQWVJLEtBQWYsYUFBZUEsS0FBZjtBQUFBLGdCQUFzQkMsT0FBdEIsYUFBc0JBLE9BQXRCO0FBQUEsZ0NBQ1QsOERBQUMsaURBQUQ7QUFBc0IsbUJBQUssRUFBRUQsS0FBN0I7QUFBb0MscUJBQU8sRUFBRUM7QUFBN0MsZUFBa0JOLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFM7QUFBQSxXQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSixlQXFCRSw4REFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7R0E1Q1FkLE87O0tBQUFBLE87QUE4Q1QsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjQ2MjE3OTk3YTE3MDUwN2U5ZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5pbXBvcnQgU2VhcmNoVGl0bGUgZnJvbSBcIi4vU2VhcmNoVGl0bGVcIjtcbmltcG9ydCBwb3N0cyBmcm9tIFwiLi9GZWVkXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xuXG5mdW5jdGlvbiBIZWFkZXJQKCkge1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYi5jb2xsZWN0aW9uKFwicG9zdHNcIilcbiAgICAgIC5vcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PlxuICAgICAgICBzZXRQb3N0cyhcbiAgICAgICAgICBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgIGRhdGE6IGRvYy5kYXRhKCksXG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGp1bWJvMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIganVtYm8yIFwiPlxuICAgICAgICA8YT53ZWxjb21lIGJhY2sgITwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIganVtYm8zXCI+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiIGljb25cIiAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2VhcmNoSW5wdXQgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7cG9zdHMubWFwKCh7IGlkLCBkYXRhOiB7IHRpdGxlLCBwYWdlVXJsIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWFyY2hUaXRsZSBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IHBhZ2VVcmw9e3BhZ2VVcmx9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxOYXYgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJQO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==