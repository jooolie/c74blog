webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/sound.js":
/*!************************!*\
  !*** ./comps/sound.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_tone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tone */ "./node_modules/react-tone/dist/index.js");
/* harmony import */ var react_tone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tone__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/jmklefeker/c74/blog/comps/sound.js";





var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToneA", function () {
      _this.setState({
        isTonePlaying: true,
        frequency: 250
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToneS", function () {
      _this.setState({
        isTonePlaying: true,
        frequency: 300
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToneM", function () {
      _this.setState({
        isTonePlaying: true,
        frequency: 350
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToneR", function () {
      _this.setState({
        isTonePlaying: true,
        frequency: 400
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "playToneA", function () {
      _this.audioFile.play();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToneStop", function () {
      _this.setState({
        isTonePlaying: false
      });
    });

    _this.audioFile = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.state = {
      isTonePlaying: false,
      frequency: 100,
      length: 1000,
      volume: 1
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isTonePlaying = _this$state.isTonePlaying,
          frequency = _this$state.frequency,
          length = _this$state.length,
          volume = _this$state.volume;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "flex",
        className: "jsx-3997146191",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "title",
        className: "jsx-3997146191",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        "data-letter": "A",
        onMouseOver: this.playToneA,
        className: "jsx-3997146191" + " " + "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        "data-letter": "S",
        onMouseOver: this.handleToneS,
        className: "jsx-3997146191" + " " + "b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        "data-letter": "M",
        onMouseOver: this.handleToneM,
        className: "jsx-3997146191" + " " + "e",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        "data-letter": "R",
        onMouseOver: this.handleToneR,
        className: "jsx-3997146191" + " " + "d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: this.audioFile,
        src: "https://en.wikipedia.org/wiki/File:JOHN_MICHEL_CELLO-J_S_BACH_CELLO_SUITE_1_in_G_Prelude.ogg",
        className: "jsx-3997146191",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "caption",
        className: "jsx-3997146191",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3997146191",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "hover over the letters above")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_tone__WEBPACK_IMPORTED_MODULE_10___default.a, {
        play: isTonePlaying,
        onStop: this.handleToneStop,
        frequency: frequency,
        volume: volume,
        length: length / 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3997146191",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Modak|Press+Start+2P|Shrikhand|VT323&display=swap');*.jsx-3997146191,*.jsx-3997146191:before,*.jsx-3997146191:after{box-sizing:border-box;}#flex.jsx-3997146191{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}#title.jsx-3997146191{height:100%;width:100%;padding-top:10%;}#caption.jsx-3997146191{font-family:\"Source Code Pro\";display:inline-block;position:center;}.a.jsx-3997146191:before,.b.jsx-3997146191:before,.c.jsx-3997146191:before,.d.jsx-3997146191:before,.e.jsx-3997146191:before{font-family:\"VT323\";display:inline-block;font-weight:900;font-size:10em;-webkit-letter-spacing:.3em;-moz-letter-spacing:.3em;-ms-letter-spacing:.3em;letter-spacing:.3em;color:pink;content:attr(data-letter);-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.d.jsx-3997146191:before{margin-right:-.3em;}.a.jsx-3997146191:hover.jsx-3997146191:before{color:#dbff9c;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.a.jsx-3997146191:hover.jsx-3997146191:after{color:#dbff9c;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.b.jsx-3997146191:hover.jsx-3997146191:before{color:#ffc780;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.b.jsx-3997146191:hover.jsx-3997146191:after{color:#ffc780;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.c.jsx-3997146191:hover.jsx-3997146191:before{color:#ffbdb7;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.c.jsx-3997146191:hover.jsx-3997146191:after{color:#ffbdb7;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.d.jsx-3997146191:hover.jsx-3997146191:before{color:#b6f2fc;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.d.jsx-3997146191:hover.jsx-3997146191:after{color:#b6f2fc;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.e.jsx-3997146191:hover.jsx-3997146191:before{color:#ffee8c;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.e.jsx-3997146191:hover.jsx-3997146191:after{color:#ffee8c;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qbWtsZWZla2VyL2M3NC9ibG9nL2NvbXBzL3NvdW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFa0IsQUFFb0gsQUFHakYsQUFJSCxBQVFmLEFBTWdDLEFBT3RCLEFBV0osQUFJRixBQUtDLEFBS0QsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQSxZQXhFRixFQTRCWSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0MsQUFLRCxLQWpENUIsQ0FYMEIsRUF6QmxCLENBYVUsT0FLSyxTQUp2QixFQVlvQixVQVBGLE1BUUUsVUFQcEIsS0FRd0IsRUF4QkEsd0JBcUN4QixBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0EsQUFLQSxzREFqRnFCLGlCQXdCTixXQUNlLDBCQUNJLHVDQXpCZCxrQkFDbkIsV0F5QkQiLCJmaWxlIjoiL1VzZXJzL2pta2xlZmVrZXIvYzc0L2Jsb2cvY29tcHMvc291bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgVG9uZSBmcm9tIFwicmVhY3QtdG9uZVwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmF1ZGlvRmlsZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVG9uZVBsYXlpbmc6IGZhbHNlLFxuICAgICAgZnJlcXVlbmN5OiAxMDAsXG4gICAgICBsZW5ndGg6IDEwMDAsXG4gICAgICB2b2x1bWU6IDFcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVG9uZUEgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVG9uZVBsYXlpbmc6IHRydWUsIGZyZXF1ZW5jeTogMjUwIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRvbmVTID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1RvbmVQbGF5aW5nOiB0cnVlLCBmcmVxdWVuY3k6IDMwMCB9KTtcbiAgfTtcbiBoYW5kbGVUb25lTSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNUb25lUGxheWluZzogdHJ1ZSwgZnJlcXVlbmN5OiAzNTAgfSk7XG4gIH07XG4gaGFuZGxlVG9uZVIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVG9uZVBsYXlpbmc6IHRydWUsIGZyZXF1ZW5jeTogNDAwIH0pO1xuIH07XG5cbiAgcGxheVRvbmVBID0gKCkgPT4ge1xuICAgIHRoaXMuYXVkaW9GaWxlLnBsYXkoKTtcbiAgfVxuXG4gIGhhbmRsZVRvbmVTdG9wID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1RvbmVQbGF5aW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1RvbmVQbGF5aW5nLCBmcmVxdWVuY3ksIGxlbmd0aCwgdm9sdW1lIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJmbGV4XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFcIiBkYXRhLWxldHRlcj1cIkFcIiBvbk1vdXNlT3Zlcj17dGhpcy5wbGF5VG9uZUF9PiA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYlwiIGRhdGEtbGV0dGVyPVwiU1wiIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvbmVTfT4gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVcIiBkYXRhLWxldHRlcj1cIk1cIiBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVUb25lTX0+IDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkXCIgZGF0YS1sZXR0ZXI9XCJSXCIgb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlVG9uZVJ9PiA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhdWRpbyByZWY9IHt0aGlzLmF1ZGlvRmlsZX0gc3JjPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlsZTpKT0hOX01JQ0hFTF9DRUxMTy1KX1NfQkFDSF9DRUxMT19TVUlURV8xX2luX0dfUHJlbHVkZS5vZ2dcIj4gPC9hdWRpbz5cbiAgICAgICAgPGRpdiBpZD1cImNhcHRpb25cIj4gXG5cdFx0ICAgICAgPHA+aG92ZXIgb3ZlciB0aGUgbGV0dGVycyBhYm92ZTwvcD4gXG5cdCAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxUb25lXG4gICAgICAgICAgcGxheT17aXNUb25lUGxheWluZ31cbiAgICAgICAgICBvblN0b3A9e3RoaXMuaGFuZGxlVG9uZVN0b3B9XG4gICAgICAgICAgZnJlcXVlbmN5PXtmcmVxdWVuY3l9XG4gICAgICAgICAgdm9sdW1lPXt2b2x1bWV9XG4gICAgICAgICAgbGVuZ3RoPXtsZW5ndGggLyAxMDAwfVxuICAgICAgICAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICBcdCBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vZGFrfFByZXNzK1N0YXJ0KzJQfFNocmlraGFuZHxWVDMyMyZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICBcdCAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgIFx0XHQgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQgICAgICAgXHQgfVxuXG5cdFx0ICNmbGV4IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cdFx0ICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuXHRcdCAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHQgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQgfVxuXHRcdFx0XG5cblx0XHQjdGl0bGUge1xuXHRcdCAgaGVpZ2h0OiAxMDAlO1xuICAgXHRcdCAgd2lkdGg6IDEwMCU7XG5cdFx0ICBwYWRkaW5nLXRvcDogMTAlO1xuXHRcdH1cblxuXHRcdCNjYXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiO1xuXHRcdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdCAgcG9zaXRpb246IGNlbnRlcjsgXG5cdFx0fVxuXG5cblx0XHQuYTpiZWZvcmUsIC5iOmJlZm9yZSwgLmM6YmVmb3JlLCAuZDpiZWZvcmUsIC5lOmJlZm9yZSB7XG4gICBcdFx0IGZvbnQtZmFtaWx5OiBcIlZUMzIzXCI7XG4gICAgXHRcdCBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBcdFx0IGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgXHRcdCBmb250LXNpemU6IDEwZW07XG4gICBcdFx0IGxldHRlci1zcGFjaW5nOiAuM2VtO1xuICAgXHRcdCBjb2xvcjogcGluaztcbiAgICBcdFx0IGNvbnRlbnQ6YXR0cihkYXRhLWxldHRlcik7XG4gICBcdFx0IHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLW91dDtcblx0XHR9XG5cblx0XHQuZDpiZWZvcmUge1xuXHRcdCBtYXJnaW4tcmlnaHQ6IC0uM2VtO1xuXHRcdH1cblxuXHRcdC5hOmhvdmVyOmJlZm9yZXtcbiAgIFx0XHQgY29sb3I6ICNkYmZmOWM7XG4gICBcdFx0IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHR9XG5cblx0ICAgICAgICAuYTpob3ZlcjphZnRlcntcbiAgICBcdFx0IGNvbG9yOiAjZGJmZjljO1xuICAgXHRcdCB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdFx0fVxuXG5cdFx0LmI6aG92ZXI6YmVmb3Jle1xuICAgXHRcdCBjb2xvcjogI2ZmYzc4MDtcbiAgIFx0XHQgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdH1cblxuXHRcdC5iOmhvdmVyOmFmdGVye1xuICAgXHRcdCBjb2xvcjogI2ZmYzc4MDtcbiAgIFx0XHQgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdH1cblxuXHRcdC5jOmhvdmVyOmJlZm9yZXtcbiAgIFx0XHQgY29sb3I6ICNmZmJkYjc7XG4gICBcdFx0IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHR9XG5cblx0XHQuYzpob3ZlcjphZnRlcntcbiAgIFx0XHQgY29sb3I6ICNmZmJkYjc7XG4gICBcdFx0IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHR9XG5cblx0XHQuZDpob3ZlcjpiZWZvcmV7XG4gICBcdFx0IGNvbG9yOiAjYjZmMmZjO1xuICAgXHRcdCB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdFx0fVxuXG5cdFx0LmQ6aG92ZXI6YWZ0ZXJ7XG4gICBcdFx0IGNvbG9yOiAjYjZmMmZjO1xuICAgXHRcdCB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdFx0fVxuXG5cdFx0LmU6aG92ZXI6YmVmb3Jle1xuICAgXHRcdCBjb2xvcjogI2ZmZWU4YztcbiAgICBcdFx0IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHR9XG5cblx0XHQuZTpob3ZlcjphZnRlcntcbiAgIFx0XHQgY29sb3I6ICNmZmVlOGM7XG4gICBcdFx0IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHR9XHRcblx0YH0gPC9zdHlsZT4gXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=/Users/jmklefeker/c74/blog/comps/sound.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.f176407bb76cabb64ce7.hot-update.js.map