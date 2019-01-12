(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

require('./prototype/math')
require('./prototype/dom')
},{"./prototype/dom":2,"./prototype/math":3}],2:[function(require,module,exports){
"use strict"

;(function () {
  var HTMLCollection = this && this.HTMLCollection
  if (!HTMLCollection) {
    return
  }
  HTMLCollection.prototype.forEach = function (action) {
    for (var i = 0, len = this.length; i < len; i++) {
      // i作为index传入
      action(this[i], i)
    }
  }

  HTMLCollection.prototype.map = function (action) {
    var result = []

    for (var i = 0, len = this.length; i < len; i++) {
      // i作为index传入
      result.push(action(this[i], i))
    }

    return result
  }

  HTMLCollection.prototype.filter = function (action) {
    var result = []
    for (var i = 0, len = this.length; i < len; i++) {
      // i作为index传入
      if (action(this[i], i)) {
        result.push(this[i])
      }
    }

    return result
  }
})()
},{}],3:[function(require,module,exports){
"use strict"

;(function () {
  if (!Math) {
    return
  }
  Math.range = function (start, end) {
    var len = end - start
    var arr = new Array(len)

    for (var i = 0; i < len; i++) {
      arr[i] = start + i
    }

    return arr
  }
})()
},{}]},{},[1]);
