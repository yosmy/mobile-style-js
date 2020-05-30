"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var match = function match(string, elements) {
  if (!string) {
    return false;
  }

  for (var i = 0; i <= elements.length - 1; i++) {
    if (!string.includes(elements[i])) {
      return false;
    }
  }

  return true;
};

var _default = match;
exports["default"] = _default;