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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this), posts.map(function (_ref) {
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
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSnVtYm90cm9uLmpzIl0sIm5hbWVzIjpbIkhlYWRlclAiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJwb3N0cyIsInNldFBvc3RzIiwidXNlRWZmZWN0IiwiZGIiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpdGxlIiwicGFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3FCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFBQSxtQkFFU0YsK0NBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFVkcsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBSWpCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsd0RBQUEsQ0FBYyxPQUFkLEVBQ0dDLE9BREgsQ0FDVyxXQURYLEVBQ3dCLE1BRHhCLEVBRUdDLFVBRkgsQ0FFYyxVQUFDQyxRQUFEO0FBQUEsYUFDVkwsUUFBUSxDQUNOSyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxHQUFEO0FBQUEsZUFBVTtBQUMxQkMsWUFBRSxFQUFFRCxHQUFHLENBQUNDLEVBRGtCO0FBRTFCQyxjQUFJLEVBQUVGLEdBQUcsQ0FBQ0UsSUFBSjtBQUZvQixTQUFWO0FBQUEsT0FBbEIsQ0FETSxDQURFO0FBQUEsS0FGZDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFLDhEQUFDLDhEQUFEO0FBQVksbUJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxlQUFLLEVBQUViLFdBRFQ7QUFFRSxtQkFBUyxFQUFDLFFBRlo7QUFHRSxrQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsbUJBQU9iLGNBQWMsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxXQUhaO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxxQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQVlHaEIsV0FBVyxpQkFDVjtBQUFBLCtCQUNFO0FBQUEsa0NBQ0UsOERBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHRSxLQUFLLENBQUNRLEdBQU4sQ0FBVTtBQUFBLGdCQUFHRSxFQUFILFFBQUdBLEVBQUg7QUFBQSxpQ0FBT0MsSUFBUDtBQUFBLGdCQUFlSSxLQUFmLGFBQWVBLEtBQWY7QUFBQSxnQkFBc0JDLE9BQXRCLGFBQXNCQSxPQUF0QjtBQUFBLGdDQUNULDhEQUFDLGlEQUFEO0FBQXNCLG1CQUFLLEVBQUVELEtBQTdCO0FBQW9DLHFCQUFPLEVBQUVDO0FBQTdDLGVBQWtCTixFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBNUNRZCxPOztLQUFBQSxPO0FBOENULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzNDlkNTJjNWFkMTRkZDYxMTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IFNlYXJjaFRpdGxlIGZyb20gXCIuL1NlYXJjaFRpdGxlXCI7XG5pbXBvcnQgcG9zdHMgZnJvbSBcIi4vRmVlZFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vZmlyZWJhc2VcIjtcblxuZnVuY3Rpb24gSGVhZGVyUCgpIHtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGIuY29sbGVjdGlvbihcInBvc3RzXCIpXG4gICAgICAub3JkZXJCeShcInRpbWVzdGFtcFwiLCBcImRlc2NcIilcbiAgICAgIC5vblNuYXBzaG90KChzbmFwc2hvdCkgPT5cbiAgICAgICAgc2V0UG9zdHMoXG4gICAgICAgICAgc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICBkYXRhOiBkb2MuZGF0YSgpLFxuICAgICAgICAgIH0pKVxuICAgICAgICApXG4gICAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBqdW1ibzFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGp1bWJvMiBcIj5cbiAgICAgICAgPGE+d2VsY29tZSBiYWNrICE8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGp1bWJvM1wiPlxuICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cIiBpY29uXCIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlYXJjaElucHV0ICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgICB7cG9zdHMubWFwKCh7IGlkLCBkYXRhOiB7IHRpdGxlLCBwYWdlVXJsIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWFyY2hUaXRsZSBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IHBhZ2VVcmw9e3BhZ2VVcmx9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyUDtcbiJdLCJzb3VyY2VSb290IjoiIn0=