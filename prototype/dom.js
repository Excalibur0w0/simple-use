"use strict"

;(function () {
  var HTMLCollection = this && this.globalThis && this.globalThis.HTMLCollection
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