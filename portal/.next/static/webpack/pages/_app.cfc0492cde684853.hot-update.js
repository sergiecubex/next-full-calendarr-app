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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Calendar */ \"./components/Calendar/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { Header , Content  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nconst items = [\n    {\n        label: \"Calendar\",\n        key: \"1\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, {\n            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Users\",\n        key: \"2\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MailOutlined, {}, void 0, false, {\n            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 11\n        }, undefined)\n    }\n];\nconst AppLayout = ()=>{\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const onClick = (e)=>{\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                className: \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                    theme: \"dark\",\n                    onClick: onClick,\n                    selectedKeys: [\n                        current\n                    ],\n                    mode: \"horizontal\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n                    style: {\n                        padding: \"24px 0\",\n                        background: colorBgContainer\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            padding: \"0 24px\",\n                            minHeight: 280\n                        },\n                        children: current === \"1\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Calendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AppLayout, \"MR8OjKByIBPhNzn/AEe1A0NXS0I=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken\n    ];\n});\n_c = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDa0M7QUFFeEI7QUFDUjtBQUVuQyxNQUFNLEVBQUVPLE9BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdMLHdDQUFNQTtBQUVsQyxNQUFNTSxRQUE0QjtJQUNoQztRQUNFQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsb0JBQU0sOERBQUNYLCtEQUFnQkE7Ozs7O0lBQ3pCO0lBQ0E7UUFDRVMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLG9CQUFNLDhEQUFDViwyREFBWUE7Ozs7O0lBQ3JCO0NBQ0Q7QUFFRCxNQUFNVyxZQUFzQixJQUFNOztJQUNoQyxNQUFNLEVBQ0pDLE9BQU8sRUFBRUMsaUJBQWdCLEVBQUUsR0FDNUIsR0FBR1YsZ0RBQWM7SUFFbEIsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNbUIsVUFBZ0MsQ0FBQ0MsSUFBTTtRQUMzQ0YsV0FBV0UsRUFBRVQsR0FBRztJQUNsQjtJQUVBLHFCQUNFLDhEQUFDUix3Q0FBTUE7OzBCQUNMLDhEQUFDSTtnQkFBT2MsV0FBVTswQkFDaEIsNEVBQUNqQixzQ0FBSUE7b0JBQ0hDLE9BQU07b0JBQ05jLFNBQVNBO29CQUNURyxjQUFjO3dCQUFDTDtxQkFBUTtvQkFDdkJNLE1BQUs7b0JBQ0xkLE9BQU9BOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0wsc0NBQUlBOzs7OzswQkFDTCw4REFBQ0k7Z0JBQVFnQixPQUFPO29CQUFFQyxTQUFTO2dCQUFTOzBCQUNsQyw0RUFBQ3RCLHdDQUFNQTtvQkFBQ3FCLE9BQU87d0JBQUVDLFNBQVM7d0JBQVVDLFlBQVlYO29CQUFpQjs4QkFDL0QsNEVBQUNQO3dCQUFRZ0IsT0FBTzs0QkFBRUMsU0FBUzs0QkFBVUUsV0FBVzt3QkFBSTtrQ0FDakRWLFlBQVkscUJBQU8sOERBQUNYLGlEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0FoQ01POztRQUdBUixnREFBY1c7OztLQUhkSDtBQWtDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3g/NjQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgTWFpbE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIHRoZW1lIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vQ2FsZW5kYXJcIjtcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQgfSA9IExheW91dDtcblxuY29uc3QgaXRlbXM6IE1lbnVQcm9wc1tcIml0ZW1zXCJdID0gW1xuICB7XG4gICAgbGFiZWw6IFwiQ2FsZW5kYXJcIixcbiAgICBrZXk6IFwiMVwiLFxuICAgIGljb246IDxBcHBzdG9yZU91dGxpbmVkIC8+LFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiVXNlcnNcIixcbiAgICBrZXk6IFwiMlwiLFxuICAgIGljb246IDxNYWlsT3V0bGluZWQgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBBcHBMYXlvdXQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcblxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIjFcIik7XG5cbiAgY29uc3Qgb25DbGljazogTWVudVByb3BzW1wib25DbGlja1wiXSA9IChlKSA9PiB7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XG4gICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6IFwiMCA1MHB4XCIgfX0+XG4gICAgICAgIDxMYXlvdXQgc3R5bGU9e3sgcGFkZGluZzogXCIyNHB4IDBcIiwgYmFja2dyb3VuZDogY29sb3JCZ0NvbnRhaW5lciB9fT5cbiAgICAgICAgICA8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMjRweFwiLCBtaW5IZWlnaHQ6IDI4MCB9fT5cbiAgICAgICAgICAgIHtjdXJyZW50ID09PSBcIjFcIiAmJiA8Q2FsZW5kYXIgLz59XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ29udGVudD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJDYWxlbmRhciIsIkhlYWRlciIsIkNvbnRlbnQiLCJpdGVtcyIsImxhYmVsIiwia2V5IiwiaWNvbiIsIkFwcExheW91dCIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrIiwiZSIsImNsYXNzTmFtZSIsInNlbGVjdGVkS2V5cyIsIm1vZGUiLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n"));

/***/ })

});