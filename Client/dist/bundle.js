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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.jsx */ \"./Client/src/components/board.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      currentPlayer: \"RED\",\n      winner: '',\n      columns: {\n        0: [],\n        1: [],\n        2: [],\n        3: [],\n        4: [],\n        5: [],\n        6: []\n      }\n    };\n    _this.updateColumns = _this.updateColumns.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"updateColumns\",\n    value: function updateColumns(event) {\n      var target = event.target;\n      var number = event.target.attributes.x.value;\n\n      if (this.state.columns[number].length < 6) {\n        var temp = this.state.columns[number].slice();\n        temp.push(this.state.currentPlayer);\n        var copy = this.state.columns;\n        copy[number] = temp;\n        this.setState({\n          columns: copy\n        });\n        this.changePlayer();\n      }\n\n      this.checkColumns();\n      this.checkRows();\n    }\n  }, {\n    key: \"checkColumns\",\n    value: function checkColumns() {\n      for (var num in this.state.columns) {\n        var tempCol = this.state.columns[num];\n\n        for (var i = 0; i < tempCol.length; i++) {\n          if (tempCol[i] === \"RED\" && tempCol[i + 1] === \"RED\" && tempCol[i + 2] === \"RED\" && tempCol[i + 3] === \"RED\") {\n            this.setState({\n              winner: \"RED\"\n            });\n            alert(\"RED WINS!\");\n          } else if (tempCol[i] === \"BLUE\" && tempCol[i + 1] === \"BLUE\" && tempCol[i + 2] === \"BLUE\" && tempCol[i + 3] === \"BLUE\") {\n            this.setState({\n              winner: \"BLUE\"\n            });\n            alert(\"BLUE WINS!\");\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkRows\",\n    value: function checkRows() {\n      for (var num in this.state.columns) {\n        for (var i = 0; i < this.state.columns[num].length; i++) {\n          if (this.state.columns[num].length - 1) {\n            break;\n          }\n\n          if (this.state.columns[num][i] === \"RED\" && this.state.columns[num + 1][i] === \"RED\" && this.state.columns[num + 2][i] === \"RED\" && this.state.columns[num + 3][i] === \"RED\") {\n            this.setState({\n              winner: \"RED\"\n            });\n            alert(\"RED WINS!\");\n          } else if (this.state.columns[num][i] === \"BLUE\" && this.state.columns[num + 1][i] === \"BLUE\" && this.state.columns[num + 2][i] === \"BLUE\" && this.state.columns[num + 3][i] === \"BLUE\") {\n            this.setState({\n              winner: \"BLUE\"\n            });\n            alert(\"BLUE WINS!\");\n          }\n        }\n      }\n    }\n  }, {\n    key: \"checkDiagonals\",\n    value: function checkDiagonals() {}\n  }, {\n    key: \"checkTies\",\n    value: function checkTies() {\n      if (!this.checkColumns() || !checkRows() || !checkDiagonals) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"changePlayer\",\n    value: function changePlayer() {\n      if (this.state.currentPlayer === \"RED\") {\n        this.setState({\n          currentPlayer: \"BLUE\"\n        });\n      } else {\n        this.setState({\n          currentPlayer: \"RED\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        id: \"board\"\n      }, React.createElement(_board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        updateColumns: this.updateColumns,\n        columns: this.state.columns\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4PzFkYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQuanN4J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFBsYXllcjogXCJSRURcIixcbiAgICAgIHdpbm5lcjogJycsXG4gICAgICBjb2x1bW5zOiB7XG4gICAgICAgIDA6IFtdLFxuICAgICAgICAxOiBbXSxcbiAgICAgICAgMjogW10sXG4gICAgICAgIDM6IFtdLFxuICAgICAgICA0OiBbXSxcbiAgICAgICAgNTogW10sXG4gICAgICAgIDY6IFtdIFxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVDb2x1bW5zID0gdGhpcy51cGRhdGVDb2x1bW5zLmJpbmQodGhpcyk7XG4gIH1cbiAgdXBkYXRlQ29sdW1ucyAoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgbnVtYmVyID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMueC52YWx1ZTtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zW251bWJlcl0ubGVuZ3RoIDwgNikge1xuICAgICAgbGV0IHRlbXAgPSB0aGlzLnN0YXRlLmNvbHVtbnNbbnVtYmVyXS5zbGljZSgpO1xuICAgICAgdGVtcC5wdXNoKHRoaXMuc3RhdGUuY3VycmVudFBsYXllcik7XG4gICAgICBsZXQgY29weSA9IHRoaXMuc3RhdGUuY29sdW1ucztcbiAgICAgIGNvcHlbbnVtYmVyXSA9IHRlbXA7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29sdW1uczogY29weVxuICAgICAgfSlcbiAgICB0aGlzLmNoYW5nZVBsYXllcigpO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrQ29sdW1ucygpO1xuICAgIHRoaXMuY2hlY2tSb3dzKCk7XG4gIH1cbiAgY2hlY2tDb2x1bW5zKCkge1xuICAgIGZvciAobGV0IG51bSBpbiB0aGlzLnN0YXRlLmNvbHVtbnMpIHtcbiAgICAgIGNvbnN0IHRlbXBDb2wgPSB0aGlzLnN0YXRlLmNvbHVtbnNbbnVtXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wQ29sLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZW1wQ29sW2ldID09PSBcIlJFRFwiICYmIHRlbXBDb2xbaSsxXSA9PT0gXCJSRURcIiAmJiB0ZW1wQ29sW2krMl0gPT09IFwiUkVEXCIgJiYgdGVtcENvbFtpKzNdID09PSBcIlJFRFwiKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aW5uZXI6IFwiUkVEXCJcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFsZXJ0KFwiUkVEIFdJTlMhXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXBDb2xbaV0gPT09IFwiQkxVRVwiICYmIHRlbXBDb2xbaSsxXSA9PT0gXCJCTFVFXCIgJiYgdGVtcENvbFtpKzJdID09PSBcIkJMVUVcIiAmJiB0ZW1wQ29sW2krM10gPT09IFwiQkxVRVwiKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aW5uZXI6IFwiQkxVRVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhbGVydChcIkJMVUUgV0lOUyFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1Jvd3MgKCkge1xuICAgIGZvciAobGV0IG51bSBpbiB0aGlzLnN0YXRlLmNvbHVtbnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb2x1bW5zW251bV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1uc1tudW1dLmxlbmd0aC0xKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sdW1uc1tudW1dW2ldID09PSBcIlJFRFwiICYmIHRoaXMuc3RhdGUuY29sdW1uc1tudW0rMV1baV0gPT09IFwiUkVEXCIgJiYgdGhpcy5zdGF0ZS5jb2x1bW5zW251bSsyXVtpXSA9PT0gXCJSRURcIiAmJiB0aGlzLnN0YXRlLmNvbHVtbnNbbnVtKzNdW2ldID09PSBcIlJFRFwiKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aW5uZXI6IFwiUkVEXCJcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFsZXJ0KFwiUkVEIFdJTlMhXCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb2x1bW5zW251bV1baV0gPT09IFwiQkxVRVwiICYmIHRoaXMuc3RhdGUuY29sdW1uc1tudW0rMV1baV0gPT09IFwiQkxVRVwiICYmIHRoaXMuc3RhdGUuY29sdW1uc1tudW0rMl1baV0gPT09IFwiQkxVRVwiICYmIHRoaXMuc3RhdGUuY29sdW1uc1tudW0rM11baV0gPT09IFwiQkxVRVwiKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aW5uZXI6IFwiQkxVRVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhbGVydChcIkJMVUUgV0lOUyFcIikgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0RpYWdvbmFscyAoKSB7XG5cbiAgfVxuXG4gIGNoZWNrVGllcyAoKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrQ29sdW1ucygpIHx8ICFjaGVja1Jvd3MoKSB8fCAhY2hlY2tEaWFnb25hbHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNoYW5nZVBsYXllciAoKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyID09PSBcIlJFRFwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFBsYXllcjogXCJCTFVFXCJcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50UGxheWVyOiBcIlJFRFwiXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPEJvYXJkIHVwZGF0ZUNvbHVtbnM9e3RoaXMudXBkYXRlQ29sdW1uc30gY29sdW1ucz17dGhpcy5zdGF0ZS5jb2x1bW5zfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFIQTtBQWFBO0FBZkE7QUFnQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7QUF2R0E7QUFDQTtBQXlHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Client/src/components/app.jsx\n");

