/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/auth"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fbezpechno%2FDesktop%2Fdemostock%2Fpages%2Fauth.tsx&page=%2Fauth!":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fbezpechno%2FDesktop%2Fdemostock%2Fpages%2Fauth.tsx&page=%2Fauth! ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/auth\",\n      function () {\n        return __webpack_require__(/*! ./pages/auth.tsx */ \"./pages/auth.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/auth\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGYmV6cGVjaG5vJTJGRGVza3RvcCUyRmRlbW9zdG9jayUyRnBhZ2VzJTJGYXV0aC50c3gmcGFnZT0lMkZhdXRoISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUFrQjtBQUN6QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/OTE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2F1dGhcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2F1dGgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9hdXRoXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fbezpechno%2FDesktop%2Fdemostock%2Fpages%2Fauth.tsx&page=%2Fauth!\n"));

/***/ }),

/***/ "./lib/firebaseConfig.js":
/*!*******************************!*\
  !*** ./lib/firebaseConfig.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GoogleAuthProvider: function() { return /* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider; },\n/* harmony export */   auth: function() { return /* binding */ auth; },\n/* harmony export */   signInWithPopup: function() { return /* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup; },\n/* harmony export */   signOut: function() { return /* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDZwpvGXELWjD6rNHE_2rsvlqmwGpLmEgI\",\n    authDomain: \"demostock-340e0.firebaseapp.com\",\n    projectId: \"demostock-340e0\",\n    storageBucket: \"demostock-340e0.appspot.com\",\n    messagingSenderId: \"409581841773\",\n    appId: \"1:409581841773:web:41ce699787da744ea87e64\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2VDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ3lDO0FBRXRGLE1BQU1LLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZSCxpQ0FBNEM7SUFDeERLLFdBQVdMLGlCQUEyQztJQUN0RE8sZUFBZVAsNkJBQStDO0lBQzlEUyxtQkFBbUJULGNBQW9EO0lBQ3ZFVyxPQUFPWCwyQ0FBdUM7QUFDaEQ7QUFFQSxNQUFNYSxNQUFNcEIsMkRBQWFBLENBQUNLO0FBQzFCLE1BQU1nQixPQUFPcEIsc0RBQU9BLENBQUNtQjtBQUV5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZmlyZWJhc2VDb25maWcuanM/NmQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldEF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aFBvcHVwLCBzaWduT3V0IH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRFxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuXG5leHBvcnQgeyBhdXRoLCBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25JbldpdGhQb3B1cCwgc2lnbk91dCB9O1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbk91dCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJhcHAiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/firebaseConfig.js\n"));

/***/ }),

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebaseConfig */ \"./lib/firebaseConfig.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Auth() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth, (user)=>{\n            if (user) {\n                setUser(user);\n            } else {\n                setUser(null);\n            }\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const handleGoogleSignIn = async ()=>{\n        const provider = new _lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        try {\n            await (0,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth, provider);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error signing in with Google\", error);\n        }\n    };\n    const handleSignOut = async ()=>{\n        try {\n            await (0,_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.signOut)(_lib_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth);\n            setUser(null);\n        } catch (error) {\n            console.error(\"Error signing out\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded shadow-md text-center\",\n            children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4\",\n                        children: [\n                            \"Welcome, \",\n                            user.displayName,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bezpechno/Desktop/demostock/pages/auth.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSignOut,\n                        className: \"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600\",\n                        children: \"Sign Out\"\n                    }, void 0, false, {\n                        fileName: \"/home/bezpechno/Desktop/demostock/pages/auth.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4\",\n                        children: \"Please sign in with Google\"\n                    }, void 0, false, {\n                        fileName: \"/home/bezpechno/Desktop/demostock/pages/auth.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleGoogleSignIn,\n                        className: \"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600\",\n                        children: \"Sign in with Google\"\n                    }, void 0, false, {\n                        fileName: \"/home/bezpechno/Desktop/demostock/pages/auth.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/home/bezpechno/Desktop/demostock/pages/auth.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bezpechno/Desktop/demostock/pages/auth.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Auth, \"ocZTZ8m72GkfgAfkTHk7sW+OJyw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Auth;\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUMrQztBQUNuRDtBQUNXO0FBQ3pCO0FBRVgsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNVyxTQUFTTixzREFBU0E7SUFFeEJOLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsY0FBY04saUVBQWtCQSxDQUFDTCxxREFBSUEsRUFBRSxDQUFDUTtZQUM1QyxJQUFJQSxNQUFNO2dCQUNSQyxRQUFRRDtZQUNWLE9BQU87Z0JBQ0xDLFFBQVE7WUFDVjtRQUNGO1FBQ0EsT0FBTyxJQUFNRTtJQUNmLEdBQUcsRUFBRTtJQUVMLE1BQU1DLHFCQUFxQjtRQUN6QixNQUFNQyxXQUFXLElBQUlaLG1FQUFrQkE7UUFDdkMsSUFBSTtZQUNGLE1BQU1DLG9FQUFlQSxDQUFDRixxREFBSUEsRUFBRWE7WUFDNUJILE9BQU9JLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNGO0lBRUEsTUFBTUUsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNZCw0REFBT0EsQ0FBQ0gscURBQUlBO1lBQ2xCUyxRQUFRO1FBQ1YsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQkFBcUJBO1FBQ3JDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWlgscUJBQ0M7O2tDQUNFLDhEQUFDWTt3QkFBRUQsV0FBVTs7NEJBQU87NEJBQVVYLEtBQUthLFdBQVc7NEJBQUM7Ozs7Ozs7a0NBQy9DLDhEQUFDQzt3QkFDQ0MsU0FBU047d0JBQ1RFLFdBQVU7a0NBQ1g7Ozs7Ozs7NkNBS0g7O2tDQUNFLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBTzs7Ozs7O2tDQUNwQiw4REFBQ0c7d0JBQ0NDLFNBQVNYO3dCQUNUTyxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQTdEd0JaOztRQUVQSCxrREFBU0E7OztLQUZGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoLnRzeD80MWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aFBvcHVwLCBzaWduT3V0IH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlR29vZ2xlU2lnbkluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpO1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2lnbmluZyBpbiB3aXRoIEdvb2dsZVwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2lnbmluZyBvdXRcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkIHNoYWRvdy1tZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPldlbGNvbWUsIHt1c2VyLmRpc3BsYXlOYW1lfSE8L3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1yZWQtNjAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+UGxlYXNlIHNpZ24gaW4gd2l0aCBHb29nbGU8L3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdvb2dsZVNpZ25Jbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbk91dCIsInVzZVJvdXRlciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIlJlYWN0IiwiQXV0aCIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidW5zdWJzY3JpYmUiLCJoYW5kbGVHb29nbGVTaWduSW4iLCJwcm92aWRlciIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTaWduT3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImRpc3BsYXlOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ }),

/***/ "./node_modules/firebase/app/dist/esm/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ \"./node_modules/@firebase/app/dist/esm/index.esm2017.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _firebase_app__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _firebase_app__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\nvar name = \"firebase\";\nvar version = \"10.12.3\";\n\n/**\r\n * @license\r\n * Copyright 2020 Google LLC\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');\n//# sourceMappingURL=index.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXBwL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnRDtBQUNsQjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9kaXN0L2VzbS9pbmRleC5lc20uanM/NTQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmV4cG9ydCAqIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbnZhciB2ZXJzaW9uID0gXCIxMC4xMi4zXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnYXBwJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/firebase/app/dist/esm/index.esm.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fbezpechno%2FDesktop%2Fdemostock%2Fpages%2Fauth.tsx&page=%2Fauth!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);