webpackHotUpdate("static/development/pages/demo.js",{

/***/ "./comps/demo.js":
/*!***********************!*\
  !*** ./comps/demo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/jmklefeker/c74/blog/comps/demo.js";


function Square(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    className: "square",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.value);
}

var Board =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Board, _React$Component);

  function Board() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Board);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Board).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Board, [{
    key: "renderSquare",

    /*renderSquare gets the actual location of which square has been clicked from the game controller and sends that information to func Square for the display*/
    value: function renderSquare(i) {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Square, {
        value: this.props.squares[i],
        onClick: function onClick() {
          return _this.props.onClick(i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "board-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "board-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "board-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Game =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Game, _React$Component2);

  function Game(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Game);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Game).call(this, props));
    _this2.state = {
      history: [{
        /* history is an array of slices of squares array */
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
      /*init as true*/

    };
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Game, [{
    key: "handleClick",
    value: function handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = calculateWinner(current.squares);
      var moves = history.map(function (step, move) {
        var desc = move ? 'Go to move # ' + move : 'Go to game start';
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: move,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: function onClick() {
            return _this3.jumpTo(move);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, desc));
      });
      var status;

      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "game-board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Board, {
        squares: current.squares,
        onClick: function onClick(i) {
          return _this3.handleClick(i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "game-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, status), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, moves)));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // ========================================


function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=demo.js.96822c48d96a78a1bfae.hot-update.js.map