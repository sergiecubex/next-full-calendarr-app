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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu */ \"./components/Menu/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;\nconst items1 = [\n    \"1\",\n    \"2\",\n    \"3\"\n].map((key)=>({\n        key,\n        label: \"nav \".concat(key)\n    }));\nconst items2 = [\n    _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined,\n    _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LaptopOutlined,\n    _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.NotificationOutlined\n].map((icon, index)=>{\n    const key = String(index + 1);\n    return {\n        key: \"sub\".concat(key),\n        icon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(icon),\n        label: \"subnav \".concat(key),\n        children: new Array(4).fill(null).map((_, j)=>{\n            const subKey = index * 4 + j + 1;\n            return {\n                key: subKey,\n                label: \"option\".concat(subKey)\n            };\n        })\n    };\n});\nconst App = ()=>{\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                className: \"header\"\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n                    style: {\n                        padding: \"24px 0\",\n                        background: colorBgContainer\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                            style: {\n                                background: colorBgContainer\n                            },\n                            width: 200\n                        }, void 0, false, {\n                            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                            style: {\n                                padding: \"0 24px\",\n                                minHeight: 280\n                            },\n                            children: \"Content\"\n                        }, void 0, false, {\n                            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"bv0CbvYGXYMMgN5L/h1ALUvDvmM=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_3__.theme.useToken\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDNkQ7QUFFdEM7QUFDdEI7QUFFM0IsTUFBTSxFQUFFTyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR04sd0NBQU1BO0FBRWpELE1BQU1PLFNBQTZCO0lBQUM7SUFBSztJQUFLO0NBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVM7UUFDL0RBO1FBQ0FDLE9BQU8sT0FBVyxPQUFKRDtJQUNoQjtBQUVBLE1BQU1FLFNBQTZCO0lBQUNaLDJEQUFZQTtJQUFFRiw2REFBY0E7SUFBRUMsbUVBQW9CQTtDQUFDLENBQUNVLEdBQUcsQ0FDekYsQ0FBQ0ksTUFBTUMsUUFBVTtJQUNmLE1BQU1KLE1BQU1LLE9BQU9ELFFBQVE7SUFFM0IsT0FBTztRQUNMSixLQUFLLE1BQVUsT0FBSkE7UUFDWEcsb0JBQU1oQiwwREFBbUIsQ0FBQ2dCO1FBQzFCRixPQUFPLFVBQWMsT0FBSkQ7UUFFakJPLFVBQVUsSUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUMsSUFBSSxFQUFFVixHQUFHLENBQUMsQ0FBQ1csR0FBR0MsSUFBTTtZQUM5QyxNQUFNQyxTQUFTUixRQUFRLElBQUlPLElBQUk7WUFDL0IsT0FBTztnQkFDTFgsS0FBS1k7Z0JBQ0xYLE9BQU8sU0FBZ0IsT0FBUFc7WUFDbEI7UUFDRjtJQUNGO0FBQ0Y7QUFHRixNQUFNQyxNQUFnQixJQUFNOztJQUMxQixNQUFNLEVBQ0pDLE9BQU8sRUFBRUMsaUJBQWdCLEVBQUUsR0FDNUIsR0FBR3ZCLGdEQUFjO0lBRWxCLHFCQUNFLDhEQUFDRCx3Q0FBTUE7OzBCQUNMLDhEQUFDRztnQkFBT3VCLFdBQVU7Ozs7OzswQkFHbEIsOERBQUN4Qiw2Q0FBSUE7Ozs7OzBCQUNMLDhEQUFDRTtnQkFBUXVCLE9BQU87b0JBQUVDLFNBQVM7Z0JBQVM7MEJBQ2xDLDRFQUFDNUIsd0NBQU1BO29CQUFDMkIsT0FBTzt3QkFBRUMsU0FBUzt3QkFBVUMsWUFBWUw7b0JBQWlCOztzQ0FDL0QsOERBQUNsQjs0QkFBTXFCLE9BQU87Z0NBQUVFLFlBQVlMOzRCQUFpQjs0QkFBR00sT0FBTzs7Ozs7O3NDQVN2RCw4REFBQzFCOzRCQUFRdUIsT0FBTztnQ0FBRUMsU0FBUztnQ0FBVUcsV0FBVzs0QkFBSTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakU7R0EzQk1UOztRQUdBckIsZ0RBQWN3Qjs7O0tBSGRIO0FBNkJOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeD82NDc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXB0b3BPdXRsaW5lZCwgTm90aWZpY2F0aW9uT3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB0eXBlIHsgTWVudVByb3BzIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIHRoZW1lIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51JztcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIgfSA9IExheW91dDtcblxuY29uc3QgaXRlbXMxOiBNZW51UHJvcHNbJ2l0ZW1zJ10gPSBbJzEnLCAnMicsICczJ10ubWFwKChrZXkpID0+ICh7XG4gIGtleSxcbiAgbGFiZWw6IGBuYXYgJHtrZXl9YCxcbn0pKTtcblxuY29uc3QgaXRlbXMyOiBNZW51UHJvcHNbJ2l0ZW1zJ10gPSBbVXNlck91dGxpbmVkLCBMYXB0b3BPdXRsaW5lZCwgTm90aWZpY2F0aW9uT3V0bGluZWRdLm1hcChcbiAgKGljb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gU3RyaW5nKGluZGV4ICsgMSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBgc3ViJHtrZXl9YCxcbiAgICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbiksXG4gICAgICBsYWJlbDogYHN1Ym5hdiAke2tleX1gLFxuXG4gICAgICBjaGlsZHJlbjogbmV3IEFycmF5KDQpLmZpbGwobnVsbCkubWFwKChfLCBqKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YktleSA9IGluZGV4ICogNCArIGogKyAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleTogc3ViS2V5LFxuICAgICAgICAgIGxhYmVsOiBgb3B0aW9uJHtzdWJLZXl9YCxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgIH07XG4gIH0sXG4pO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiAnMCA1MHB4JyB9fT5cbiAgICAgICAgPExheW91dCBzdHlsZT17eyBwYWRkaW5nOiAnMjRweCAwJywgYmFja2dyb3VuZDogY29sb3JCZ0NvbnRhaW5lciB9fT5cbiAgICAgICAgICA8U2lkZXIgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3JCZ0NvbnRhaW5lciB9fSB3aWR0aD17MjAwfT5cbiAgICAgICAgICAgIHsvKiA8TWVudVxuICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119XG4gICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgICAgIGl0ZW1zPXtpdGVtczJ9XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L1NpZGVyPlxuICAgICAgICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDI0cHgnLCBtaW5IZWlnaHQ6IDI4MCB9fT5Db250ZW50PC9Db250ZW50PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ29udGVudD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXB0b3BPdXRsaW5lZCIsIk5vdGlmaWNhdGlvbk91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiTGF5b3V0IiwidGhlbWUiLCJNZW51IiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlNpZGVyIiwiaXRlbXMxIiwibWFwIiwia2V5IiwibGFiZWwiLCJpdGVtczIiLCJpY29uIiwiaW5kZXgiLCJTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJBcnJheSIsImZpbGwiLCJfIiwiaiIsInN1YktleSIsIkFwcCIsInRva2VuIiwiY29sb3JCZ0NvbnRhaW5lciIsInVzZVRva2VuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIndpZHRoIiwibWluSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n"));

/***/ })

});