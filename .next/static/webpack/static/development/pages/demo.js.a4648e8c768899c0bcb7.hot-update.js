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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/jmklefeker/c74/blog/comps/demo.js";



function Square(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
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

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Square, {
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3149376690",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3149376690" + " " + "board-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3149376690" + " " + "board-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3149376690" + " " + "board-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3149376690",
        __self: this
      }, "body.jsx-3149376690{font:14px \"Century Gothic\",Futura,sans-serif;margin:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}ol.jsx-3149376690,ul.jsx-3149376690{padding-left:30px;}.board-row.jsx-3149376690:after{clear:both;content:\"\";display:table;}.status.jsx-3149376690{margin-bottom:10px;}.square.jsx-3149376690{background:#fff;border:1px solid #999;float:left;font-size:24px;font-weight:bold;line-height:34px;height:34px;margin-right:-1px;margin-top:-1px;padding:0;text-align:center;width:34px;}.square.jsx-3149376690:focus{outline:none;}.kbd-navigation.jsx-3149376690 .square.jsx-3149376690:focus{background:#ddd;}.game.jsx-3149376690{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.game-info.jsx-3149376690{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL2M3NC9ibG9nL2NvbXBzL2RlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NvQixBQUdrRCxBQVE3QixBQUlQLEFBTVEsQUFJSCxBQWVILEFBSUcsQUFJSCxBQUtJLFdBckNOLEVBeUJiLEdBZndCLEFBbUJ4QixDQVNBLENBMUNBLENBVUEsR0FMZ0IsY0FDaEIsRUFTYSxPQXZCQyxJQXdCRyxRQXZCRixPQXdCSSxVQW9CRSxPQW5CRixpQkFDTCxZQUNNLGtCQUNGLEdBM0JFLFlBNENwQixDQWhCWSxVQUNRLGtCQUNQLFdBQ2IsaURBOUJ5QixtR0FDekIiLCJmaWxlIjoiL1VzZXJzL2pta2xlZmVrZXIvYzc0L2Jsb2cvY29tcHMvZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxuICAgICAge3Byb3BzLnZhbHVlfVxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLypyZW5kZXJTcXVhcmUgZ2V0cyB0aGUgYWN0dWFsIGxvY2F0aW9uIG9mIHdoaWNoIHNxdWFyZSBoYXMgYmVlbiBjbGlja2VkIGZyb20gdGhlIGdhbWUgY29udHJvbGxlciBhbmQgc2VuZHMgdGhhdCBpbmZvcm1hdGlvbiB0byBmdW5jIFNxdWFyZSBmb3IgdGhlIGRpc3BsYXkqL1xuICByZW5kZXJTcXVhcmUoaSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3F1YXJlXG4gICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNxdWFyZXNbaV19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayhpKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDEpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDMpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg0KX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg2KX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNyl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICBmb250OiAxNHB4IFwiQ2VudHVyeSBHb3RoaWNcIiwgRnV0dXJhLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm9sLCB1bCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmJvYXJkLXJvdzphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnN0YXR1cyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zcXVhcmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzNHB4O1xufVxuXG4uc3F1YXJlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmtiZC1uYXZpZ2F0aW9uIC5zcXVhcmU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4uZ2FtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5nYW1lLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhpc3Rvcnk6IFt7IC8qIGhpc3RvcnkgaXMgYW4gYXJyYXkgb2Ygc2xpY2VzIG9mIHNxdWFyZXMgYXJyYXkgKi9cbiAgICAgICAgc3F1YXJlczogQXJyYXkoOSkuZmlsbChudWxsKVxuICAgICAgfV0sXG4gICAgICBzdGVwTnVtYmVyOiAwLFxuICAgICAgeElzTmV4dDogdHJ1ZSAvKmluaXQgYXMgdHJ1ZSovXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGkpIHtcbiAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHRoaXMuc3RhdGUuc3RlcE51bWJlciArIDEpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgY29uc3Qgc3F1YXJlcyA9IGN1cnJlbnQuc3F1YXJlcy5zbGljZSgpO1xuICAgIGlmIChjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzcXVhcmVzW2ldID0gdGhpcy5zdGF0ZS54SXNOZXh0ID8gXCJYXCIgOiBcIk9cIjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnkuY29uY2F0KFt7XG4gICAgICAgIHNxdWFyZXM6IHNxdWFyZXNcbiAgICAgIH1dKSxcbiAgICAgIHN0ZXBOdW1iZXI6IGhpc3RvcnkubGVuZ3RoLFxuICAgICAgeElzTmV4dDogIXRoaXMuc3RhdGUueElzTmV4dFxuICAgIH0pO1xuICB9XG4gIFxuICBqdW1wVG8oc3RlcCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RlcE51bWJlcjogc3RlcCxcbiAgICAgIHhJc05leHQ6IChzdGVwICUgMikgPT09IDBcbiAgICB9KTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnk7XG4gICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbdGhpcy5zdGF0ZS5zdGVwTnVtYmVyXTtcbiAgICBjb25zdCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcbiAgICBcbiAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubWFwKChzdGVwLG1vdmUpID0+IHtcbiAgICAgIGNvbnN0IGRlc2MgPSBtb3ZlID8gXG4gICAgICAgICAgICAnR28gdG8gbW92ZSAjICcgKyBtb3ZlIDpcbiAgICAgICdHbyB0byBnYW1lIHN0YXJ0JztcbiAgICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5ID17bW92ZX0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmp1bXBUbyhtb3ZlKX0+e2Rlc2N9PC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgbGV0IHN0YXR1cztcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICBzdGF0dXMgPSAnV2lubmVyOiAnICsgd2lubmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSAnTmV4dCBwbGF5ZXI6ICcgKyAodGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ib2FyZFwiPlxuICAgICAgICAgIDxCb2FyZFxuICAgICAgICAgICAgc3F1YXJlcz17Y3VycmVudC5zcXVhcmVzfVxuICAgICAgICAgICAgb25DbGljaz17aSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtaW5mb1wiPlxuICAgICAgICAgIDxkaXY+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICA8b2w+e21vdmVzfTwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB7XG4gIGNvbnN0IGxpbmVzID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMywgNCwgNV0sXG4gICAgWzYsIDcsIDhdLFxuICAgIFswLCAzLCA2XSxcbiAgICBbMSwgNCwgN10sXG4gICAgWzIsIDUsIDhdLFxuICAgIFswLCA0LCA4XSxcbiAgICBbMiwgNCwgNl0sXG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXTtcbiAgICBpZiAoc3F1YXJlc1thXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2JdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbY10pIHtcbiAgICAgIHJldHVybiBzcXVhcmVzW2FdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsgXG4iXX0= */\n/*@ sourceURL=/Users/jmklefeker/c74/blog/comps/demo.js */"));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

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
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: move,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          onClick: function onClick() {
            return _this3.jumpTo(move);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
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

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "game-board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Board, {
        squares: current.squares,
        onClick: function onClick(i) {
          return _this3.handleClick(i);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "game-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, status), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, moves)));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // ========================================


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
//# sourceMappingURL=demo.js.a4648e8c768899c0bcb7.hot-update.js.map