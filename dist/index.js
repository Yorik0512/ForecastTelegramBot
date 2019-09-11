"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _telegraf = _interopRequireDefault(require("telegraf"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _telegrafWit = _interopRequireDefault(require("telegraf-wit"));

var _forecastApi = _interopRequireDefault(require("./services/forecast-api.service"));

var _forecast = _interopRequireDefault(require("./entites/forecast.entites"));

var _forecast2 = _interopRequireDefault(require("./controllers/forecast.controller"));

// Services.
// Entities
// Controllers.
// Setup dotenv.
_dotenv["default"].config();

var bot = new _telegraf["default"](process.env.BOT_TOKEN);
var wit = new _telegrafWit["default"](process.env.WIT_TOKEN);
bot.telegram.getMe().then(function (botInfo) {
  bot.options.username = botInfo.username;
});
bot.on('text', function (ctx) {
  return wit.meaning(ctx.message.text).then(function (res) {
    if ('currentForecast' in res.entities) {
      _forecast2["default"].currentForecast(_forecastApi["default"], _forecast["default"], ctx);
    }

    return false;
  });
});
bot.startPolling();
//# sourceMappingURL=index.js.map
