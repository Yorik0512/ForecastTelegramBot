"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var weatherIcon = _interopRequireWildcard(require("../configs/weather-icon.config"));

var _windRose = _interopRequireDefault(require("../services/wind-rose.service"));

var Forecast =
/*#__PURE__*/
function () {
  function Forecast() {
    (0, _classCallCheck2["default"])(this, Forecast);
  }

  (0, _createClass2["default"])(Forecast, [{
    key: "currentForecast",
    value: function currentForecast(data, userName) {
      var summary = data.summary,
          windSpeed = data.windSpeed,
          windGust = data.windGust,
          temperature = data.temperature,
          icon = data.icon,
          windBearing = data.windBearing;

      var windDirection = _windRose["default"].direction(windBearing);

      return "@".concat(userName, ", \u0441\u0435\u0439\u0447\u0430\u0441 ").concat(summary.toLowerCase()).concat(weatherIcon["default"][icon], ", \n    \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 ").concat(temperature.toFixed(0), "\u2103,\n    \u0432\u0435\u0442\u0435\u0440 ").concat(windDirection, ",\n    \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u0442\u0440\u0430 ").concat(windSpeed.toFixed(1), " (\u043C/\u0441),\n    \u043F\u043E\u0440\u044B\u0432\u044B \u0434\u043E ").concat(windGust.toFixed(1), " (\u043C/\u0441)");
    }
  }]);
  return Forecast;
}();

var ForecastEntities = new Forecast();
var _default = ForecastEntities;
exports["default"] = _default;
//# sourceMappingURL=forecast.entites.js.map
