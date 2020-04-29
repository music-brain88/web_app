(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./build/react_rust_wasm.js":
/*!**********************************!*\
  !*** ./build/react_rust_wasm.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.__wbg_alert_e3f8b32a72cc3799 = undefined;\nexports.big_computation = big_computation;\nexports.sample = sample;\n\nvar _react_rust_wasm_bg = __webpack_require__(/*! ./react_rust_wasm_bg.wasm */ \"./build/react_rust_wasm_bg.wasm\");\n\nvar wasm = _interopRequireWildcard(_react_rust_wasm_bg);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nvar cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nvar cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction big_computation() {\n    wasm.big_computation();\n}\n\n/**\n*/\nfunction sample() {\n    wasm.sample();\n}\n\nvar __wbg_alert_e3f8b32a72cc3799 = exports.__wbg_alert_e3f8b32a72cc3799 = function __wbg_alert_e3f8b32a72cc3799(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n//# sourceURL=webpack:///./build/react_rust_wasm.js?");

/***/ }),

/***/ "./build/react_rust_wasm_bg.wasm":
/*!***************************************!*\
  !*** ./build/react_rust_wasm_bg.wasm ***!
  \***************************************/
/*! exports provided: memory, big_computation, sample */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./react_rust_wasm.js */ \"./build/react_rust_wasm.js\");\n/* harmony import */ var m0_default = /*#__PURE__*/__webpack_require__.n(m0);\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./build/react_rust_wasm_bg.wasm?");

/***/ })

}]);