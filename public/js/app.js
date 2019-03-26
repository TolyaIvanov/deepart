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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */
__webpack_require__(/*! ./index */ "./resources/js/index.js");

__webpack_require__(/*! ./scroll/header/header */ "./resources/js/scroll/header/header.js");

__webpack_require__(/*! ./slider/slider */ "./resources/js/slider/slider.js");

__webpack_require__(/*! ./try/try */ "./resources/js/try/try.js");

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 100,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});

/***/ }),

/***/ "./resources/js/scroll/header/header.js":
/*!**********************************************!*\
  !*** ./resources/js/scroll/header/header.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  //TODO make throttle
  $(window).scroll(function () {
    var logoSet = $('.navbar .navbar-item-logo path')[0];
    var listItems = $('.navbar .navbar-item');

    if ($(window).scrollTop() > $(window).height() - 32) {
      listItems.map(function (key, item) {
        item.style.color = "#333";
      });
      logoSet.style.fill = "#333";
    } else {
      listItems.map(function (key, item) {
        item.style.color = "#ddd";
      });
      logoSet.style.fill = "#ddd";
    }
  });
});

/***/ }),

/***/ "./resources/js/slider/slider.js":
/*!***************************************!*\
  !*** ./resources/js/slider/slider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 5500;
var translateWidth = 0;
$(function () {
  setInterval(nextSlide, slideInterval);
});

function nextSlide() {
  if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('#slidewrapper').css('transform', 'translate(0, 0)');
    slideNow = 1;
  } else {
    translateWidth = -$('#viewport').width() * slideNow;
    $('#slidewrapper').css({
      'transform': 'translate(' + translateWidth + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      '-o-transform': 'translate(' + translateWidth + 'px, 0)',
      '-moz-transform': 'translate(' + translateWidth + 'px, 0)'
    });
    slideNow++;
  }
}

/***/ }),

/***/ "./resources/js/try/try.js":
/*!*********************************!*\
  !*** ./resources/js/try/try.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tryMenu = $('.try .try-menu-item');
var tryStyles = $('.try .try-styles .try-part');
tryMenu.map(function (key, item) {
  item.addEventListener('click', function () {
    if (!item.className.split(" ").includes("active")) {
      $('.try .try-menu .active').removeClass('active');
      $('.try .try-styles .visible').removeClass('visible');
      tryMenu[key].classList.add('active');
      tryStyles[key].classList.add('visible');
    }
  }, false);
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\OSPanel\domains\egor\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\OSPanel\domains\egor\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });