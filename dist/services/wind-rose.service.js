"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _windRose = _interopRequireDefault(require("../configs/wind-rose.config"));

var WindRose =
/*#__PURE__*/
function () {
  function WindRose() {
    (0, _classCallCheck2["default"])(this, WindRose);
  }

  (0, _createClass2["default"])(WindRose, [{
    key: "direction",
    value: function direction(deg) {
      var value = '';

      _windRose["default"].forEach(function (item) {
        if (item.from < deg && deg < item.to) value = item.title;
      });

      return value;
    }
  }]);
  return WindRose;
}();

var WindRoseService = new WindRose();
var _default = WindRoseService;
exports["default"] = _default;
//# sourceMappingURL=wind-rose.service.js.map
