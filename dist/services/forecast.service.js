"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var ForecastService =
/*#__PURE__*/
function () {
  function ForecastService() {
    (0, _classCallCheck2["default"])(this, ForecastService);
    this.host = 'https://api.darksky.net/forecast';
    this.apiToken = process.env.FORECAST_TOKEN;
    this.latitude = 46.867515;
    this.longitude = 32.001542;
    this.lang = 'ru';
    this.units = 'si';
  }

  (0, _createClass2["default"])(ForecastService, [{
    key: "getCurrentData",
    value: function getCurrentData() {
      _axios["default"].get("".concat(this.host, "/").concat(this.apiToken, "/").concat(this.latitude, ",").concat(this.longitude), {
        params: {
          extend: 'currently',
          lang: this.lang,
          units: this.units
        }
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getHourlyData",
    value: function getHourlyData() {
      _axios["default"].get("".concat(this.host, "/").concat(this.apiToken, "/").concat(this.latitude, ",").concat(this.longitude), {
        params: {
          extend: 'hourly',
          lang: this.lang,
          units: this.units
        }
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }]);
  return ForecastService;
}();

exports["default"] = ForecastService;
//# sourceMappingURL=forecast.service.js.map
