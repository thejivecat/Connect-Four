/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./Client/src/components/app.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.jsx */ \"./Client/src/components/board.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      columns: Array(7).fill(Array(6).fill(null)),\n      rows: Array(6).fill(Array(7).fill(null))\n    };\n    _this.handler = _this.handler.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"handler\",\n    value: function handler(event) {\n      console.log(this.state);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        id: \"board\"\n      }, React.createElement(_board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        handler: this.handler\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4PzFkYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQuanN4J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29sdW1uczogQXJyYXkoNykuZmlsbChBcnJheSg2KS5maWxsKG51bGwpKSxcbiAgICAgIHJvd3M6IEFycmF5KDYpLmZpbGwoQXJyYXkoNykuZmlsbChudWxsKSlcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlciA9IHRoaXMuaGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZXIgKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPEJvYXJkIGhhbmRsZXI9e3RoaXMuaGFuZGxlcn0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBT0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTs7OztBQWxCQTtBQUNBO0FBb0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Client/src/components/app.jsx\n");

/***/ }),

/***/ "./Client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./Client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _column_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column.jsx */ \"./Client/src/components/column.jsx\");\n\n\nfunction Board(_ref) {\n  var handler = _ref.handler;\n  return React.createElement(\"div\", null, React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    handler: handler,\n    x: 0\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    handler: handler,\n    x: 1\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    handler: handler,\n    x: 2\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    handler: handler,\n    x: 3\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    handler: handler,\n    x: 4\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    handler: handler,\n    x: 5\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    handler: handler,\n    x: 6\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQ2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD8wYWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uanN4J1xuXG5mdW5jdGlvbiBCb2FyZCAoe2hhbmRsZXJ9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb2x1bW4gaGFuZGxlcj17aGFuZGxlcn0geD17MH0vPlxuICAgICAgPENvbHVtbiBoYW5kbGVyPXtoYW5kbGVyfSB4PXsxfS8+XG4gICAgICA8Q29sdW1uIGhhbmRsZXI9e2hhbmRsZXJ9IHg9ezJ9Lz5cbiAgICAgIDxDb2x1bW4gaGFuZGxlcj17aGFuZGxlcn0geD17M30vPlxuICAgICAgPENvbHVtbiBoYW5kbGVyPXtoYW5kbGVyfSB4PXs0fS8+XG4gICAgICA8Q29sdW1uIGhhbmRsZXI9e2hhbmRsZXJ9IHg9ezV9Lz5cbiAgICAgIDxDb2x1bW4gaGFuZGxlcj17aGFuZGxlcn0geD17Nn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Client/src/components/board.jsx\n");

/***/ }),

/***/ "./Client/src/components/column.jsx":
/*!******************************************!*\
  !*** ./Client/src/components/column.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.jsx */ \"./Client/src/components/square.jsx\");\n\n\nfunction Column(_ref) {\n  var handler = _ref.handler,\n      x = _ref.x;\n  return React.createElement(\"div\", {\n    className: \"column\"\n  }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 5,\n    handler: handler,\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 4,\n    handler: handler,\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 3,\n    handler: handler,\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 2,\n    handler: handler,\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 1,\n    handler: handler,\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 0,\n    handler: handler,\n    x: x\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvY29sdW1uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9zcmMvY29tcG9uZW50cy9jb2x1bW4uanN4PzMwYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZS5qc3gnXG5cbmZ1bmN0aW9uIENvbHVtbiAoe2hhbmRsZXIsIHh9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICA8U3F1YXJlIHk9ezV9IGhhbmRsZXI9e2hhbmRsZXJ9IHg9e3h9PjwvU3F1YXJlPlxuICAgIDxTcXVhcmUgeT17NH0gaGFuZGxlcj17aGFuZGxlcn0geD17eH0+PC9TcXVhcmU+XG4gICAgPFNxdWFyZSB5PXszfSBoYW5kbGVyPXtoYW5kbGVyfSB4PXt4fT48L1NxdWFyZT5cbiAgICA8U3F1YXJlIHk9ezJ9IGhhbmRsZXI9e2hhbmRsZXJ9IHg9e3h9PjwvU3F1YXJlPlxuICAgIDxTcXVhcmUgeT17MX0gaGFuZGxlcj17aGFuZGxlcn0geD17eH0+PC9TcXVhcmU+XG4gICAgPFNxdWFyZSB5PXswfSBoYW5kbGVyPXtoYW5kbGVyfSB4PXt4fT48L1NxdWFyZT5cbiBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Client/src/components/column.jsx\n");

/***/ }),

/***/ "./Client/src/components/square.jsx":
/*!******************************************!*\
  !*** ./Client/src/components/square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Square(_ref) {\n  var handler = _ref.handler,\n      x = _ref.x,\n      y = _ref.y;\n  return React.createElement(\"div\", {\n    onClick: function onClick(e) {\n      return handler(e);\n    }\n  }, React.createElement(\"button\", {\n    className: \"square\",\n    x: x,\n    y: y\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvc3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9zcmMvY29tcG9uZW50cy9zcXVhcmUuanN4PzY1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3F1YXJlICh7aGFuZGxlciwgeCwgeX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVyKGUpfT5cbiAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzcXVhcmVcIiB4PXt4fSB5PXt5fT48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Client/src/components/square.jsx\n");

/***/ }),

/***/ "./Client/src/index.jsx":
/*!******************************!*\
  !*** ./Client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app.jsx */ \"./Client/src/components/app.jsx\");\n\nReactDOM.render(React.createElement(_components_app_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9zcmMvaW5kZXguanN4PzNhMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmpzeCdcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Client/src/index.jsx\n");

/***/ })

/******/ });