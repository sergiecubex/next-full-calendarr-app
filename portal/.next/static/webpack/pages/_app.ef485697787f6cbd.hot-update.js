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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Header , Content  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nconst items = [\n    {\n        label: \"Calendar\",\n        key: \"1\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, {\n            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Users\",\n        key: \"2\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}, void 0, false, {\n            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 11\n        }, undefined)\n    }\n];\nconst AppLayout = (param)=>{\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"1\");\n    const onClick = (e)=>{\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                className: \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                    theme: \"dark\",\n                    onClick: onClick,\n                    selectedKeys: [\n                        current\n                    ],\n                    mode: \"horizontal\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {}, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                    style: {\n                        padding: \"24px 0\",\n                        background: colorBgContainer\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            padding: \"0 24px\",\n                            minHeight: 280\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AppLayout, \"MR8OjKByIBPhNzn/AEe1A0NXS0I=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFpQztBQUNrQztBQUV4QjtBQUczQyxNQUFNLEVBQUVNLE9BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdKLHdDQUFNQTtBQUVsQyxNQUFNSyxRQUE0QjtJQUNoQztRQUNFQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsb0JBQU0sOERBQUNWLCtEQUFnQkE7Ozs7O0lBQ3pCO0lBQ0E7UUFDRVEsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLG9CQUFNLDhEQUFDVCwyREFBWUE7Ozs7O0lBQ3JCO0NBQ0Q7QUFFRCxNQUFNVSxZQUFtRCxTQUErQztRQUE5QyxFQUFFQyxTQUFRLEVBQStCOztJQUNqRyxNQUFNLEVBQ0pDLE9BQU8sRUFBRUMsaUJBQWdCLEVBQUUsR0FDNUIsR0FBR1YsZ0RBQWM7SUFFbEIsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNbUIsVUFBZ0MsQ0FBQ0MsSUFBTTtRQUMzQ0YsV0FBV0UsRUFBRVYsR0FBRztJQUNsQjtJQUVBLHFCQUNFLDhEQUFDUCx3Q0FBTUE7OzBCQUNMLDhEQUFDRztnQkFBT2UsV0FBVTswQkFDaEIsNEVBQUNqQixzQ0FBSUE7b0JBQ0hDLE9BQU07b0JBQ05jLFNBQVNBO29CQUNURyxjQUFjO3dCQUFDTDtxQkFBUTtvQkFDdkJNLE1BQUs7b0JBQ0xmLE9BQU9BOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0osc0NBQUlBOzs7OzswQkFDTCw4REFBQ0c7Z0JBQVFpQixPQUFPO29CQUFFQyxTQUFTO2dCQUFTOzBCQUNsQyw0RUFBQ3RCLHdDQUFNQTtvQkFBQ3FCLE9BQU87d0JBQUVDLFNBQVM7d0JBQVVDLFlBQVlYO29CQUFpQjs4QkFDL0QsNEVBQUNSO3dCQUFRaUIsT0FBTzs0QkFBRUMsU0FBUzs0QkFBVUUsV0FBVzt3QkFBSTtrQ0FDakRkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7R0FqQ01EOztRQUdBUCxnREFBY1c7OztLQUhkSjtBQW1DTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3g/NjQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgTWFpbE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIHRoZW1lIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vQ2FsZW5kYXJcIjtcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQgfSA9IExheW91dDtcblxuY29uc3QgaXRlbXM6IE1lbnVQcm9wc1tcIml0ZW1zXCJdID0gW1xuICB7XG4gICAgbGFiZWw6IFwiQ2FsZW5kYXJcIixcbiAgICBrZXk6IFwiMVwiLFxuICAgIGljb246IDxBcHBzdG9yZU91dGxpbmVkIC8+LFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiVXNlcnNcIixcbiAgICBrZXk6IFwiMlwiLFxuICAgIGljb246IDxNYWlsT3V0bGluZWQgLz4sXG4gIH0sXG5dO1xuXG5jb25zdCBBcHBMYXlvdXQ6IFJlYWN0LkZDPHtjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlfT4gPSAoeyBjaGlsZHJlbiB9OiB7Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZX0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRva2VuOiB7IGNvbG9yQmdDb250YWluZXIgfSxcbiAgfSA9IHRoZW1lLnVzZVRva2VuKCk7XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCIxXCIpO1xuXG4gIGNvbnN0IG9uQ2xpY2s6IE1lbnVQcm9wc1tcIm9uQ2xpY2tcIl0gPSAoZSkgPT4ge1xuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfVxuICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiBcIjAgNTBweFwiIH19PlxuICAgICAgICA8TGF5b3V0IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjRweCAwXCIsIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIgfX0+XG4gICAgICAgICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogXCIwIDI0cHhcIiwgbWluSGVpZ2h0OiAyODAgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICB7Lyoge2N1cnJlbnQgPT09IFwiMVwiICYmIDxDYWxlbmRhciAvPn0gKi99XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ29udGVudD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJIZWFkZXIiLCJDb250ZW50IiwiaXRlbXMiLCJsYWJlbCIsImtleSIsImljb24iLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrIiwiZSIsImNsYXNzTmFtZSIsInNlbGVjdGVkS2V5cyIsIm1vZGUiLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n"));

/***/ })

});