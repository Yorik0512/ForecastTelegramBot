"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Forecast =
/*#__PURE__*/
function () {
  function Forecast() {
    (0, _classCallCheck2["default"])(this, Forecast);
  }

  (0, _createClass2["default"])(Forecast, [{
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
  return Forecast;
}();

var ForecastController = new Forecast();
var _default = ForecastController;
exports["default"] = _default;
//# sourceMappingURL=forecast.controller.js.map
