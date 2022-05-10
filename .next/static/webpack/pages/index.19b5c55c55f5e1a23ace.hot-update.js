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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              lineNumber: 44,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSnVtYm90cm9uLmpzIl0sIm5hbWVzIjpbIkhlYWRlclAiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJwb3N0cyIsInNldFBvc3RzIiwidXNlRWZmZWN0IiwiZGIiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwicGFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3FCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFBQSxtQkFFU0YsK0NBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFVkcsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBSWpCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsd0RBQUEsQ0FBYyxPQUFkLEVBQ0dDLE9BREgsQ0FDVyxXQURYLEVBQ3dCLE1BRHhCLEVBRUdDLFVBRkgsQ0FFYyxVQUFDQyxRQUFEO0FBQUEsYUFDVkwsUUFBUSxDQUNOSyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxHQUFEO0FBQUEsZUFBVTtBQUMxQkMsWUFBRSxFQUFFRCxHQUFHLENBQUNDLEVBRGtCO0FBRTFCQyxjQUFJLEVBQUVGLEdBQUcsQ0FBQ0UsSUFBSjtBQUZvQixTQUFWO0FBQUEsT0FBbEIsQ0FETSxDQURFO0FBQUEsS0FGZDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxlQUFLLEVBQUViLFdBRFQ7QUFFRSxtQkFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsbUJBQU9iLGNBQWMsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxXQUhaO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxxQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQVlHaEIsV0FBVyxpQkFDVjtBQUFBLGdDQUNFLDhEQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUNHRSxLQUFLLENBQUNRLEdBQU4sQ0FBVTtBQUFBLGdCQUFHRSxFQUFILFFBQUdBLEVBQUg7QUFBQSxpQ0FBT0MsSUFBUDtBQUFBLGdCQUFlSSxLQUFmLGFBQWVBLEtBQWY7QUFBQSxnQkFBc0JDLE9BQXRCLGFBQXNCQSxPQUF0QjtBQUFBLGdDQUNULDhEQUFDLGlEQUFEO0FBQXNCLG1CQUFLLEVBQUVELEtBQTdCO0FBQW9DLHFCQUFPLEVBQUVDO0FBQTdDLGVBQWtCTixFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkJEOztHQTVDUWQsTzs7S0FBQUEsTztBQThDVCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOWI1YzU1YzU1ZjVlMWEyM2FjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcbmltcG9ydCBTZWFyY2hUaXRsZSBmcm9tIFwiLi9TZWFyY2hUaXRsZVwiO1xuaW1wb3J0IHBvc3RzIGZyb20gXCIuL0ZlZWRcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XG5cbmZ1bmN0aW9uIEhlYWRlclAoKSB7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRiLmNvbGxlY3Rpb24oXCJwb3N0c1wiKVxuICAgICAgLm9yZGVyQnkoXCJ0aW1lc3RhbXBcIiwgXCJkZXNjXCIpXG4gICAgICAub25TbmFwc2hvdCgoc25hcHNob3QpID0+XG4gICAgICAgIHNldFBvc3RzKFxuICAgICAgICAgIHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XG4gICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgZGF0YTogZG9jLmRhdGEoKSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIganVtYm8xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBqdW1ibzIgXCI+XG4gICAgICAgIDxhPndlbGNvbWUgYmFjayAhPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBqdW1ibzNcIj5cbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCIgaWNvblwiIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzZWFyY2hJbnB1dCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHsgaWQsIGRhdGE6IHsgdGl0bGUsIHBhZ2VVcmwgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFNlYXJjaFRpdGxlIGtleT17aWR9IHRpdGxlPXt0aXRsZX0gcGFnZVVybD17cGFnZVVybH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJQO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==