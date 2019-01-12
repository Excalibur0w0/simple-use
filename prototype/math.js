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