/***/ }),

/***/ "./Client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./Client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _column_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column.jsx */ \"./Client/src/components/column.jsx\");\n\n\nfunction Board(_ref) {\n  var updateColumns = _ref.updateColumns,\n      columns = _ref.columns;\n  return React.createElement(\"div\", null, React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    updateColumns: updateColumns,\n    columns: columns[0],\n    x: 0\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    updateColumns: updateColumns,\n    columns: columns[1],\n    x: 1\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    updateColumns: updateColumns,\n    columns: columns[2],\n    x: 2\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    updateColumns: updateColumns,\n    columns: columns[3],\n    x: 3\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    updateColumns: updateColumns,\n    columns: columns[4],\n    x: 4\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    updateColumns: updateColumns,\n    columns: columns[5],\n    x: 5\n  }), React.createElement(_column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    updateColumns: updateColumns,\n    columns: columns[6],\n    x: 6\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQ2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD8wYWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uanN4J1xuXG5mdW5jdGlvbiBCb2FyZCAoe3VwZGF0ZUNvbHVtbnMsIGNvbHVtbnN9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb2x1bW4gdXBkYXRlQ29sdW1ucz17dXBkYXRlQ29sdW1uc30gY29sdW1ucz17Y29sdW1uc1swXX0geD17MH0vPlxuICAgICAgPENvbHVtbiB1cGRhdGVDb2x1bW5zPXt1cGRhdGVDb2x1bW5zfSBjb2x1bW5zPXtjb2x1bW5zWzFdfSB4PXsxfS8+XG4gICAgICA8Q29sdW1uIHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbHVtbnM9e2NvbHVtbnNbMl19IHg9ezJ9Lz5cbiAgICAgIDxDb2x1bW4gdXBkYXRlQ29sdW1ucz17dXBkYXRlQ29sdW1uc30gY29sdW1ucz17Y29sdW1uc1szXX0geD17M30vPlxuICAgICAgPENvbHVtbiB1cGRhdGVDb2x1bW5zPXt1cGRhdGVDb2x1bW5zfSBjb2x1bW5zPXtjb2x1bW5zWzRdfSB4PXs0fS8+XG4gICAgICA8Q29sdW1uIHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbHVtbnM9e2NvbHVtbnNbNV19IHg9ezV9Lz5cbiAgICAgIDxDb2x1bW4gdXBkYXRlQ29sdW1ucz17dXBkYXRlQ29sdW1uc30gY29sdW1ucz17Y29sdW1uc1s2XX0geD17Nn0vPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Client/src/components/board.jsx\n");

