"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ForecastController =
/*#__PURE__*/
function () {
  function ForecastController() {
    (0, _classCallCheck2["default"])(this, ForecastController);
  }

  (0, _createClass2["default"])(ForecastController, [{
    key: "currentForecast",
    value: function currentForecast(forecastService, forecastEntities, ctx) {
      var forecastData = forecastService.getCurrentForecast();
      var userName = ctx.message.from.username;
      forecastData.then(function (data) {
        var msg = forecastEntities.currentForecast(data, userName);
        return ctx.reply(msg);
      });
    }
  }]);
  return ForecastController;
}();

exports["default"] = ForecastController;
//# sourceMappingURL=forecast.controller.js.map
