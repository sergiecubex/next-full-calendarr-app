"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import Menu from '../Menu';\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nconst items1 = [\n    \"Calendar\",\n    \"Users\"\n].map((key)=>({\n        key,\n        label: key\n    }));\nconst App = (param)=>{\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            \"2\"\n                        ],\n                        items: items1\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {}, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                    style: {\n                        padding: \"24px 0\",\n                        background: colorBgContainer\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            padding: \"0 24px\",\n                            minHeight: 280\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"bv0CbvYGXYMMgN5L/h1ALUvDvmM=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBCO0FBRzZCO0FBQ3ZELDhCQUE4QjtBQUU5QixNQUFNLEVBQUVJLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHTix3Q0FBTUE7QUFFakQsTUFBTU8sU0FBNkI7SUFBQztJQUFZO0NBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVM7UUFDdEVBO1FBQ0FDLE9BQU9EO0lBQ1Q7QUFFQSxNQUFNRSxNQUFnQixTQUFzQjtRQUFyQixFQUFDQyxTQUFRLEVBQU87O0lBQ3JDLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxpQkFBZ0IsRUFBRSxHQUM1QixHQUFHWixnREFBYztJQUVsQixxQkFDRSw4REFBQ0Ysd0NBQU1BOzswQkFDTCw4REFBQ0c7Z0JBQU9hLFdBQVU7O2tDQUNoQiw4REFBQ0M7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ2Ysc0NBQUlBO3dCQUFDQyxPQUFNO3dCQUFPZ0IsTUFBSzt3QkFBYUMscUJBQXFCOzRCQUFDO3lCQUFJO3dCQUFFQyxPQUFPYjs7Ozs7Ozs7Ozs7OzBCQUUxRSw4REFBQ04sc0NBQUlBOzs7OzswQkFDTCw4REFBQ0c7Z0JBQVFpQixPQUFPO29CQUFFQyxTQUFTO2dCQUFTOzBCQUNsQyw0RUFBQ3RCLHdDQUFNQTtvQkFBQ3FCLE9BQU87d0JBQUVDLFNBQVM7d0JBQVVDLFlBQVlUO29CQUFpQjs4QkFDL0QsNEVBQUNWO3dCQUFRaUIsT0FBTzs0QkFBRUMsU0FBUzs0QkFBVUUsV0FBVzt3QkFBSTtrQ0FBSVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEU7R0FuQk1EOztRQUdBVCxnREFBY2E7OztLQUhkSjtBQXFCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3g/NjQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFwdG9wT3V0bGluZWQsIE5vdGlmaWNhdGlvbk91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51LCB0aGVtZSB9IGZyb20gJ2FudGQnO1xuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSc7XG5cbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIsIFNpZGVyIH0gPSBMYXlvdXQ7XG5cbmNvbnN0IGl0ZW1zMTogTWVudVByb3BzWydpdGVtcyddID0gWydDYWxlbmRhcicsICdVc2VycycsXS5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBsYWJlbDoga2V5LFxufSkpO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKHtjaGlsZHJlbn0gOiBhbnkpID0+IHtcbiAgY29uc3Qge1xuICAgIHRva2VuOiB7IGNvbG9yQmdDb250YWluZXIgfSxcbiAgfSA9IHRoZW1lLnVzZVRva2VuKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImhvcml6b250YWxcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzInXX0gaXRlbXM9e2l0ZW1zMX0gLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDUwcHgnIH19PlxuICAgICAgICA8TGF5b3V0IHN0eWxlPXt7IHBhZGRpbmc6ICcyNHB4IDAnLCBiYWNrZ3JvdW5kOiBjb2xvckJnQ29udGFpbmVyIH19PlxuICAgICAgICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDI0cHgnLCBtaW5IZWlnaHQ6IDI4MCB9fT57Y2hpbGRyZW59PC9Db250ZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ29udGVudD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiU2lkZXIiLCJpdGVtczEiLCJtYXAiLCJrZXkiLCJsYWJlbCIsIkFwcCIsImNoaWxkcmVuIiwidG9rZW4iLCJjb2xvckJnQ29udGFpbmVyIiwidXNlVG9rZW4iLCJjbGFzc05hbWUiLCJkaXYiLCJtb2RlIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIml0ZW1zIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n"));

/***/ })

});