/***/ }),

/***/ "./Client/src/components/column.jsx":
/*!******************************************!*\
  !*** ./Client/src/components/column.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.jsx */ \"./Client/src/components/square.jsx\");\n\n\nfunction Column(_ref) {\n  var updateColumns = _ref.updateColumns,\n      x = _ref.x,\n      columns = _ref.columns;\n  return React.createElement(\"div\", {\n    className: \"column\"\n  }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 5,\n    updateColumns: updateColumns,\n    color: columns[5],\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 4,\n    updateColumns: updateColumns,\n    color: columns[4],\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 3,\n    updateColumns: updateColumns,\n    color: columns[3],\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 2,\n    updateColumns: updateColumns,\n    color: columns[2],\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 1,\n    updateColumns: updateColumns,\n    color: columns[1],\n    x: x\n  }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    y: 0,\n    updateColumns: updateColumns,\n    color: columns[0],\n    x: x\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvY29sdW1uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9zcmMvY29tcG9uZW50cy9jb2x1bW4uanN4PzMwYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZS5qc3gnXG5cbmZ1bmN0aW9uIENvbHVtbiAoe3VwZGF0ZUNvbHVtbnMsIHgsIGNvbHVtbnN9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICA8U3F1YXJlIHk9ezV9IHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbG9yPXtjb2x1bW5zWzVdfSB4PXt4fT48L1NxdWFyZT5cbiAgICA8U3F1YXJlIHk9ezR9IHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbG9yPXtjb2x1bW5zWzRdfSB4PXt4fT48L1NxdWFyZT5cbiAgICA8U3F1YXJlIHk9ezN9IHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbG9yPXtjb2x1bW5zWzNdfSB4PXt4fT48L1NxdWFyZT5cbiAgICA8U3F1YXJlIHk9ezJ9IHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbG9yPXtjb2x1bW5zWzJdfSB4PXt4fT48L1NxdWFyZT5cbiAgICA8U3F1YXJlIHk9ezF9IHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbG9yPXtjb2x1bW5zWzFdfSB4PXt4fT48L1NxdWFyZT5cbiAgICA8U3F1YXJlIHk9ezB9IHVwZGF0ZUNvbHVtbnM9e3VwZGF0ZUNvbHVtbnN9IGNvbG9yPXtjb2x1bW5zWzBdfSB4PXt4fT48L1NxdWFyZT5cbiBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Client/src/components/column.jsx\n");

/***/ }),

/***/ "./Client/src/components/square.jsx":
/*!******************************************!*\
  !*** ./Client/src/components/square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Square(_ref) {\n  var updateColumns = _ref.updateColumns,\n      x = _ref.x,\n      y = _ref.y,\n      color = _ref.color;\n  return React.createElement(\"div\", {\n    onClick: function onClick(e) {\n      return updateColumns(e);\n    }\n  }, React.createElement(\"button\", {\n    className: \"square\",\n    x: x,\n    y: y,\n    style: {\n      'backgroundColor': color\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9DbGllbnQvc3JjL2NvbXBvbmVudHMvc3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9zcmMvY29tcG9uZW50cy9zcXVhcmUuanN4PzY1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3F1YXJlICh7dXBkYXRlQ29sdW1ucywgeCwgeSwgY29sb3J9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4gdXBkYXRlQ29sdW1ucyhlKX0+XG4gICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3F1YXJlXCIgeD17eH0geT17eX0gc3R5bGU9e3snYmFja2dyb3VuZENvbG9yJzogY29sb3J9fT48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Client/src/components/square.jsx\n");

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