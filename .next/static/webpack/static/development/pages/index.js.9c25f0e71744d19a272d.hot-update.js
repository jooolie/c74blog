webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/p5sketch.js":
/*!***************************!*\
  !*** ./comps/p5sketch.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sketch; });
/* harmony import */ var react_p5_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-p5-wrapper */ "./node_modules/react-p5-wrapper/lib/P5Wrapper.js");
/* harmony import */ var react_p5_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_p5_wrapper__WEBPACK_IMPORTED_MODULE_0__);

function sketch(p) {
  var canvas;

  p.setup = function () {
    canvas = p.createCanvas(300, 200);
    p.noStroke();
  };

  p.draw = function () {
    p.background('orangered');
    p.ellipse(150, 100, 100, 100);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (newProps) {
    if (canvas) //Make sure the canvas has been created
      p.fill(newProps.color);
  };
}

/***/ })

})
//# sourceMappingURL=index.js.9c25f0e71744d19a272d.hot-update.js.map